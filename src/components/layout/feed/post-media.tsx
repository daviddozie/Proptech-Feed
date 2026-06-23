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
    <div className="flex flex-col gap-2.5 w-full mt-1">
      <div className="relative w-full rounded-2xl overflow-hidden group bg-black/40 border border-card-border flex items-center justify-center select-none aspect-video max-h-[380px]">
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
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={currentItem.url}
              alt="Video cover"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover opacity-80"
              unoptimized
            />
            {/* Simulated Video Play Trigger */}
            <div className="absolute inset-0 bg-black/10 flex items-center justify-center cursor-pointer hover:bg-black/20 transition">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/60 backdrop-blur-xs text-white border border-white/10 hover:scale-105 transition shadow-lg">
                <Play className="h-5 w-5 fill-white ml-0.5" />
              </div>
            </div>

            {/* Timeline pill */}
            {currentItem.duration && (
              <div className="absolute bottom-3 left-3 bg-black/75 backdrop-blur-xs px-2.5 py-1 text-[10px] font-semibold text-white rounded-full flex items-center gap-1.5 border border-white/5">
                <Play className="h-2.5 w-2.5 fill-white" />
                <span>{currentItem.duration}</span>
              </div>
            )}
          </div>
        )}

        {/* Carousel Navigation Arrows */}
        {media.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-2.5 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 backdrop-blur-xs text-white opacity-0 group-hover:opacity-100 transition-opacity border border-white/10 hover:bg-black/80 cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-4.5 w-4.5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 backdrop-blur-xs text-white opacity-0 group-hover:opacity-100 transition-opacity border border-white/10 hover:bg-black/80 cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="h-4.5 w-4.5" />
            </button>
          </>
        )}
      </div>

      {media.length > 1 && (
        <div className="flex justify-center gap-1.5 mt-0.5">
          {media.map((_, dotIdx) => (
            <div
              key={dotIdx}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                dotIdx === currentIdx ? "w-4 bg-brand-green" : "w-1.5 bg-white/20"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
