import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Figtree } from "next/font/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "700"], // normal + bold
});

export const metadata: Metadata = {
  title: "Happy Sweetseventeen My Lipii | Paizz",
  description: "I love you so much",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={figtree.className}>{children}</body>
    </html>
  );
}
