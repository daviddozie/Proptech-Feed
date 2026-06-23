import type { Metadata } from "next";
import { openRunde } from "@/fonts/font";
import Providers from "@/components/providers";
import "./globals.css";


export const metadata: Metadata = {
  title: "Expert Listing | Proptech Social Feed",
  description: "A high-performance proptech feed built with Next.js, featuring infinite scroll, custom Figma-compliant typography, and realistic mock API latency for demonstration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${openRunde.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
