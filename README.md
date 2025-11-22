
# `@pankaj.koree/pkui`

A Command Line Interface (CLI) tool and component registry for quickly adding high-quality, pre-configured React UI components to your project. Built with Tailwind CSS support, this CLI automates setup and file management, letting you focus on development.

## 🚀 Features

  * **Quick Setup:** Initialize your project with the required folder structure and Tailwind CSS configuration.
  * **Component Addition:** Easily add individual components (e.g., `Button`, `Card`) in either **TypeScript** or **JavaScript** format.
  * **Dependency Management:** Automatically provides necessary utilities (like the internal `cva` styling helper) via package imports.
  * **Batch Addition:** Add all components from the registry at once.

## 📦 Installation

To use the CLI, install the package in your project:

```bash
npm install @pankaj.koree/pkui
# or
yarn add @pankaj.koree/pkui
```


## ⚙️ Usage

The main command to run the CLI is **`npx @pankaj.koree/pkui`** (or the alias **`pk-ui`**).

### 1\. Initialize Your Project (Recommended First Step)

This command sets up the necessary environment, including any required files or basic folder structures, in your current working directory.

```bash
npx @pankaj.koree/pkui init
```

| Command | Description |
| :--- | :--- |
| `init` | Initializes the project, setting up basic configurations and folder structure. |

-----

### 2\. Add an Individual Component

Use the `add` command followed by the component name and the desired language flag (`--ts` or `--js`).

| Command | Description | Example |
| :--- | :--- | :--- |
| `add <component> --ts` | Adds the component in **TypeScript** format (e.g., `Button.tsx`). | `npx @pankaj.koree/pkui add button --ts` |
| `add <component> --js` | Adds the component in **JavaScript** format (e.g., `Button.jsx`). | `npx @pankaj.koree/pkui add button --js` |

*The component will typically be placed in the `components/ui/` folder within your project.*

-----

### 3\. Add All Components

Use the `add-all` command to automatically copy every component currently available in the registry.

| Command | Description | Example |
| :--- | :--- | :--- |
| `add-all --ts` | Adds all components in **TypeScript** format. | `npx @pankaj.koree/pkui add-all --ts` |
| `add-all --js` | Adds all components in **JavaScript** format. | `npx @pankaj.koree/pkui add-all --js` |

-----

### 4\. Update a Component

If a component already exists in your local project, you can use the `update` command to overwrite it with the latest version from the registry.

| Command | Description | Example |
| :--- | :--- | :--- |
| `update <component> --ts` | Updates an existing component to the latest **TypeScript** version. | `npx @pankaj.koree/pkui update button --ts` |

## 💡 How Components Work

The components copied by this CLI use the styling utility `cva`. This utility is provided by the `@pankaj.koree/pkui` package itself and is automatically imported in the copied files:

```typescript
// Copied Button.tsx file
import { cva } from "@pankaj.koree/pkui/helpers/cva.js"; 
// ...
```

By keeping `@pankaj.koree/pkui` installed, your components will always have access to the necessary helper functions.

## 🤝 Contribution

If you find a bug or have an idea for a new component, please open an issue or submit a pull request\!

-----

*Created by Pankaj Koree.*