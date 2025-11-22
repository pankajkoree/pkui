import loadRegistry from "../utils/loadRegistry.js";
import copyFile from "../utils/copyFile.js";
import { log } from "../utils/logger.js";
export default function add(component, options) {
    const registry = loadRegistry();
    const item = registry[component];
    if (!item) {
        log.error(`Component '${component}' not found.`);
        process.exit(1);
    }
    const mode = options.ts ? "ts" : "js";
    item.files[mode].forEach(file => {
        copyFile(file.src, file.dest, mode);
        log.success(`Added ${file.dest}`);
    });
}
