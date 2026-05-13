"use client";

import { Building2, ShoppingBag, PieChart, CreditCard, Scale } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const industries = [
  { name: "RealEstate Enterprise", icon: <Building2 className="w-5 h-5" strokeWidth={1.5} /> },
  { name: "Luxury E-Commerce", icon: <ShoppingBag className="w-5 h-5" strokeWidth={1.5} /> },
  { name: "Private Equity", icon: <PieChart className="w-5 h-5" strokeWidth={1.5} /> },
  { name: "Fintech  Architecture", icon: <CreditCard className="w-5 h-5" strokeWidth={1.5} /> },
  { name: "Legal Infrastructure", icon: <Scale className="w-5 h-5" strokeWidth={1.5} /> },
];

export function IndustryMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    // Mouse wheel scrolling
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      marquee.scrollLeft += e.deltaY > 0 ? 50 : -50;
    };

    // Mouse drag scrolling
    const handleMouseDown = (e: MouseEvent) => {
      setIsDragging(true);
      setStartX(e.pageX - marquee.offsetLeft);
      setScrollLeft(marquee.scrollLeft);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - marquee.offsetLeft;
      const walk = (x - startX) * 1.5;
      marquee.scrollLeft = scrollLeft - walk;
    };

    // Touch swipe scrolling
    let touchStartX = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].pageX;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touchEndX = e.touches[0].pageX;
      const diff = touchStartX - touchEndX;
      marquee.scrollLeft += diff * 0.5;
      touchStartX = touchEndX;
    };

    marquee.addEventListener("wheel", handleWheel, { passive: false });
    marquee.addEventListener("mousedown", handleMouseDown);
    marquee.addEventListener("mouseup", handleMouseUp);
    marquee.addEventListener("mousemove", handleMouseMove);
    marquee.addEventListener("mouseleave", handleMouseUp);
    marquee.addEventListener("touchstart", handleTouchStart);
    marquee.addEventListener("touchmove", handleTouchMove);

    return () => {
      marquee.removeEventListener("wheel", handleWheel);
      marquee.removeEventListener("mousedown", handleMouseDown);
      marquee.removeEventListener("mouseup", handleMouseUp);
      marquee.removeEventListener("mousemove", handleMouseMove);
      marquee.removeEventListener("mouseleave", handleMouseUp);
      marquee.removeEventListener("touchstart", handleTouchStart);
      marquee.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isDragging, startX, scrollLeft]);

  return (
    <section className="bg-black border-t border-white/5 overflow-hidden relative" style={{ paddingTop: "55px", paddingBottom: "55px" }}>
      <div className="container mx-auto px-4 mb-12 text-center">
        <p className="text-xs font-sans text-white tracking-[0.3em] uppercase">EXPERTISE DEFINING INDUSTRIES</p>
      </div>
      <div 
        ref={marqueeRef}
        className="relative flex overflow-x-auto scroll-smooth cursor-grab active:cursor-grabbing select-none"
        style={{ scrollBehavior: "smooth" }}
      >
        <div className="absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-black to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-black to-transparent pointer-events-none" />
        <div className="flex whitespace-nowrap">
          {industries.map((item, j) => (
            <div
              key={j}
              className="flex items-center gap-3 transition-all duration-500 cursor-default group scale-95 hover:scale-105 flex-shrink-0"
              style={{ minWidth: "fit-content", paddingRight: "4rem" }}
            >
              <div className="text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all">
                {item.icon}
              </div>
              <span className="text-lg font-bold tracking-widest text-white uppercase font-sans">
                {item.name}
              </span>
            </div>
          ))}
          {/* Duplicate items for seamless looping on scroll */}
          {industries.map((item, j) => (
            <div
              key={`duplicate-${j}`}
              className="flex items-center gap-3 transition-all duration-500 cursor-default group scale-95 hover:scale-105 flex-shrink-0"
              style={{ minWidth: "fit-content", paddingRight: "4rem" }}
            >
              <div className="text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all">
                {item.icon}
              </div>
              <span className="text-lg font-bold tracking-widest text-white uppercase font-sans">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
