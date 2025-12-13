  const ProgressBar = ({ value, variant = "primary" }) => {
    const variants = {
      primary: "bg-blue-600",
      success: "bg-green-600",
      warning: "bg-yellow-600",
      danger: "bg-red-600",
    };

    return (
      <div className="w-full bg-gray-200 rounded-sm h-1.5">
        <div
          className={`h-1.5 rounded-sm ${variants[variant]}`}
          style={{ width: `${value}%` }}
        ></div>
      </div>
    );
  };