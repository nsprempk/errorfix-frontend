import { Link } from "react-router-dom";

export default function Button({
  children,
  to,
  href,
  type = "button",
  variant = "primary",
  className = "",
  onClick,
  disabled = false,
}) {
  const variants = {
    primary: "bg-gray-950 text-white hover:bg-gray-800",
    secondary:
      "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100",
    light: "bg-white text-gray-950 hover:bg-gray-200",
    dark: "bg-gray-900 text-white hover:bg-gray-700",
    ghost: "bg-transparent text-gray-900 hover:bg-gray-100",
  };

  const classes = `
    inline-flex items-center justify-center
    rounded-full px-6 py-3
    text-sm font-semibold
    transition
    duration-200
    focus:outline-none
    focus:ring-2
    focus:ring-gray-400
    focus:ring-offset-2
    disabled:cursor-not-allowed
    disabled:opacity-50
    ${variants[variant] || variants.primary}
    ${className}
  `;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
