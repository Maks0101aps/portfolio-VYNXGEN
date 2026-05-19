"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function PortfolioMotion({ children }: { children: React.ReactNode }) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) {
        gsap.set(".reveal, .hero-title span, .float-image", { opacity: 1, y: 0, scale: 1 });
        return;
      }

      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from(".nav-shell", { opacity: 0, y: -18, duration: 0.8 })
        .from(".hero-title span", { opacity: 0, y: 56, stagger: 0.08, duration: 1.05 }, "-=0.35")
        .from(".hero-copy", { opacity: 0, y: 24, duration: 0.8 }, "-=0.6")
        .from(".hero-actions", { opacity: 0, y: 20, duration: 0.75 }, "-=0.5");

      gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
        gsap.from(element, {
          opacity: 0,
          y: 42,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 82%"
          }
        });
      });

      gsap.utils.toArray<HTMLElement>(".float-image").forEach((element) => {
        gsap.to(element, {
          yPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8
          }
        });
      });
    },
    { scope: container }
  );

  return <div ref={container}>{children}</div>;
}
