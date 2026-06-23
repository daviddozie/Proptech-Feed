"use client";

import { useState } from "react";
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

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col pb-16 md:pb-0">
      <Header activeItem={activeItem} setActiveItem={setActiveItem} />

      <div className="mx-auto w-full max-w-[98%] px-2 py-6 sm:px-4 lg:px-6 flex justify-between gap-5 flex-1">
        <div className="hidden lg:block w-[260px] shrink-0 sticky top-6 self-start max-h-[calc(100vh-100px)] overflow-y-auto pr-1">
          <LeftSidebar />
        </div>

        <main className="flex-1 max-w-[690px] w-full mx-auto flex flex-col gap-5">
          <Stories />
          <div className="border border-card-border bg-card rounded-2xl p-4 flex flex-col gap-3.5 mt-1">
            <div className="flex gap-4 border-b border-border/20 pb-2.5 text-xs font-semibold text-text-disabled">
              {CREATOR_TABS.map(({ id, label, icon: Icon, inactiveClass, iconClass }) => {
                const isActive = activeCreatorTab === id;
                return (
                  <button
                    key={id}
                    onClick={() => setActiveCreatorTab(id)}
                    className={cn(
                      "flex items-center gap-1.5 text-[13px] font-medium cursor-pointer pb-2.5 -mb-3 transition-colors border-b-2 border-transparent",
                      isActive ? "text-brand-green border-brand-green" : inactiveClass
                    )}
                  >
                    <Icon className={cn("h-3.5 w-3.5", isActive ? "text-brand-green" : iconClass)} />
                    <span>{label}</span>
                  </button>
                );
              })}
            </div>

            <div className="flex gap-3 items-start pt-1">
              <div className="h-10 w-10 rounded-full overflow-hidden shrink-0 relative bg-neutral-900">
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
                className="flex-1 bg-transparent text-xs text-text-primary placeholder:text-text-disabled/50 outline-none resize-none pt-1.5 h-12 leading-relaxed"
              />
            </div>

            <div className="flex items-center justify-between border-t border-border/20 pt-3">
              <button className="flex items-center gap-1.5 text-sm font-medium text-text-secondary hover:text-text-primary transition cursor-pointer">
                <MapPin className="h-4 w-4 text-text-disabled" />
                <span>Location</span>
              </button>
              <Button className="bg-brand-green text-white font-semibold py-1.5 px-5 rounded-full text-xs transition cursor-pointer">
                Post
              </Button>
            </div>
          </div>

          <FeedSection category={activeItem} />
        </main>

        <div className="hidden xl:block w-[320px] shrink-0 sticky top-6 self-start max-h-[calc(100vh-100px)] pl-1 overflow-y-auto pr-1">
          <RightSidebar />
        </div>
      </div>
      <MobileFooter />
    </div>
  );
}