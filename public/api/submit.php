<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

function respond(int $status, array $body): never
{
    http_response_code($status);
    echo json_encode($body, JSON_INVALID_UTF8_SUBSTITUTE);
    exit;
}

function error_response(int $status, string $code): never
{
    respond($status, ['error' => $code]);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');
    error_response(405, 'METHOD_NOT_ALLOWED');
}

$maxFileBytes = 10 * 1024 * 1024;
$maxRequestBytes = 14 * 1024 * 1024;
if ((int) ($_SERVER['CONTENT_LENGTH'] ?? 0) > $maxRequestBytes) {
    error_response(413, 'TOO_LARGE');
}
if (!str_starts_with(strtolower($_SERVER['CONTENT_TYPE'] ?? ''), 'multipart/form-data')) {
    error_response(400, 'INVALID_FORM');
}

// Match the site's hidden field: silently discard simple bot submissions.
if (!empty($_POST['website'])) {
    respond(200, ['ok' => true]);
}

$subjects = [
    'quote' => 'IMC Iraq quote request',
    'contact' => 'IMC Iraq contact request',
    'careers' => 'IMC Iraq careers application',
    'repairs' => 'IMC Iraq field service request',
    'training' => 'IMC Iraq training request',
];
$allowedFields = [
    'quote' => ['product', 'name', 'company', 'email', 'phone', 'city', 'powerRequired', 'message'],
    'contact' => ['name', 'email', 'phone', 'service', 'message'],
    'careers' => ['name', 'email', 'education', 'phone'],
    'repairs' => ['name', 'company', 'email', 'phone', 'city', 'country'],
    'training' => ['name', 'email', 'phone', 'company', 'notes'],
];

$type = $_POST['type'] ?? null;
$language = $_POST['language'] ?? null;
if (!is_string($type) || !isset($subjects[$type])) {
    error_response(400, 'INVALID_TYPE');
}
if (!is_string($language) || !in_array($language, ['en', 'ar', 'ku'], true)) {
    error_response(400, 'INVALID_LANGUAGE');
}

$fields = [];
foreach ($allowedFields[$type] as $key) {
    $value = $_POST[$key] ?? '';
    if (!is_string($value)) {
        error_response(400, 'INVALID_FORM');
    }
    $value = trim($value);
    $length = preg_match_all('/./us', $value);
    if ($length === false) {
        error_response(400, 'INVALID_FORM');
    }
    if ($length > (in_array($key, ['message', 'notes'], true) ? 4000 : 250)) {
        error_response(400, 'FIELD_TOO_LONG');
    }
    $fields[$key] = $value;
}
if ($fields['name'] === '' || !filter_var($fields['email'], FILTER_VALIDATE_EMAIL)) {
    error_response(400, 'INVALID_CONTACT');
}

$attachment = null;
$cv = $_FILES['cv'] ?? null;
if ($type === 'careers') {
    if (!is_array($cv) || is_array($cv['error'] ?? null) || ($cv['error'] ?? UPLOAD_ERR_NO_FILE) === UPLOAD_ERR_NO_FILE) {
        error_response(400, 'CV_REQUIRED');
    }
    if (($cv['error'] ?? null) === UPLOAD_ERR_INI_SIZE || ($cv['error'] ?? null) === UPLOAD_ERR_FORM_SIZE) {
        error_response(413, 'CV_TOO_LARGE');
    }
    if (($cv['error'] ?? null) !== UPLOAD_ERR_OK || !is_uploaded_file($cv['tmp_name'] ?? '')) {
        error_response(400, 'INVALID_CV');
    }
    if ($cv['size'] > $maxFileBytes) {
        error_response(413, 'CV_TOO_LARGE');
    }

    $filename = $cv['name'] ?? '';
    if (!is_string($filename)) {
        error_response(400, 'INVALID_CV');
    }
    $extension = strtolower(pathinfo($filename, PATHINFO_EXTENSION));
    $signature = file_get_contents($cv['tmp_name'], false, null, 0, 8);
    $valid = match ($extension) {
        'pdf' => str_starts_with($signature ?: '', '%PDF-'),
        'doc' => str_starts_with(bin2hex($signature ?: ''), 'd0cf11e0a1b11ae1'),
        'docx' => str_starts_with(bin2hex($signature ?: ''), '504b0304'),
        default => false,
    };
    if (!$valid) {
        error_response(400, 'INVALID_CV');
    }
    $bytes = file_get_contents($cv['tmp_name']);
    if ($bytes === false) {
        error_response(400, 'INVALID_CV');
    }
    $safeName = preg_replace('/[^\p{L}\p{N}_.-]/u', '_', $filename);
    $attachment = [
        'filename' => substr($safeName ?: 'cv.' . $extension, 0, 100),
        'content' => base64_encode($bytes),
    ];
} elseif (is_array($cv) && ($cv['error'] ?? UPLOAD_ERR_NO_FILE) !== UPLOAD_ERR_NO_FILE) {
    error_response(400, 'UNEXPECTED_FILE');
}

// Keep this file one directory above the site's document root.
$configFile = dirname(__DIR__, 2) . '/imc-config.php';
$config = is_file($configFile) ? require $configFile : [];
$apiKey = is_array($config) ? ($config['resend_api_key'] ?? '') : '';
$from = is_array($config) ? ($config['from_email'] ?? '') : '';
$to = is_array($config) ? ($config['to_email'] ?? 'info@imc.iq') : 'info@imc.iq';
if (!is_string($apiKey) || $apiKey === '' || !is_string($from) || $from === '') {
    error_response(503, 'MAIL_NOT_CONFIGURED');
}
if (!is_string($to) || !filter_var($to, FILTER_VALIDATE_EMAIL) || !function_exists('curl_init')) {
    error_response(503, 'MAIL_NOT_CONFIGURED');
}

$lines = ["Submission type: $type", "Language: $language"];
foreach ($allowedFields[$type] as $key) {
    $lines[] = $key . ': ' . ($fields[$key] === '' ? '—' : $fields[$key]);
}
$payload = [
    'from' => $from,
    'to' => [$to],
    'reply_to' => $fields['email'],
    'subject' => $subjects[$type],
    'text' => implode("\n", $lines),
];
if ($attachment !== null) {
    $payload['attachments'] = [$attachment];
}

$curl = curl_init('https://api.resend.com/emails');
curl_setopt_array($curl, [
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => ['Authorization: Bearer ' . $apiKey, 'Content-Type: application/json'],
    CURLOPT_POSTFIELDS => json_encode($payload, JSON_INVALID_UTF8_SUBSTITUTE),
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CONNECTTIMEOUT => 5,
    CURLOPT_TIMEOUT => 15,
]);
$result = curl_exec($curl);
$status = curl_getinfo($curl, CURLINFO_HTTP_CODE);
$failure = curl_error($curl);
curl_close($curl);
if ($result === false) {
    error_log('IMC form delivery failed: ' . $failure);
    error_response(502, 'MAIL_UNAVAILABLE');
}
if ($status < 200 || $status >= 300) {
    error_log('Resend rejected IMC form submission: HTTP ' . $status);
    error_response(502, 'MAIL_REJECTED');
}
respond(201, ['ok' => true]);
