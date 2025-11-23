import { cva } from "@pankaj.koree/pkui/helpers/cva.js";

const styles = cva("px-4 py-2 rounded", {
  variant: {
    primary: "bg-blue-600 text-white",
    secondary: "bg-gray-600 text-white",
    signup: "bg-green-400 text-white hover:bg-green-600",
    login: "bg-blue-400 text-white hover:bg-blue-600",
    bordered: "border border-gray-600 bg-black text-white hover:bg-gray-500",
  },
});

export default function Button({ variant = "primary", children }) {
  return <button className={styles({ variant })}>{children}</button>;
}
