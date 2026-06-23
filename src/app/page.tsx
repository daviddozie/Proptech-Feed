"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "@/components/layout/navbar/navbar";
import LeftSidebar from "@/components/layout/sidebar/left-sidebar";
import RightSidebar from "@/components/layout/sidebar/right-sidebar";
import Stories from "@/components/layout/feed/stories";
import FeedSection from "@/components/layout/feed/feed-section";
import { MessageCircle, MapPin, Building2, Inbox } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { profile } from "@/assets";
import MobileFooter from "@/components/layout/navbar/mobile-footer";

const CREATOR_TABS = [
  {
    id: "Property",
    label: "Property",
    icon: Building2,
    inactiveClass: "hover:text-text-primary",
    iconClass: "text-text-disabled/50",
  },
  {
    id: "General",
    label: "General",
    icon: MessageCircle,
    inactiveClass: "hover:text-text-primary",
    iconClass: "text-text-disabled/50",
  },
  {
    id: "Request",
    label: "Request",
    icon: Inbox,
    inactiveClass: "text-text-secondary",
    iconClass: "text-text-disabled/50",
  },
] as const;

export default function Page() {
  const [activeItem, setActiveItem] = useState<string>("Feed");
  const [activeCreatorTab, setActiveCreatorTab] = useState<"Property" | "General" | "Request">("General");
  const [postText, setPostText] = useState("");
  
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  // Monitor scroll direction and offset (mobile only)
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateHeaderVisibility = () => {
      if (window.innerWidth >= 768) {
        setIsHeaderVisible(true);
        ticking = false;
        return;
      }

      const currentScrollY = window.scrollY;

      // Always show header at the very top of the page
      if (currentScrollY < 50) {
        setIsHeaderVisible(true);
        ticking = false;
        return;
      }

      // Check scroll direction with a threshold to avoid jittering on micro-scrolls
      const diff = currentScrollY - lastScrollY;
      if (Math.abs(diff) > 10) {
        if (diff > 0) {
          setIsHeaderVisible(false);
        } else {
          setIsHeaderVisible(true);
        }
        lastScrollY = currentScrollY;
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateHeaderVisibility);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={cn('flex', 'flex-col', 'bg-background', 'pb-16', 'md:pb-0', 'min-h-screen', 'text-foreground')}>
      
      {/* Sticky header containing Navbar + Stories (mobile only) */}
      <div
        className={cn(
          "top-0 z-40 md:relative sticky flex flex-col bg-background md:bg-transparent border-card-border/10 border-b md:border-b-0 w-full transition-transform duration-300 ease-in-out",
          isHeaderVisible ? "translate-y-0" : "-translate-y-full md:translate-y-0"
        )}
      >
        <Header activeItem={activeItem} setActiveItem={setActiveItem} />
        <div className={cn('mx-auto', 'px-2', 'md:px-0', 'pt-1', 'pb-3', 'w-full', 'max-w-[690px]', 'md:hidden')}>
          <Stories />
        </div>
      </div>

      <div className={cn('flex', 'flex-1', 'justify-between', 'gap-5', 'mx-auto', 'px-2', 'sm:px-4', 'lg:px-6', 'py-6', 'w-full', 'max-w-[98%]')}>
        
        {/* Left Sidebar */}
        <div className={cn('hidden', 'lg:block', 'sticky', 'top-6', 'self-start', 'pr-1', 'w-[260px]', 'max-h-[calc(100vh-100px)]', 'overflow-y-auto', 'shrink-0')} >
          <LeftSidebar />
        </div>

        <main className={cn('flex', 'flex-col', 'flex-1', 'gap-5', 'mx-auto', 'w-full', 'max-w-[690px]')}>
          {/* Stories (desktop only) */}
          <div className={cn('hidden', 'md:block')}>
            <Stories />
          </div>

          <div className={cn('flex', 'flex-col', 'gap-3.5', 'bg-card', 'mt-1', 'p-4', 'border', 'border-card-border', 'rounded-2xl')}>
            <div className={cn('flex', 'gap-4', 'pb-2.5', 'border-border/20', 'border-b', 'font-semibold', 'text-text-disabled', 'text-xs')}>
              {CREATOR_TABS.map(({ id, label, icon: Icon, inactiveClass, iconClass }) => {
                const isActive = activeCreatorTab === id;
                return (
                  <button
                    key={id}
                    onClick={() => setActiveCreatorTab(id)}
                    className={cn(
                      "flex items-center gap-1.5 -mb-3 pb-2.5 border-transparent border-b-2 font-medium text-[13px] transition-colors cursor-pointer",
                      isActive ? "text-brand-green border-brand-green" : inactiveClass
                    )}
                  >
                    <Icon className={cn("w-3.5 h-3.5", isActive ? "text-brand-green" : iconClass)} />
                    <span>{label}</span>
                  </button>
                );
              })}
            </div>

            <div className={cn('flex', 'items-start', 'gap-3', 'pt-1')}>
              <div className={cn('relative', 'bg-neutral-900', 'rounded-full', 'w-10', 'h-10', 'overflow-hidden', 'shrink-0')}>
                <Image
                  src={profile}
                  alt="Current User avatar"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <textarea
                placeholder="Share an update, ask a question, say hi..."
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
                className={cn('flex-1', 'bg-transparent', 'pt-1.5', 'outline-none', 'h-12', 'text-text-primary', 'placeholder:text-text-disabled/50', 'text-xs', 'leading-relaxed', 'resize-none')}
              />
            </div>

            <div className={cn('flex', 'justify-between', 'items-center', 'pt-3', 'border-border/20', 'border-t')}>
              <button className={cn('flex', 'items-center', 'gap-1.5', 'font-medium', 'text-text-secondary', 'hover:text-text-primary', 'text-sm', 'transition', 'cursor-pointer')}>
                <MapPin className={cn('w-4', 'h-4', 'text-text-disabled')} />
                <span>Location</span>
              </button>
              <Button
                disabled={!postText.trim()}
                className={cn(
                  'bg-brand-green', 'px-5', 'py-1.5', 'rounded-full', 'font-medium', 'text-white', 'transition',
                  !postText.trim() ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'cursor-pointer'
                )}
              >
                Post
              </Button>
            </div>
          </div>

          <FeedSection category={activeItem} />
        </main>

        {/* Right Sidebar */}
        <div className={cn('hidden', 'xl:block', 'sticky', 'top-6', 'self-start', 'pr-1', 'pl-1', 'w-[320px]', 'max-h-[calc(100vh-100px)]', 'overflow-y-auto', 'shrink-0')} >
          <RightSidebar />
        </div>
      </div>
      <MobileFooter />
    </div>
  );
}