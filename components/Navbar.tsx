"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Menu, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const links = [
  { name: "Features", href: "/#features" },
  { name: "Services", href: "/#services" },
  { name: "FAQ", href: "/#faq" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 sm:p-6 pointer-events-none">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={cn(
          "pointer-events-auto relative flex items-center justify-between w-full max-w-5xl h-14 sm:h-16 px-6 rounded-full border border-white/10 transition-all duration-300",
          scrolled
            ? "bg-black/60 backdrop-blur-xl border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            : "bg-black/40 backdrop-blur-md border-white/10"
        )}
      >
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-xl sm:text-2xl font-blanka tracking-wider text-white group-hover:opacity-80 transition-opacity">
            wexel
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-4">
          <Link href="/contact">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full border-white/20 text-white hover:bg-white hover:text-black h-9 px-5 transition-all"
            >
              Contact
            </Button>
          </Link>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 -mr-2 text-white hover:bg-white/5 rounded-full transition-colors"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="absolute top-full left-0 right-0 mt-3 p-3 bg-black/95 backdrop-blur-3xl border border-white/10 rounded-3xl overflow-hidden md:hidden shadow-2xl"
            >
              <div className="flex flex-col gap-1">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between py-2.5 px-4 text-lg font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-2xl transition-all group"
                  >
                    {link.name}
                    <ChevronRight
                      size={18}
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                    />
                  </Link>
                ))}
                <div className="mt-1 pt-1 border-t border-white/5">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <Button className="w-full h-11 rounded-2xl bg-white text-black hover:bg-gray-200 font-bold mt-1">
                      Contact
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
