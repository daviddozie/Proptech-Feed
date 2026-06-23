"use client";

import { useState } from "react";
import { Home, Search, Bell, UserRound, Plus } from "lucide-react";
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
        <div className={cn('flex', 'justify-center', 'items-center', 'border-2', 'border-current', 'rounded-[6px]', 'w-5', 'h-5')}>
          <Plus className={cn('stroke-[3]', 'w-3.5', 'h-3.5')} />
        </div>
      )
    },
    { id: "Notification", label: "Notification", icon: Bell },
    { id: "Profile", label: "Profile", icon: UserRound },
  ];

  return (
    <>
      <button
        type="button"
        className={cn('md:hidden', 'right-4', 'bottom-20', 'z-40', 'fixed', 'flex', 'justify-center', 'items-center', 'bg-brand-green', 'hover:bg-brand-green/90', 'shadow-brand-green/20', 'shadow-lg', 'rounded-full', 'w-14', 'h-14', 'text-white', 'hover:scale-105', 'active:scale-95', 'transition-all', 'duration-200', 'cursor-pointer')}
        aria-label="Create Post"
      >
        <Plus className={cn('stroke-[2.5]', 'w-7', 'h-7', 'text-white')} />
      </button>

      {/* Mobile Bottom Navigation Bar */}
      <div className={cn('md:hidden', 'right-0', 'bottom-0', 'left-0', 'z-50', 'fixed', 'flex', 'justify-around', 'items-center', 'bg-card', 'px-2', 'pb-safe', 'border-card-border/60', 'border-t', 'h-16')}>
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "flex flex-col justify-center items-center gap-1 w-16 h-full active:scale-95 transition-all duration-200 cursor-pointer",
                isActive ? "text-brand-green" : "text-text-disabled hover:text-text-secondary"
              )}
            >
              <div className={cn('flex', 'justify-center', 'items-center', 'w-5', 'h-5')}>
                {item.customIcon ? (
                  item.customIcon
                ) : (
                  Icon && <Icon className={cn('w-5', 'h-5')} />
                )}
              </div>
              <span className={cn('font-medium', 'text-[10px]', 'leading-none', 'tracking-wide')}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </>
  );
}
