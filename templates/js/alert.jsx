  const Alert = ({ children, variant = "info", className = "" }) => {
    const variants = {
      success: "bg-green-50 text-green-700 border-green-200",
      danger: "bg-red-50 text-red-700 border-red-200",
      warning: "bg-yellow-50 text-yellow-700 border-yellow-200",
      info: "bg-blue-50 text-blue-700 border-blue-200",
    };

    return (
      <div
        className={`p-2 rounded-sm border text-xs ${variants[variant]} ${className}`}
      >
        {children}
      </div>
    );
  };
