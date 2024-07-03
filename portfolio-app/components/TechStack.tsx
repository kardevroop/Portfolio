"use client";
import { ParallaxScroll } from "@/components/ui/ParallaxScroll";
import { techImages } from "@data";

export function TechStack() {
  return <ParallaxScroll images={techImages} />;
}