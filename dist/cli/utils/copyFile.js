import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
export default function copyFile(srcName, destPath, mode) {
    const source = path.join(__dirname, "../../templates", mode, srcName);
    const target = path.join(process.cwd(), destPath);
    // Ensure the folder exists
    fs.mkdirSync(path.dirname(target), { recursive: true });
    // Copy the file
    fs.copyFileSync(source, target);
}
