"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ScrollToTop() {
  const router = useRouter();

  useEffect(() => {
    // Disable browser scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Remove hash BEFORE scroll restore
    if (window.location.hash) {
      router.replace("/", { scroll: false });
      window.scrollTo(0, 0);
    }
  }, [router]);

  return null;
}
