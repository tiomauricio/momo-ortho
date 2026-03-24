"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Globe, Mail, Phone, Menu, X } from "lucide-react";

const navItems = [
  { label: "Treatments", href: "/treatments", hasDropdown: true },
  { label: "Lincoln Kids", href: "/lincoln-kids" },
  { label: "Costs", href: "/costs" },
  { label: "Success Stories", href: "/success-stories", hasDropdown: true },
  { label: "About Us", href: "/about", hasDropdown: true },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full bg-white">
      {/* Header content */}
      <div className="mx-auto max-w-[1620px] px-4 sm:px-6 lg:px-[3%] 2xl:px-[150px]">
        <div className="flex items-center justify-between py-4 lg:pt-16 lg:pb-0">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/logo.png"
              alt="Lincoln Orthodontics"
              width={120}
              height={111}
              className="h-16 w-auto sm:h-20 lg:h-[111px]"
              priority
            />
          </Link>

          {/* Desktop: utility bar + nav stacked on the right */}
          <div className="hidden lg:flex flex-col items-end gap-8">
            {/* Utility bar */}
            <div className="flex items-end gap-10 text-[14px] font-medium leading-[18px] tracking-[-0.14px] text-[#333333]">
              <Link
                href="#"
                className="flex items-center gap-1 hover:text-teal-dark transition-colors"
              >
                <Globe className="h-3 w-3 text-teal fill-teal" strokeWidth={0} />
                <span>LANGUAGE</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-1 hover:text-teal-dark transition-colors"
              >
                <Mail className="h-3 w-3 text-teal fill-teal" strokeWidth={0} />
                <span>REFERRALS</span>
              </Link>
              <a href="tel:01522533363" className="flex flex-col hover:text-teal-dark transition-colors">
                <span className="text-[8px] font-bold leading-[10px] tracking-[-0.08px] text-[#333333] ml-4">
                  Existing Patients
                </span>
                <span className="flex items-center gap-1">
                  <Phone className="h-3 w-3 text-teal fill-teal" strokeWidth={0} />
                  01522 533363
                </span>
              </a>
              <a href="tel:01522533227" className="flex flex-col hover:text-teal-dark transition-colors">
                <span className="text-[8px] font-bold leading-[10px] tracking-[-0.08px] text-[#333333] ml-4">
                  New Patients
                </span>
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

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100">
          <nav className="mx-auto max-w-[1620px] px-4 sm:px-6 py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center justify-between px-3 py-3 text-base font-medium text-foreground hover:text-teal-dark hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown className="h-4 w-4 text-teal" />
                )}
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
                  <span>
                    <span className="font-bold text-xs">
                      Existing Patients:{" "}
                    </span>
                    01522 533363
                  </span>
                </a>
                <a href="tel:01522533227" className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 text-teal" />
                  <span>
                    <span className="font-bold text-xs">New Patients: </span>
                    01522 533227
                  </span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
