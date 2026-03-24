'use client';

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import AppBar from "@/components/shared/appbar";
import Footer from "@/components/shared/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  const isHomePage = pathname === "/";

  useEffect(() => {
    const storedUser = localStorage.getItem("user-storage");
    if (storedUser) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      if (!isHomePage) {
        router.push("/signin");
      }
    }
  }, [isHomePage]);

  // If on home page, render immediately (no auth gate)
  if (isHomePage && isAuthenticated !== true) {
    return (
      <main className="min-h-screen flex flex-col bg-surface font-body text-on-surface selection:bg-secondary-fixed selection:text-on-secondary-fixed">
        <AppBar />
        <div className="flex-1 w-full">
          {children}
        </div>
        <Footer />
      </main>
    );
  }

  if (isAuthenticated === null) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <main className="min-h-screen flex flex-col bg-surface font-body text-on-surface selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      <AppBar />
      <div className="flex-1 w-full">
        {children}
      </div>
      <Footer />
    </main>
  );
}
