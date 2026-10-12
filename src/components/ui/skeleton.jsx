import React from "react";
import { cn } from "../../lib/utils";

export function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-md bg-slate-800/60 dark:bg-slate-800/80 skeleton-shimmer",
        className
      )}
      {...props}
    />
  );
}

export function BentoSkeletonCard({ size = "md:col-span-1" }) {
  return (
    <div
      className={cn(
        "p-6 sm:p-8 bg-slate-900/80 border border-slate-800 rounded-3xl flex flex-col justify-between h-[360px] animate-pulse-subtle",
        size
      )}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Skeleton className="h-6 w-24 rounded-full" />
          <Skeleton className="h-8 w-8 rounded-full" />
        </div>
        <Skeleton className="h-8 w-3/4 rounded-lg" />
        <Skeleton className="h-4 w-full rounded" />
        <Skeleton className="h-4 w-5/6 rounded" />
      </div>

      <div className="mt-8 space-y-4">
        <div className="flex gap-2">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-14 rounded-full" />
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
          <Skeleton className="h-5 w-28 rounded" />
          <Skeleton className="h-8 w-24 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default Skeleton;
