"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { mockStories } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export default function Stories() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScrollLimits = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 5);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollLimits);
      // Run once initially
      checkScrollLimits();
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", checkScrollLimits);
      }
    };
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollOffset = direction === "left" ? -240 : 240;
      container.scrollBy({
        left: scrollOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full overflow-hidden select-none">
      {/* Left Scroll Button */}
      {showLeftArrow && (
        <button
          type="button"
          onClick={() => handleScroll("left")}
          className="absolute left-2 top-[39px] -translate-y-1/2 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-card shadow-sm text-text-secondary hover:text-text-primary z-10 transition hover:scale-105"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
      )}

      <div
        ref={scrollContainerRef}
        className="flex items-center gap-4 overflow-x-auto no-scrollbar scroll-smooth py-1.5 px-0.5"
      >
        {mockStories.map((story) => (
          <div
            key={story.id}
            className="flex flex-col items-center gap-1 shrink-0 cursor-pointer group"
          >
            <div
              className={cn(
                "h-[62px] w-[62px] rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-105",
                story.hasActiveStory
                  ? "ring-2 ring-brand-green bg-transparent"
                  : "ring-1 ring-card-border bg-neutral-900"
              )}
            >
              <div className="relative h-[61px] w-[61px] rounded-full overflow-hidden border-2 border-card bg-neutral-900">
                <Image
                  src={story.avatar}
                  alt={story.name}
                  fill
                  sizes="64px"
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
            <span className="text-xs text-text-secondary font-medium w-[70px] text-center truncate group-hover:text-text-primary transition-colors">
              {story.name}
            </span>
          </div>
        ))}
      </div>

      {/* Right Scroll Button */}
      {showRightArrow && (
        <button
          type="button"
          onClick={() => handleScroll("right")}
          className="absolute right-2 top-[39px] -translate-y-1/2 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-card shadow-sm text-text-secondary hover:text-text-primary z-10 transition hover:scale-105"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
