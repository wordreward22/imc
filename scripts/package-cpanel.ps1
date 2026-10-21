param([switch]$SkipBuild)

$ErrorActionPreference = 'Stop'
$repoRoot = Split-Path $PSScriptRoot -Parent
Push-Location $repoRoot
try {
    if (-not $SkipBuild) {
        npm run build
        if ($LASTEXITCODE -ne 0) { throw 'The static build failed.' }
    }
    if (-not (Test-Path 'out/index.html')) { throw 'The static export is missing.' }
    Copy-Item 'public/api/submit.php' 'out/api/submit.php' -Force

    # The WordPress media archive also contains old executable/cache files.
    # The exported site only needs its media and the new form endpoint.
    Get-ChildItem 'out/uploads' -Recurse -File |
        Where-Object { $_.Extension -in @('.php', '.log', '.zip', '.json') } |
        Remove-Item -Force

    $zip = Join-Path $repoRoot 'imc-cpanel-upload.zip'
    Compress-Archive -Path 'out/*' -DestinationPath $zip -Force
    Write-Output "Created $zip"
} finally {
    Pop-Location
}
