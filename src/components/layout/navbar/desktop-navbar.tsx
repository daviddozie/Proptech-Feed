"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

import { ChevronDown } from "lucide-react";
import { bellIcon, logo } from "@/assets";
import { navItems, dropdownData } from "./constants";

interface DesktopNavbarProps {
  activeItem: string;
  setActiveItem: (item: string) => void;
}

export default function DesktopNavbar({ activeItem, setActiveItem }: DesktopNavbarProps) {
  const [hoveredItem, setHoveredItem] = useState<"Rent" | "Buy" | null>(null);

  return (
    <header className="hidden md:block bg-card relative">
      <div className="mx-auto flex max-w-[98%] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href={"/"} className="flex items-center gap-3">
          <Image src={logo} alt="Expert Listing" width={170} height={22.12} />
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-text-secondary h-10">
          {navItems.map((item) => {
            const hasDropdown = item.dropdown && (item.label === "Rent" || item.label === "Buy");
            const isActive = activeItem === item.label;

            return (
              <div
                key={item.label}
                className="relative py-2"
                onMouseEnter={() => {
                  if (hasDropdown) {
                    setHoveredItem(item.label as "Rent" | "Buy");
                  }
                }}
                onMouseLeave={() => {
                  if (hasDropdown) {
                    setHoveredItem(null);
                  }
                }}
              >
                <a
                  href={item.href}
                  onClick={(e) => {
                    if (hasDropdown) {
                      e.preventDefault();
                    } else {
                      e.preventDefault();
                      setActiveItem(item.label);
                    }
                  }}
                  className={cn(
                    "relative inline-flex items-center gap-1 transition-colors hover:text-foreground cursor-pointer select-none",
                    isActive || (hasDropdown && hoveredItem === item.label)
                      ? "text-foreground"
                      : "text-text-secondary"
                  )}
                >
                  <span>{item.label}</span>
                  {item.dropdown ? (
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform duration-300",
                        hoveredItem === item.label && "rotate-180"
                      )}
                    />
                  ) : null}
                  {isActive && (
                    <motion.span
                      layoutId="active-nav-indicator"
                      className="absolute -bottom-[18px] left-0 h-0.5 w-full rounded-full bg-brand-green/40"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>

                <AnimatePresence>
                  {hasDropdown && hoveredItem === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50 pointer-events-auto"
                    >
                      <div className="w-[480px] rounded-2xl border border-border bg-card/95 backdrop-blur-md p-4">
                        <div className="grid grid-cols-2 gap-2">
                          {dropdownData[item.label as "Rent" | "Buy"].map((subItem) => {
                            const Icon = subItem.icon;
                            return (
                              <a
                                key={subItem.title}
                                href="#"
                                className="group/item flex items-start gap-3 rounded-xl p-2.5 transition-all hover:bg-brand-green/10"
                              >
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-neutral-900 border border-border group-hover/item:border-brand-green/30 group-hover/item:bg-brand-green/10 text-text-secondary group-hover/item:text-brand-green transition-all">
                                  <Icon className="h-4 w-4" />
                                </div>
                                <div className="flex flex-col gap-0.5">
                                  <span className="text-xs font-semibold text-text-primary group-hover/item:text-brand-green transition-colors">
                                    {subItem.title}
                                  </span>
                                  <span className="text-[10px] text-text-secondary leading-normal">
                                    {subItem.description}
                                  </span>
                                </div>
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            className="inline-flex cursor-pointer h-10 w-10 items-center justify-center rounded-2xl text-text-secondary transition hover:text-foreground"
            aria-label="Notifications"
          >
            <Image src={bellIcon} alt="Notifications" width={16} height={16} />
          </button>
          <a
            href="#"
            className="text-sm font-medium text-text-primary transition hover:text-foreground"
          >
            List Property
          </a>
          <Button className="inline-flex h-10 items-center justify-center rounded-full bg-brand-green px-5 text-sm font-semibold text-white shadow-sm shadow-brand-green/20 transition hover:bg-brand-green/90">
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
}
