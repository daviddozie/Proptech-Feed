"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function PostSkeleton() {
  return (
    <div className="border border-card-border bg-card rounded-[24px] p-5 flex flex-col gap-4">
      {/* User Header Skeleton */}
      <div className="flex items-center gap-3">
        <Skeleton className="h-[42px] w-[42px] rounded-full shrink-0 bg-neutral-800/60" />
        <div className="flex flex-col gap-1.5 flex-1">
          <Skeleton className="h-3.5 w-[140px] rounded bg-neutral-800/60" />
          <Skeleton className="h-2.5 w-[80px] rounded bg-neutral-800/60" />
        </div>
      </div>

      {/* Content Text Skeleton */}
      <div className="flex flex-col gap-2 pt-1">
        <Skeleton className="h-3 w-full rounded bg-neutral-800/60" />
        <Skeleton className="h-3 w-11/12 rounded bg-neutral-800/60" />
        <Skeleton className="h-3 w-4/5 rounded bg-neutral-800/60" />
      </div>

      {/* Location / Tag Skeleton */}
      <div className="flex items-center gap-3 pt-0.5">
        <Skeleton className="h-3 w-[120px] rounded bg-neutral-800/60" />
        <Skeleton className="h-4.5 w-[65px] rounded-full bg-neutral-800/60" />
      </div>

      {/* Media Preview Skeleton */}
      <Skeleton className="h-[260px] w-full rounded-2xl bg-neutral-800/60 mt-1" />

      {/* Actions Footer Skeleton */}
      <div className="flex items-center justify-between pt-3 border-t border-border/20">
        <div className="flex items-center gap-4">
          <Skeleton className="h-4 w-9 rounded bg-neutral-800/60" />
          <Skeleton className="h-4 w-9 rounded bg-neutral-800/60" />
          <Skeleton className="h-4 w-5 rounded bg-neutral-800/60" />
        </div>
        <Skeleton className="h-4 w-9 rounded bg-neutral-800/60" />
      </div>
    </div>
  );
}
