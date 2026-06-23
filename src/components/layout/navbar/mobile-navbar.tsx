"use client";

import { useState, useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { bellIcon, logo } from "@/assets";
import { navItems, dropdownData } from "./constants";
import { Button } from "../../ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { createPortal } from "react-dom";

interface MobileNavbarProps {
  activeItem: string;
  setActiveItem: (item: string) => void;
}

export default function MobileNavbar({ activeItem, setActiveItem }: MobileNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<"Rent" | "Buy" | null>(null);
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  return (
    <header className="block bg-card md:hidden">
      <div className="mx-auto flex max-w-[98%] items-center justify-between px-4 py-4 sm:px-6">
        <Link href={"/"}>
          <Image src={logo} alt="Expert Listing" width={170} height={22.12} />
        </Link>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="inline-flex cursor-pointer h-10 w-10 items-center justify-center rounded-2xl text-text-secondary transition hover:text-foreground"
            aria-label="Notifications"
          >
            <Image src={bellIcon} alt="Notifications" width={16} height={16} />
          </button>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="inline-flex cursor-pointer h-10 w-10 items-center justify-center rounded-2xl text-text-secondary transition hover:text-foreground"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {isMounted && typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-background/10 backdrop-blur-xs z-50"
              />

              {/* Mobile Drawer Panel */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className="fixed inset-y-0 right-0 w-full max-w-xs bg-card border-l border-border p-6 shadow-2xl z-50 flex flex-col gap-6"
              >
                <div className="flex items-center justify-between">
                  <Link href={"/"} onClick={() => setIsOpen(false)}>
                    <Image src={logo} alt="Expert Listing" width={170} height={22.12} />
                  </Link>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex cursor-pointer text-text-secondary transition hover:text-foreground"
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto pr-1 flex flex-col gap-1">
                  {navItems.map((item) => {
                    const hasDropdown = item.dropdown && (item.label === "Rent" || item.label === "Buy");
                    const isActive = activeItem === item.label;

                    if (hasDropdown) {
                      return (
                        <div key={item.label} className="flex flex-col border-b border-border/40 py-1">
                          <button
                            onClick={() =>
                              setExpandedCategory(
                                expandedCategory === item.label ? null : (item.label as "Rent" | "Buy")
                              )
                            }
                            className={cn(
                              "flex w-full cursor-pointer items-center justify-between py-2 text-left font-medium transition-colors text-sm",
                              expandedCategory === item.label
                                ? "text-brand-green"
                                : "text-text-primary hover:text-brand-green"
                            )}
                          >
                            <span>{item.label}</span>
                            <ChevronDown
                              className={cn(
                                "h-4 w-4 transition-transform duration-300",
                                expandedCategory === item.label && "rotate-180"
                              )}
                            />
                          </button>

                          <AnimatePresence initial={false}>
                            {expandedCategory === item.label && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2, ease: "easeInOut" }}
                                className="overflow-hidden pl-3 pr-1 flex flex-col gap-1.5 pb-2"
                              >
                                {dropdownData[item.label as "Rent" | "Buy"].map((subItem) => {
                                  const Icon = subItem.icon;
                                  return (
                                    <a
                                      key={subItem.title}
                                      href="#"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        setActiveItem(item.label);
                                        setIsOpen(false);
                                      }}
                                      className="flex items-start gap-3 rounded-xl p-2 transition-all hover:bg-brand-green/10 group"
                                    >
                                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-neutral-900 border border-border group-hover:border-brand-green/30 group-hover:bg-brand-green/10 text-text-secondary group-hover:text-brand-green transition-all">
                                        <Icon className="h-3.5 w-3.5" />
                                      </div>
                                      <div className="flex flex-col">
                                        <span className="text-[11px] font-semibold text-text-primary group-hover:text-brand-green transition-colors">
                                          {subItem.title}
                                        </span>
                                        <span className="text-[9px] text-text-secondary leading-normal">
                                          {subItem.description}
                                        </span>
                                      </div>
                                    </a>
                                  );
                                })}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    }

                    return (
                      <button
                        key={item.label}
                        onClick={() => {
                          setActiveItem(item.label);
                          setIsOpen(false);
                        }}
                        className={cn(
                          "flex w-full cursor-pointer items-center justify-between border-b border-border/40 py-3 text-left font-medium transition-colors text-sm",
                          isActive
                            ? "text-brand-green"
                            : "text-text-primary hover:text-brand-green"
                        )}
                      >
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Drawer footer */}
                <div className="flex flex-col gap-3 pt-4 border-t border-border">
                  <Button className="w-full inline-flex h-11 items-center justify-center rounded-full bg-brand-green text-sm font-semibold text-white transition hover:bg-brand-green/90">
                    Sign In
                  </Button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </header>
  );
}
