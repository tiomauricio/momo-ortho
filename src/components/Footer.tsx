import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full px-4 sm:px-6 lg:px-[3%] 2xl:px-[150px] pt-16 lg:pt-24 pb-10">
      <div className="mx-auto max-w-[1620px] lg:px-[158px]">
        {/* Logo + Social row */}
        <div className="flex items-start justify-between">
          <Link href="/">
            <Image
              src="/footer-logo.png"
              alt="Lincoln Orthodontics"
              width={92}
              height={63}
              className="h-[63px] w-auto"
            />
          </Link>

          {/* Social icons */}
          <div className="flex items-center gap-8">
            <a
              href="#"
              aria-label="Instagram"
              className="text-teal-dark hover:text-teal transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-teal-dark hover:text-teal transition-colors"
            >
              <svg width="24" height="20" viewBox="0 0 24 20" fill="currentColor">
                <path d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="text-teal-dark hover:text-teal transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="text-teal-dark hover:text-teal transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-6 h-px bg-teal-dark" />

        {/* Copyright row */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-foreground">
          <p>
            © COPYRIGHT 2025 &nbsp;|&nbsp; Lincoln Orthodontics &nbsp;|&nbsp;
            ALL RIGHTS RESERVED
          </p>
          <div className="flex gap-2 text-sm">
            <Link href="/privacy" className="hover:text-teal-dark transition-colors">
              PRIVACY POLICY
            </Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-teal-dark transition-colors">
              TERMS & CONDITIONS
            </Link>
            <span>|</span>
            <Link href="/cookies" className="hover:text-teal-dark transition-colors">
              COOKIES POLICY
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
