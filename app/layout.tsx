import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FluidCursor from "@/components/FluidCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Baines Blanton Portfolio",
  description: "The portfolio website of Baines Blanton, a full-stack developer with a passion for making a positive impact on his clients and his community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <FluidCursor />
        {children}
      </body>
    </html>
  );
}
