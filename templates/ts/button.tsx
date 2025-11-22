import React from "react";
import { cva } from "@pankaj.koree/pkui/helpers/cva.js";

const styles = cva("px-4 py-2 rounded", {
  variant: {
    primary: "bg-blue-600 text-white",
    secondary: "bg-gray-600 text-white",
  },
});

interface ButtonProps {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export default function Button({ variant = "primary", children }: ButtonProps) {
  return <button className={styles({ variant })}>{children}</button>;
}
