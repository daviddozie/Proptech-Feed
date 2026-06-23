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
  userIcon,
} from "@/assets";

const sidebarNavItems = [
  { label: "Messages", icon: messageIcon, width: 17, height: 12 },
  { label: "My Boosts", icon: rocketIcon, width: 16, height: 16 },
  { label: "Saved", icon: bookMarkIcon, width: 12, height: 16 },
  { label: "Communities", icon: userIcon, width: 20, height: 13 },
];

const locations = ["Lekki Phase 1", "Ikeja", "Ikoyi", "Wuse, Abuja", "Victoria Island"];
const listingTypes = ["For Rent", "For Sale", "Shortlet", "Commercial"];
const userTypes = ["Individual", "Agent", "Owner", "Developer"];

export default function LeftSidebar() {
  return (
    <aside className="w-full flex flex-col gap-4">
      <div className="border border-card-border bg-card rounded-2xl py-3 px-3">
        <div className="flex flex-col gap-1">
          {sidebarNavItems.map((item) => (
            <a
              key={item.label}
              href="#"
              onClick={(e) => e.preventDefault()}
              className="flex items-center gap-3.5 px-3.5 py-3 rounded-xl text-text-secondary hover:text-text-primary hover:bg-neutral-900 transition-all font-medium text-base"
            >
              <Image src={item.icon} alt={item.label} width={item.width} height={item.height} />
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </div>

      <Accordion type="single" collapsible className="w-full bg-card border border-card-border rounded-2xl">
        {/* Location Accordion */}
        <AccordionItem value="location" className="bg-card px-6 py-1 rounded-t-2xl">
          <AccordionTrigger className="hover:no-underline font-medium text-base text-text-primary py-3">
            Location
          </AccordionTrigger>
          <AccordionContent className="pt-1 pb-4">
            <div className="flex flex-col gap-2">
              {locations.map((loc) => (
                <label key={loc} className="flex items-center gap-2.5 text-xs text-text-secondary cursor-pointer select-none hover:text-text-primary">
                  <Checkbox />
                  <span>{loc}</span>
                </label>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Listing Type Accordion */}
        <AccordionItem value="listing-type" className="bg-card px-6 py-1">
          <AccordionTrigger className="hover:no-underline font-medium text-base text-text-primary py-3">
            Listing Type
          </AccordionTrigger>
          <AccordionContent className="pt-1 pb-4">
            <div className="flex flex-col gap-2">
              {listingTypes.map((type) => (
                <label key={type} className="flex items-center gap-2.5 text-xs text-text-secondary cursor-pointer select-none hover:text-text-primary">
                  <Checkbox />
                  <span>{type}</span>
                </label>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Budget Accordion */}
        <AccordionItem value="budget" className="bg-card px-6 py-1">
          <AccordionTrigger className="hover:no-underline font-medium text-base text-text-primary py-3">
            Budget
          </AccordionTrigger>
          <AccordionContent className="pt-1 pb-4">
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <div className="flex-1 flex flex-col gap-1.5">
                  <Label htmlFor="min-price" className="text-[10px] text-text-secondary font-medium">Min Price</Label>
                  <Input
                    id="min-price"
                    placeholder="Min"
                    className="bg-neutral-900 border-border text-xs text-text-primary h-8 py-1 px-2.5 rounded-xl placeholder:text-muted-foreground/50 focus-visible:border-brand-green focus-visible:ring-0"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-1.5">
                  <Label htmlFor="max-price" className="text-[10px] text-text-secondary font-medium">Max Price</Label>
                  <Input
                    id="max-price"
                    placeholder="Max"
                    className="bg-neutral-900 border-border text-xs text-text-primary h-8 py-1 px-2.5 rounded-xl placeholder:text-muted-foreground/50 focus-visible:border-brand-green focus-visible:ring-0"
                  />
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* User Type Accordion */}
        <AccordionItem value="user-type" className="bg-card px-6 py-1 rounded-b-2xl">
          <AccordionTrigger className="hover:no-underline font-medium text-base text-text-primary py-3">
            User Type
          </AccordionTrigger>
          <AccordionContent className="pt-1 pb-4">
            <div className="flex flex-col gap-2">
              {userTypes.map((userType) => (
                <label key={userType} className="flex items-center gap-2.5 text-xs text-text-secondary cursor-pointer select-none hover:text-text-primary">
                  <Checkbox />
                  <span>{userType}</span>
                </label>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button
        className="w-full mt-1 bg-brand-green hover:bg-brand-green/90 text-white font-medium py-5 px-4 rounded-full  transition-colors flex items-center justify-center gap-2 cursor-pointer text-base"
      >
        <Plus className="h-4 w-4" />
        Create Post
      </Button>
    </aside>
  );
}
