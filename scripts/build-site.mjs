import { cp, mkdir, realpath, rm, stat } from "node:fs/promises";
import { dirname, extname, isAbsolute, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const source = join(root, "out");
const target = join(root, "site");

// Only replace the generated site/ directory inside this checkout.
const resolvedRoot = await realpath(root);
const relativeTarget = relative(resolvedRoot, target);
if (relativeTarget.startsWith("..") || isAbsolute(relativeTarget) || relativeTarget !== "site") {
  throw new Error("Refusing to replace a directory outside this repository");
}
if (!(await stat(join(source, "index.html")).catch(() => null))) {
  throw new Error("Static export is missing; run the Next.js build first");
}

await rm(target, { recursive: true, force: true });
await mkdir(target, { recursive: true });
await cp(source, target, {
  recursive: true,
  filter: (path) => {
    const relativePath = relative(source, path);
    if (relativePath.startsWith("uploads" + sep)) {
      return ![".php", ".log", ".zip", ".json"].includes(extname(path).toLowerCase());
    }
    return true;
  },
});
console.log("Updated site/ with the deployable static website and PHP form endpoint");
