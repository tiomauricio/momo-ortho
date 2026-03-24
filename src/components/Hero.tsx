import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-[3%] 2xl:px-[150px] pt-4 sm:pt-6 lg:pt-10">
      {/* Desktop hero */}
      <div className="hidden lg:block relative mx-auto max-w-[1620px] overflow-hidden rounded-3xl">
        <Image
          src="/hero-bg.jpg"
          alt="Mother and child smiling"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1200px) 90vw, 1620px"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent"
          aria-hidden="true"
        />
        <div
          className="absolute top-8 left-0 w-[60%] h-[80%] bg-white/50 blur-[156px] rounded-full"
          aria-hidden="true"
        />
        <div className="relative z-10 flex min-h-[720px] items-center">
          <div className="w-full max-w-xl px-[158px]">
            <h1 className="font-display text-[48px] font-light leading-[1.1] tracking-normal text-teal-dark">
              Your Smile Deserves A Specialist
            </h1>
            <p className="mt-6 max-w-[403px] text-base font-normal leading-6 tracking-[-0.32px] text-foreground">
              Expert orthodontic care tailored to you. From braces to
              Invisalign, our specialists create confident smiles for patients of
              all ages.
            </p>
            <Link
              href="/book"
              className="mt-12 inline-flex items-center justify-center rounded-sm bg-amber px-6 py-3 text-lg font-bold text-white hover:bg-amber/90 transition-colors"
            >
              BOOK A CONSULTATION
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile hero */}
      <div className="lg:hidden relative mx-auto overflow-hidden rounded-lg">
        <Image
          src="/hero-bg.jpg"
          alt="Mother and child smiling"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Bottom-to-top gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(245,245,245,1) 25%, rgba(245,245,245,0.8) 45%, rgba(245,245,245,0) 65%)",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 flex flex-col justify-end min-h-[497px] px-6 pb-8 pt-32">
          <h1 className="text-[32px] leading-[1.1] text-teal-dark">
            <span className="font-light">Your Smile Deserves</span>
            <br />
            <span className="font-bold tracking-[-0.96px]">A Specialist</span>
          </h1>
          <p className="mt-3 text-base font-normal leading-6 tracking-[-0.32px] text-foreground max-w-[294px]">
            Bibendum enim et feugiat magna ornare mattis eget neque amet tempor.
          </p>
          <Link
            href="/book"
            className="mt-6 w-full flex items-center justify-center rounded-sm bg-amber px-6 py-3 text-lg font-bold text-white hover:bg-amber/90 transition-colors"
          >
            BOOK A CONSULTATION
          </Link>
        </div>
      </div>
    </section>
  );
}
