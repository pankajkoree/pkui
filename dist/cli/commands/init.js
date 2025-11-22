import fs from "fs";
export default function init() {
    if (!fs.existsSync("tailwind.config.js")) {
        fs.writeFileSync("tailwind.config.js", `module.exports = {
  content: ["./components/**/*.{js,ts,jsx,tsx}"],
  theme: {},
  plugins: [],
};`);
        console.log("✔ Tailwind config created");
    }
    if (!fs.existsSync("components/ui")) {
        fs.mkdirSync("components/ui", { recursive: true });
        console.log("✔ components/ui created");
    }
}
