"use client";

import Image from 'next/image';
import { UsersRound, ArrowRight, MapPin } from "lucide-react";

import { hotIcon } from '@/assets';

const trendingLocations = [
  { name: "Lekki Epe", posts: "120 post today" },
  { name: "2 Bedroom Rental Abuja", posts: "80 post today" },
  { name: "Ajah", posts: "250 post today" },
];

const hotRequests = [
  {
    type: "Buy",
    title: "Lekki Phase 1, Lagos",
    description: "Looking for a 4-bed detached in Lekki Phase 1",
    budget: "₦180M - ₦230M",
    responses: "12 responses",
  },
  {
    type: "Rent",
    title: "Ikoyi",
    description: "2-bed serviced apartment in Ikoyi, max ₦15M/yr",
    budget: "₦10M - ₦15M",
    responses: "7 responses",
  },
];

const topCommunities = [
  { name: "Lekki Landlords", members: "12.4k members" },
  { name: "Abuja Developers Group", members: "5.8k members" },
  { name: "House hunting Circle", members: "1.4k members" },
];

export default function RightSidebar() {
  return (
    <aside className="w-full flex flex-col gap-4">
      {/* Trending Locations */}
      <div className="border border-card-border bg-card rounded-2xl p-4">
        <div className="p-0 pb-3 flex flex-row items-center gap-2">
          <MapPin className="h-4 w-4 text-rating-yellow" />
          <h2 className="text-[13px] font-medium text-text-primary">Trending Locations</h2>
        </div>
        <div className="p-0 pt-2">
          <div className="flex flex-col gap-3">
            {trendingLocations.map((loc) => (
              <div key={loc.name} className="flex flex-col gap-0.5 cursor-pointer group">
                <span className="text-[13px] font-medium text-text-primary group-hover:text-brand-green transition-colors">
                  {loc.name}
                </span>
                <span className="text-xs text-text-disabled">{loc.posts}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hot Requests */}
      <div className="border border-card-border bg-card rounded-2xl p-4">
        <div className="p-0 pb-3 flex flex-row items-center gap-2">
          <Image src={hotIcon} alt="Hot Requests" width={16} height={16} />
          <h2 className="text-[13px] font-medium text-text-primary">Hot Requests</h2>
        </div>
        <div className="p-0 pt-2">
          <div className="flex flex-col gap-2.5">
            {hotRequests.map((req, idx) => (
              <div key={idx} className="flex flex-col gap-1 border border-card-border rounded-2xl p-3.5 hover:bg-card-border transition-colors cursor-pointer">
                <div className="flex items-center gap-1.5 text-[13px] font-semibold text-text-primary">
                  <span>{req.type}</span>
                  <span className="text-text-disabled/40">•</span>
                  <span>{req.title}</span>
                </div>
                <p className="text-xs text-text-disabled leading-snug">
                  {req.description}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-text-disabled pt-0.5">
                  <span>{req.budget}</span>
                  <span className="text-text-disabled/40">•</span>
                  <span>{req.responses}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Communities */}
      <div className="border border-card-border bg-card rounded-2xl p-4">
        <div className="p-0 pb-3 flex flex-row items-center gap-2">
          <UsersRound className="h-4.5 w-4.5 text-rating-yellow" />
          <h2 className="text-[13px] font-medium text-text-primary">Top Communities</h2>
        </div>
        <div className="p-0 pt-2">
          <div className="flex flex-col gap-2.5">
            {topCommunities.map((comm) => (
              <a
                key={comm.name}
                href="#"
                onClick={(e) => e.preventDefault()}
                className="flex items-center justify-between p-3.5 rounded-2xl border border-card-border bg-[#0B0C0E]/50 hover:bg-neutral-900/10 transition-all group"
              >
                <div className="flex flex-col gap-0.5">
                  <span className="text-[13px] font-semibold text-text-primary group-hover:text-brand-green transition-colors">
                    {comm.name}
                  </span>
                  <span className="text-xs text-text-disabled">{comm.members}</span>
                </div>
                <ArrowRight className="h-4 w-4 text-text-secondary group-hover:text-brand-green transition-colors group-hover:translate-x-0.5 transition-transform" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
