"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

import {
  messageIcon,
  rocketIcon,
  bookMarkIcon,
  usersIcon,
} from "@/assets";
import { cn } from "@/lib/utils";

const sidebarNavItems = [
  { label: "Messages", icon: messageIcon, width: 17, height: 12 },
  { label: "My Boosts", icon: rocketIcon, width: 16, height: 16 },
  { label: "Saved", icon: bookMarkIcon, width: 12, height: 16 },
  { label: "Communities", icon: usersIcon, width: 20, height: 13 },
];

const locations = ["Lekki Phase 1", "Ikeja", "Ikoyi", "Wuse, Abuja", "Victoria Island"];
const listingTypes = ["For Rent", "For Sale", "Shortlet", "Commercial"];
const userTypes = ["Individual", "Agent", "Owner", "Developer"];

export default function LeftSidebar() {
  return (
    <aside className={cn('flex', 'flex-col', 'gap-4', 'w-full')}>
      <div className={cn('bg-card', 'px-3', 'py-3', 'border', 'border-card-border', 'rounded-2xl')}>
        <div className={cn('flex', 'flex-col', 'gap-1')}>
          {sidebarNavItems.map((item) => (
            <a
              key={item.label}
              href="#"
              onClick={(e) => e.preventDefault()}
              className={cn('flex', 'items-center', 'gap-3.5', 'hover:bg-neutral-900', 'px-3.5', 'py-3', 'rounded-xl', 'font-medium', 'text-text-secondary', 'hover:text-text-primary', 'text-base', 'transition-all')}
            >
              <Image src={item.icon} alt={item.label} width={item.width} height={item.height} />
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </div>

      <Accordion type="single" collapsible className={cn('bg-card', 'border', 'border-card-border', 'rounded-2xl', 'w-full')}>
        {/* Location Accordion */}
        <AccordionItem value="location" className={cn('bg-card', 'px-6', 'py-1', 'rounded-t-2xl')}>
          <AccordionTrigger className={cn('py-3', 'font-medium', 'text-text-primary', 'text-base', 'hover:no-underline')}>
            Location
          </AccordionTrigger>
          <AccordionContent className={cn('pt-1', 'pb-4')}>
            <div className={cn('flex', 'flex-col', 'gap-2')}>
              {locations.map((loc) => (
                <label key={loc} className={cn('flex', 'items-center', 'gap-2.5', 'text-text-secondary', 'hover:text-text-primary', 'text-xs', 'cursor-pointer', 'select-none')}>
                  <Checkbox />
                  <span>{loc}</span>
                </label>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Listing Type Accordion */}
        <AccordionItem value="listing-type" className={cn('bg-card', 'px-6', 'py-1')}>
          <AccordionTrigger className={cn('py-3', 'font-medium', 'text-text-primary', 'text-base', 'hover:no-underline')}>
            Listing Type
          </AccordionTrigger>
          <AccordionContent className={cn('pt-1', 'pb-4')}>
            <div className={cn('flex', 'flex-col', 'gap-2')}>
              {listingTypes.map((type) => (
                <label key={type} className={cn('flex', 'items-center', 'gap-2.5', 'text-text-secondary', 'hover:text-text-primary', 'text-xs', 'cursor-pointer', 'select-none')}>
                  <Checkbox />
                  <span>{type}</span>
                </label>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Budget Accordion */}
        <AccordionItem value="budget" className={cn('bg-card', 'px-6', 'py-1')}>
          <AccordionTrigger className={cn('py-3', 'font-medium', 'text-text-primary', 'text-base', 'hover:no-underline')}>
            Budget
          </AccordionTrigger>
          <AccordionContent className={cn('pt-1', 'pb-4')}>
            <div className={cn('flex', 'flex-col', 'gap-3')}>
              <div className={cn('flex', 'gap-2')}>
                <div className={cn('flex', 'flex-col', 'flex-1', 'gap-1.5')}>
                  <Label htmlFor="min-price" className={cn('font-medium', 'text-[10px]', 'text-text-secondary')}>Min Price</Label>
                  <Input
                    id="min-price"
                    placeholder="Min"
                    className={cn('bg-neutral-900', 'px-2.5', 'py-1', 'border-border', 'focus-visible:border-brand-green', 'rounded-xl', 'focus-visible:ring-0', 'h-8', 'text-text-primary', 'placeholder:text-muted-foreground/50', 'text-xs')}
                  />
                </div>
                <div className={cn('flex', 'flex-col', 'flex-1', 'gap-1.5')}>
                  <Label htmlFor="max-price" className={cn('font-medium', 'text-[10px]', 'text-text-secondary')}>Max Price</Label>
                  <Input
                    id="max-price"
                    placeholder="Max"
                    className={cn('bg-neutral-900', 'px-2.5', 'py-1', 'border-border', 'focus-visible:border-brand-green', 'rounded-xl', 'focus-visible:ring-0', 'h-8', 'text-text-primary', 'placeholder:text-muted-foreground/50', 'text-xs')}
                  />
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* User Type Accordion */}
        <AccordionItem value="user-type" className={cn('bg-card', 'px-6', 'py-1', 'rounded-b-2xl')}>
          <AccordionTrigger className={cn('py-3', 'font-medium', 'text-text-primary', 'text-base', 'hover:no-underline')}>
            User Type
          </AccordionTrigger>
          <AccordionContent className={cn('pt-1', 'pb-4')}>
            <div className={cn('flex', 'flex-col', 'gap-2')}>
              {userTypes.map((userType) => (
                <label key={userType} className={cn('flex', 'items-center', 'gap-2.5', 'text-text-secondary', 'hover:text-text-primary', 'text-xs', 'cursor-pointer', 'select-none')}>
                  <Checkbox />
                  <span>{userType}</span>
                </label>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button
        className={cn('flex', 'justify-center', 'items-center', 'gap-2', 'bg-brand-green', 'hover:bg-brand-green/90', 'mt-1', 'px-4', 'py-5', 'rounded-full', 'w-full', 'font-medium', 'text-white', 'text-base', 'transition-colors', 'cursor-pointer')}
      >
        <Plus className={cn('w-4', 'h-4')} />
        Create Post
      </Button>
    </aside>
  );
}
