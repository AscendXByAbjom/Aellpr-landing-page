"use client";

import { useEffect } from "react";

export function RevealObserver() {
  useEffect(() => {
    const reveals = document.querySelectorAll<HTMLElement>(
      "[data-reveal]:not(.is-in)",
    );
    const marquees = document.querySelectorAll<HTMLElement>(".marquee");

    if (!("IntersectionObserver" in window)) {
      reveals.forEach((el) => el.classList.add("is-in"));
      marquees.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const revealIO = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.add("is-in");
          revealIO.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    reveals.forEach((el) => revealIO.observe(el));

    const marqueeIO = new IntersectionObserver((entries) => {
      for (const e of entries)
        e.target.classList.toggle("is-visible", e.isIntersecting);
    });
    marquees.forEach((el) => marqueeIO.observe(el));

    return () => {
      revealIO.disconnect();
      marqueeIO.disconnect();
    };
  }, []);

  return null;
}
