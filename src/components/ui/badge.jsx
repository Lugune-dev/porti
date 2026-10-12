import React from "react";
import { cn } from "../../lib/utils";

export function Badge({
  children,
  variant = "default",
  className,
  ...props
}) {
  const variants = {
    default:
      "bg-slate-800/80 text-slate-300 border-slate-700/60 dark:bg-slate-800/90 dark:text-slate-200 dark:border-slate-700/80",
    accent:
      "bg-violet-500/10 text-violet-300 border-violet-500/30 dark:bg-violet-950/40 dark:text-violet-300 dark:border-violet-700/50",
    cyan:
      "bg-cyan-500/10 text-cyan-300 border-cyan-500/30 dark:bg-cyan-950/40 dark:text-cyan-300 dark:border-cyan-700/50",
    emerald:
      "bg-emerald-500/10 text-emerald-300 border-emerald-500/30 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-700/50",
    outline:
      "border-slate-700 text-slate-400 dark:border-slate-800 dark:text-slate-400",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border tracking-wide transition-colors",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export default Badge;
