"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { MediaItem } from "@/types";

interface PostMediaProps {
  media: MediaItem[];
}

export default function PostMedia({ media }: PostMediaProps) {
  const [currentIdx, setCurrentIdx] = useState(0);

  if (!media || media.length === 0) return null;

  const currentItem = media[currentIdx];

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIdx((prev) => (prev > 0 ? prev - 1 : media.length - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIdx((prev) => (prev < media.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className={cn('flex', 'flex-col', 'gap-2.5', 'mt-1', 'w-full')}>
      <div className={cn('group', 'relative', 'flex', 'justify-center', 'items-center', 'bg-black/40', 'border', 'border-card-border', 'rounded-2xl', 'w-full', 'max-h-[380px]', 'aspect-video', 'overflow-hidden', 'select-none')}>
        {currentItem.type === "image" ? (
          <Image
            src={currentItem.url}
            alt="Post media"
            fill
            sizes="(max-width: 768px) 100vw, 600px"
            className="object-cover"
            unoptimized
          />
        ) : (
          <div className={cn('relative', 'flex', 'justify-center', 'items-center', 'w-full', 'h-full')}>
            <Image
              src={currentItem.url}
              alt="Video cover"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className={cn('opacity-80', 'object-cover')}
              unoptimized
            />
            {/* Simulated Video Play Trigger */}
            <div className={cn('absolute', 'inset-0', 'flex', 'justify-center', 'items-center', 'bg-black/10', 'hover:bg-black/20', 'transition', 'cursor-pointer')}>
              <div className={cn('flex', 'justify-center', 'items-center', 'bg-black/60', 'shadow-lg', 'backdrop-blur-xs', 'border', 'border-white/10', 'rounded-full', 'w-12', 'h-12', 'text-white', 'hover:scale-105', 'transition')}>
                <Play className={cn('fill-white', 'ml-0.5', 'w-5', 'h-5')} />
              </div>
            </div>

            {/* Timeline pill */}
            {currentItem.duration && (
              <div className={cn('bottom-3', 'left-3', 'absolute', 'flex', 'items-center', 'gap-1.5', 'bg-black/75', 'backdrop-blur-xs', 'px-2.5', 'py-1', 'border', 'border-white/5', 'rounded-full', 'font-semibold', 'text-[10px]', 'text-white')}>
                <Play className={cn('fill-white', 'w-2.5', 'h-2.5')} />
                <span>{currentItem.duration}</span>
              </div>
            )}
          </div>
        )}

        {media.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className={cn('top-1/2', 'left-2.5', 'absolute', 'flex', 'justify-center', 'items-center', 'bg-black/60', 'hover:bg-black/80', 'opacity-100', 'md:opacity-0', 'md:group-hover:opacity-100', 'backdrop-blur-xs', 'border', 'border-white/10', 'rounded-full', 'w-8', 'h-8', 'text-white', 'transition-opacity', '-translate-y-1/2', 'cursor-pointer')}
              aria-label="Previous image"
            >
              <ChevronLeft className={cn('w-4.5', 'h-4.5')} />
            </button>
            <button
              onClick={handleNext}
              className={cn('top-1/2', 'right-2.5', 'absolute', 'flex', 'justify-center', 'items-center', 'bg-black/60', 'hover:bg-black/80', 'opacity-100', 'md:opacity-0', 'md:group-hover:opacity-100', 'backdrop-blur-xs', 'border', 'border-white/10', 'rounded-full', 'w-8', 'h-8', 'text-white', 'transition-opacity', '-translate-y-1/2', 'cursor-pointer')}
              aria-label="Next image"
            >
              <ChevronRight className={cn('w-4.5', 'h-4.5')} />
            </button>
          </>
        )}
      </div>

      {media.length > 1 && (
        <div className={cn('flex', 'justify-center', 'gap-1.5', 'mt-0.5')}>
          {media.map((_, dotIdx) => (
            <div
              key={dotIdx}
              className={cn(
                "rounded-full h-1.5 transition-all duration-300",
                dotIdx === currentIdx ? "w-4 bg-brand-green" : "w-1.5 bg-white/20"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
