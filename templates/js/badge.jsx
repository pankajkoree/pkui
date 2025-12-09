const Badge = ({ children, variant = "primary", className = "" }) => {
  const variants = {
    primary: "bg-blue-100 text-blue-700",
    secondary: "bg-gray-100 text-gray-700",
    success: "bg-green-100 text-green-700",
    danger: "bg-red-100 text-red-700",
    warning: "bg-yellow-100 text-yellow-700",
    info: "bg-indigo-100 text-indigo-700",
  };

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-sm text-xs font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
