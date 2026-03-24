"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Globe, Mail, Phone, X } from "lucide-react";

const navItems = [
  { label: "Treatments", href: "/treatments", hasDropdown: true },
  { label: "Lincoln Kids", href: "/lincoln-kids" },
  { label: "Costs", href: "/costs" },
  { label: "Success Stories", href: "/success-stories", hasDropdown: true },
  { label: "About Us", href: "/about", hasDropdown: true },
  { label: "Contact Us", href: "/contact" },
];

function HamburgerIcon({ className }: { className?: string }) {
  return (
    <svg width="34" height="18" viewBox="0 0 34 18" fill="none" className={className}>
      <path d="M11 1L33 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M1 9H33" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 17L33 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* === MOBILE HEADER (below lg) === */}
      <header className="lg:hidden w-full">
        {/* Dark status / logo bar */}
        <div className="bg-[#272727] px-6 py-3 flex items-center justify-between">
          <Image
            src="/logo-mark.svg"
            alt="Lincoln Orthodontics"
            width={27}
            height={10}
            className="h-2.5 w-auto invert brightness-0"
            priority
          />
          <div className="flex items-center gap-1 text-white/40 text-[10px]">
            {/* Status bar indicators (decorative) */}
          </div>
        </div>

        {/* Utility strip */}
        <div className="bg-[#F8FBFC] px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-1 text-xs font-medium text-[#333333]">
            <Globe className="h-3 w-3 text-teal fill-teal" strokeWidth={0} />
            <span>LANGUAGE</span>
          </div>
          <div className="flex items-center gap-1 text-xs font-medium text-[#333333]">
            <Mail className="h-3 w-3 text-teal fill-teal" strokeWidth={0} />
            <span>REFERRALS</span>
          </div>
        </div>

        {/* Logo + Call Us + Hamburger row */}
        <div className="px-6 py-3 flex items-center justify-between bg-white">
          <Link href="/" className="shrink-0">
            <Image
              src="/logo.png"
              alt="Lincoln Orthodontics"
              width={77}
              height={71}
              className="h-[52px] w-auto"
              priority
            />
          </Link>
          <div className="flex items-center gap-4">
            <a
              href="tel:01522533227"
              className="inline-flex items-center gap-2 rounded-sm bg-amber px-3 py-1.5 text-sm font-bold text-white"
            >
              CALL US
              <svg width="9" height="6" viewBox="0 0 9 6" fill="white">
                <path d="M1 1L4.5 5L8 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="text-teal-dark"
            >
              {mobileOpen ? (
                <X className="h-8 w-8" />
              ) : (
                <HamburgerIcon />
              )}
            </button>
          </div>
        </div>

        {/* Mobile nav drawer */}
        {mobileOpen && (
          <div className="border-t border-gray-100 bg-white">
            <nav className="px-6 py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-between px-3 py-3 text-base font-medium text-foreground hover:text-teal-dark hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="h-4 w-4 text-teal" />}
                </Link>
              ))}
              <div className="pt-4 space-y-3 border-t border-gray-100 mt-2">
                <Link
                  href="/book"
                  className="block w-full text-center rounded-sm bg-amber px-6 py-3 text-base font-bold text-white hover:bg-amber/90 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  BOOK A CONSULTATION
                </Link>
                <div className="flex flex-col gap-2 text-sm text-foreground px-3">
                  <a href="tel:01522533363" className="flex items-center gap-2">
                    <Phone className="h-3.5 w-3.5 text-teal" />
                    <span><span className="font-bold text-xs">Existing Patients: </span>01522 533363</span>
                  </a>
                  <a href="tel:01522533227" className="flex items-center gap-2">
                    <Phone className="h-3.5 w-3.5 text-teal" />
                    <span><span className="font-bold text-xs">New Patients: </span>01522 533227</span>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* === DESKTOP HEADER (lg and up) === */}
      {!scrolled && (
        <header className="hidden lg:block w-full bg-white">
          <div className="mx-auto max-w-[1620px] px-4 sm:px-6 lg:px-[3%] 2xl:px-[150px]">
            <div className="flex items-center justify-between pt-16">
              <Link href="/" className="shrink-0">
                <Image
                  src="/logo.png"
                  alt="Lincoln Orthodontics"
                  width={120}
                  height={111}
                  className="h-[111px] w-auto"
                  priority
                />
              </Link>

              <div className="flex flex-col items-end gap-8">
                {/* Utility bar */}
                <div className="flex items-end gap-10 text-[14px] font-medium leading-[18px] tracking-[-0.14px] text-[#333333]">
                  <Link href="#" className="flex items-center gap-1 hover:text-teal-dark transition-colors">
                    <Globe className="h-3 w-3 text-teal fill-teal" strokeWidth={0} />
                    <span>LANGUAGE</span>
                  </Link>
                  <Link href="#" className="flex items-center gap-1 hover:text-teal-dark transition-colors">
                    <Mail className="h-3 w-3 text-teal fill-teal" strokeWidth={0} />
                    <span>REFERRALS</span>
                  </Link>
                  <a href="tel:01522533363" className="flex flex-col hover:text-teal-dark transition-colors">
                    <span className="text-[8px] font-bold leading-[10px] tracking-[-0.08px] text-[#333333] ml-4">Existing Patients</span>
                    <span className="flex items-center gap-1">
                      <Phone className="h-3 w-3 text-teal fill-teal" strokeWidth={0} />
                      01522 533363
                    </span>
                  </a>
                  <a href="tel:01522533227" className="flex flex-col hover:text-teal-dark transition-colors">
                    <span className="text-[8px] font-bold leading-[10px] tracking-[-0.08px] text-[#333333] ml-4">New Patients</span>
                    <span className="flex items-center gap-1">
                      <Phone className="h-3 w-3 text-teal fill-teal" strokeWidth={0} />
                      01522 533227
                    </span>
                  </a>
                </div>

                {/* Main nav */}
                <nav className="flex items-center gap-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="group flex items-center gap-1 px-3 py-2 text-base font-medium text-foreground hover:text-teal-dark transition-colors"
                    >
                      {item.label}
                      {item.hasDropdown && (
                        <ChevronDown className="h-3.5 w-3.5 text-teal group-hover:text-teal-dark transition-colors" />
                      )}
                    </Link>
                  ))}
                  <Link
                    href="/book"
                    className="ml-4 inline-flex items-center justify-center rounded-sm bg-amber px-4 py-2 text-base font-bold text-white hover:bg-amber/90 transition-colors"
                  >
                    BOOK A CONSULTATION
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </header>
      )}

      {/* === STICKY NAV (on scroll, all screens) === */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm transition-all duration-300 ${
          scrolled ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="mx-auto max-w-[1620px] px-4 sm:px-6 lg:px-[3%] 2xl:px-[150px]">
          <div className="flex items-center justify-between h-14 lg:h-16">
            <Link href="/" className="shrink-0">
              <Image
                src="/logo.png"
                alt="Lincoln Orthodontics"
                width={60}
                height={56}
                className="h-9 lg:h-10 w-auto"
              />
            </Link>

            {/* Desktop sticky nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-1 px-2.5 py-1.5 text-sm font-medium text-foreground hover:text-teal-dark transition-colors"
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown className="h-3 w-3 text-teal group-hover:text-teal-dark transition-colors" />
                  )}
                </Link>
              ))}
              <Link
                href="/book"
                className="ml-3 inline-flex items-center justify-center rounded-sm bg-amber px-4 py-1.5 text-sm font-bold text-white hover:bg-amber/90 transition-colors"
              >
                BOOK A CONSULTATION
              </Link>
            </nav>

            {/* Mobile sticky controls */}
            <div className="flex lg:hidden items-center gap-3">
              <a
                href="tel:01522533227"
                className="inline-flex items-center gap-1.5 rounded-sm bg-amber px-2.5 py-1 text-xs font-bold text-white"
              >
                CALL US
              </a>
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                className="text-teal-dark"
              >
                {mobileOpen ? <X className="h-6 w-6" /> : <HamburgerIcon className="scale-75" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile nav in sticky mode */}
        {mobileOpen && scrolled && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <nav className="px-6 py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-between px-3 py-3 text-base font-medium text-foreground hover:text-teal-dark hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="h-4 w-4 text-teal" />}
                </Link>
              ))}
              <Link
                href="/book"
                className="block w-full text-center rounded-sm bg-amber px-6 py-3 text-base font-bold text-white hover:bg-amber/90 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                BOOK A CONSULTATION
              </Link>
            </nav>
          </div>
        )}
      </div>
    </>
  );
}
