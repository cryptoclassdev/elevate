"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const linkClass = (href: string) =>
    `text-sm font-medium transition-colors ${
      pathname === href
        ? "text-teal-600"
        : "text-slate-600 hover:text-teal-600"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-10 h-10">
            <Image
              src="/logo.png"
              alt="Elevate & Prosper"
              fill
              className="object-contain"
            />
          </div>
          <span className="font-display font-semibold text-slate-800 hidden sm:inline">
            Elevate & Prosper
          </span>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className={linkClass("/")}>
              Home
            </Link>
            <Link href="/#services" className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors">
              Services
            </Link>
            <Link href="/#why-us" className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors">
              Why Us
            </Link>
            <Link href="/contact" className={linkClass("/contact")}>
              Contact
            </Link>
          </div>
          <Link
            href="/contact"
            className="bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all hover:shadow-lg hover:shadow-teal-600/25"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}
