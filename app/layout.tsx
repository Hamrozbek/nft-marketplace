import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/modules";
import { HeroUIProvider } from "@heroui/system";


const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NFT marketplace",
  description: "Discover digital art & Collect NFTs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" />
      </head>
      <body className={`${workSans.className} antialiased`}>
        <HeroUIProvider>
          <Header />
          {children}
        </HeroUIProvider>
      </body>
    </html>
  );
}
