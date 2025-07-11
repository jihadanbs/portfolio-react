import PropTypes from "prop-types";

// Helper untuk menggabungkan class dengan rapi
const cn = (...classes) => classes.filter(Boolean).join(" ");

// Komponen dasar untuk tombol, bisa jadi <a> atau <button>
const Button = ({
  href,
  target,
  label,
  icon,
  variant = "primary",
  className,
  ...props
}) => {
  const Component = href ? "a" : "button";

  // Daftar kelas dasar untuk semua tombol
  const baseClasses =
    "group relative inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-medium text-sm sm:text-base transition-all duration-300 active:scale-95";

  // Kelas spesifik berdasarkan varian (style)
  const variantClasses = {
    primary:
      "bg-gradient-to-r from-sky-400 to-blue-500 text-zinc-950 hover:from-sky-300 hover:to-blue-400 hover:scale-105 hover:shadow-lg hover:shadow-sky-500/25",
    outline:
      "bg-zinc-800 text-zinc-50 hover:bg-zinc-700 hover:scale-105 ring-1 ring-inset ring-zinc-50/5",
  };

  return (
    <Component
      href={href}
      target={target}
      className={cn(baseClasses, variantClasses[variant], className)}
      {...props}
    >
      <span className="relative z-10">{label}</span>
      {icon && (
        <span className="relative z-10 transition-transform duration-300 group-hover:translate-y-0.5">
          {icon}
        </span>
      )}
    </Component>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.node, // Mengizinkan ikon berupa komponen/SVG
  variant: PropTypes.oneOf(["primary", "outline"]),
  className: PropTypes.string,
};

// Export komponen dengan nama yang lebih spesifik jika diinginkan
export const ButtonPrimary = (props) => <Button {...props} variant="primary" />;
export const ButtonOutline = (props) => <Button {...props} variant="outline" />;

export default Button;
