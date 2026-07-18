import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

import { CustomCursor } from "@/components/CustomCursor";
import { CursorTracker } from "@/components/CursorTracker";
import { AsciiWallpaper } from "@/components/AsciiWallpaper";
import { LocationCard } from "@/components/LocationCard";
import { Navbar } from "@/components/Navbar";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aniruddh Mangesh Nalli | Mission Console",
  description: "Electrical Engineer, Researcher, and Space Technology enthusiast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistMono.variable} antialiased dark`}>
      <body className="bg-black text-green-500 font-mono overflow-x-hidden cursor-none selection:bg-green-500 selection:text-black">
        <CustomCursor />
        <CursorTracker />
        <AsciiWallpaper />
        <LocationCard />
        <Navbar />
        <main className="pt-16 pb-24">
          {children}
        </main>
      </body>
    </html>
  );
}
