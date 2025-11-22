import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
export default function loadRegistry() {
    const registryPath = path.join(__dirname, "../../registry/components.json");
    return JSON.parse(fs.readFileSync(registryPath, "utf8"));
}
