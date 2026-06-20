"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / scrollable) * 100;
      setProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[2px] z-50 transition-[width] duration-100"
      style={{
        width: `${progress}%`,
        background: "linear-gradient(90deg, #a855f7, #6366f1, #3b82f6)",
      }}
    />
  );
}
