import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"

const geistSans = Work_Sans({
  weight: '400',
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hackify",
  description: "Hackify- Hackathons, Internships, Mentorship",
  manifest: "/manifest.json",
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://cloud.umami.is/script.js" data-website-id="5179aa5d-92b8-452a-82ef-291c9c806a27"></script>
      </head>
      <body
        className={`${geistSans.className} min-h-screen bg-surface text-on-surface`}
      >
        <Toaster />
        {children}
      </body>
    </html>
  );
}