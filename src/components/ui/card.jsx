import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const Card = React.forwardRef(function Card(
  { className, hoverEffect = true, children, ...props },
  ref
) {
  if (hoverEffect) {
    return (
      <motion.div
        ref={ref}
        whileHover={{
          y: -4,
          transition: { type: "spring", stiffness: 400, damping: 25 },
        }}
        className={cn(
          "relative overflow-hidden rounded-3xl border border-slate-800/90 bg-slate-900/85 text-slate-100 shadow-xl backdrop-blur-sm transition-colors duration-300 dark:border-slate-800/80 dark:bg-slate-900/90 glow-card",
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div
      ref={ref}
      className={cn(
        "relative overflow-hidden rounded-3xl border border-slate-800/90 bg-slate-900/85 text-slate-100 shadow-xl backdrop-blur-sm transition-colors duration-300 dark:border-slate-800/80 dark:bg-slate-900/90",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

export const CardHeader = ({ className, ...props }) => (
  <div className={cn("flex flex-col space-y-2 p-6 sm:p-8", className)} {...props} />
);

export const CardTitle = ({ className, ...props }) => (
  <h3 className={cn("text-xl font-bold tracking-tight text-white", className)} {...props} />
);

export const CardContent = ({ className, ...props }) => (
  <div className={cn("p-6 sm:p-8 pt-0", className)} {...props} />
);
