import loadRegistry from "../utils/loadRegistry.js";
import add from "./add.js";
export default function addAll(options) {
    const registry = loadRegistry();
    Object.keys(registry).forEach(component => {
        add(component, options);
    });
}
