"use client";

import MobileNavbar from "./mobile-navbar";
import DesktopNavbar from "./desktop-navbar";

interface HeaderProps {
  activeItem: string;
  setActiveItem: (item: string) => void;
}

export default function Header({ activeItem, setActiveItem }: HeaderProps) {
  return (
    <>
      <DesktopNavbar activeItem={activeItem} setActiveItem={setActiveItem} />
      <MobileNavbar activeItem={activeItem} setActiveItem={setActiveItem} />
    </>
  );
}