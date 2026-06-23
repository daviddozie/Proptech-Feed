"use client";

import { useState } from "react";
import { Home, Search, Bell, User, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileFooterProps {
  activeTab?: string;
  setActiveTab?: (tab: string) => void;
}

export default function MobileFooter({ 
  activeTab: externalActiveTab, 
  setActiveTab: externalSetActiveTab 
}: MobileFooterProps) {
  const [localActiveTab, setLocalActiveTab] = useState("Feed");

  const activeTab = externalActiveTab || localActiveTab;
  const setActiveTab = externalSetActiveTab || setLocalActiveTab;

  const navItems = [
    { id: "Feed", label: "Feed", icon: Home },
    { id: "Search", label: "Search", icon: Search },
    { 
      id: "List", 
      label: "List", 
      customIcon: (
        <div className="flex h-5 w-5 items-center justify-center rounded-[6px] border-2 border-current">
          <Plus className="h-3.5 w-3.5 stroke-[3]" />
        </div>
      )
    },
    { id: "Notification", label: "Notification", icon: Bell },
    { id: "Profile", label: "Profile", icon: User },
  ];

  return (
    <>
      {/* Sticky Floating Action Button (FAB) */}
      <button
        type="button"
        className="fixed bottom-20 right-4 z-40 md:hidden flex h-14 w-14 items-center justify-center rounded-full bg-brand-green text-white shadow-lg shadow-brand-green/20 cursor-pointer hover:bg-brand-green/90 transition-all active:scale-95 duration-200 hover:scale-105"
        aria-label="Create Post"
      >
        <Plus className="h-7 w-7 text-white stroke-[2.5]" />
      </button>

      {/* Mobile Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 h-16 z-50 bg-card border-t border-card-border/60 flex items-center justify-around md:hidden px-2 pb-safe">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "flex flex-col items-center justify-center gap-1 w-16 h-full transition-all duration-200 cursor-pointer active:scale-95",
                isActive ? "text-brand-green" : "text-text-disabled hover:text-text-secondary"
              )}
            >
              <div className="flex items-center justify-center h-5 w-5">
                {item.customIcon ? (
                  item.customIcon
                ) : (
                  Icon && <Icon className="h-5 w-5" />
                )}
              </div>
              <span className="text-[10px] font-medium tracking-wide leading-none">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </>
  );
}
