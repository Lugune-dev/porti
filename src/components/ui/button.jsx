import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const Button = React.forwardRef(function Button(
  {
    className,
    variant = "primary",
    size = "default",
    children,
    disabled = false,
    ...props
  },
  ref
) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer";

  const variants = {
    primary:
      "bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 border border-violet-400/20",
    secondary:
      "bg-slate-800/90 text-slate-100 hover:bg-slate-700/90 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:bg-slate-700/80 border border-slate-700/80 dark:border-slate-700/60 shadow-sm",
    outline:
      "border border-slate-700/80 dark:border-slate-800 text-slate-300 dark:text-slate-300 hover:bg-slate-800/50 hover:text-white dark:hover:bg-slate-800/60",
    ghost:
      "text-slate-300 dark:text-slate-300 hover:bg-slate-800/50 dark:hover:bg-slate-800/60 hover:text-white",
    glow:
      "relative bg-slate-950 text-white border border-violet-500/40 hover:border-violet-400 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]",
  };

  const sizes = {
    sm: "h-8 px-3 text-xs gap-1.5",
    default: "h-10 px-5 text-sm gap-2",
    lg: "h-12 px-7 text-base gap-2.5",
    icon: "h-10 w-10 p-0 rounded-full",
  };

  return (
    <motion.button
      ref={ref}
      whileHover={{ scale: disabled ? 1 : 1.03 }}
      whileTap={{ scale: disabled ? 1 : 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  );
});

export default Button;
