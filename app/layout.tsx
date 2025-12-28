import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { Toaster } from "sonner";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: "Arkadiusz — Frontend Developer",
    template: "%s | Arkadiusz",
  },
  description: "Frontend Developer: Angular • React • Next.js • TypeScript",
  openGraph: {
    title: "Arkadiusz — Frontend Developer",
    description: "Portfolio: projekty, demo na YouTube, tech stack.",
    type: "website",
    url: "http://localhost:3000",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Navbar />
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
