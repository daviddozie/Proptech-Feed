import {
  Building,
  Home,
  Calendar,
  Briefcase,
  Users,
  Building2,
  Landmark,
  Sparkles,
  ShieldAlert,
} from "lucide-react";

export interface NavItem {
  readonly label: string;
  readonly href: string;
  readonly dropdown?: boolean;
}

export const navItems: readonly NavItem[] = [
  { label: "Feed", href: "#" },
  { label: "Rent", href: "#", dropdown: true },
  { label: "Buy", href: "#", dropdown: true },
  { label: "Snagging", href: "#" },
  { label: "Shortlets", href: "#" },
  { label: "Find Professionals", href: "#" },
];

export const dropdownData = {
  Rent: [
    {
      title: "Apartments",
      description: "Modern apartments & flats for rent.",
      icon: Building,
    },
    {
      title: "Houses",
      description: "Spacious family homes & villas.",
      icon: Home,
    },
    {
      title: "Shortlets",
      description: "Serviced homes for short-term stays.",
      icon: Calendar,
    },
    {
      title: "Office Spaces",
      description: "Premium workspaces & corporate offices.",
      icon: Briefcase,
    },
    {
      title: "Shared Spaces",
      description: "Budget-friendly shared flat shares.",
      icon: Users,
    },
    {
      title: "Commercial",
      description: "Warehouses, shops, and retail outlets.",
      icon: Building2,
    },
  ],
  Buy: [
    {
      title: "Apartments",
      description: "Luxury apartments & condos for sale.",
      icon: Building,
    },
    {
      title: "Houses",
      description: "Single family houses, duplexes & townhouses.",
      icon: Home,
    },
    {
      title: "Land",
      description: "Residential & commercial plots of land.",
      icon: Landmark,
    },
    {
      title: "Commercial",
      description: "Offices, warehouses, and business facilities.",
      icon: Briefcase,
    },
    {
      title: "New Developments",
      description: "Off-plan properties and newly built estates.",
      icon: Sparkles,
    },
    {
      title: "Foreclosures",
      description: "Great deals on bank-owned properties.",
      icon: ShieldAlert,
    },
  ],
} as const;

export type DropdownCategory = keyof typeof dropdownData;
