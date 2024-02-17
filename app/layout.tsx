import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Likecat.cn",
  description: "🚀 Crafting my digital haven! This website is like a blank canvas, and I'm still deciding which fun nuggets to sprinkle on it. Brace for impact – fun stuff incoming! 💻✨",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
