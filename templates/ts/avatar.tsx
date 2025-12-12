const Avatar = ({ src, initials, size = "sm" }) => {
  const sizes = {
    xs: "w-6 h-6 text-xs",
    sm: "w-8 h-8 text-sm",
    md: "w-10 h-10",
  };

  return src ? (
    <img className={`${sizes[size]} rounded-sm`} src={src} alt="Avatar" />
  ) : (
    <div
      className={`${sizes[size]} rounded-sm bg-blue-600 flex items-center justify-center text-white font-medium`}
    >
      {initials}
    </div>
  );
};
