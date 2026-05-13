import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/50 backdrop-blur py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-10 md:gap-8 mb-12 text-left">
          <div className="col-span-3 md:col-span-1">
            <p className="text-gray-300 text-sm font-semibold tracking-tight">AI Automation & Infrastructure</p>
          </div>
          <div className="col-span-1">
            <h4 className="text-white font-semibold mb-4 text-base">Resources</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <Link href="/vision" className="hover:text-white transition">
                  Our Vision
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-white transition">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-white transition">
                  Case studies
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h4 className="text-white font-semibold mb-4 text-base">Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <Link href="/status" className="hover:text-white transition">
                  Status
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
              <li>
                <a href="mailto:owais@wexel.ai" className="hover:text-white transition">
                  Email
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h4 className="text-white font-semibold mb-4 text-base">Legal</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© 2026 wexel. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <Link href="#" className="text-gray-500 hover:text-white transition text-sm">
              Twitter
            </Link>
            <Link href="#" className="text-gray-500 hover:text-white transition text-sm">
              LinkedIn
            </Link>
            <Link href="#" className="text-gray-500 hover:text-white transition text-sm">
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
