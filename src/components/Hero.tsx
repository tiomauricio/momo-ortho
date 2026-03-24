import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-[3%] 2xl:px-[150px] pt-4 sm:pt-6 lg:pt-10">
      <div className="relative mx-auto max-w-[1620px] overflow-hidden rounded-3xl">
        {/* Background image */}
        <Image
          src="/hero-bg.jpg"
          alt="Mother and child smiling"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1620px"
        />

        {/* White gradient overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent"
          aria-hidden="true"
        />

        {/* Soft glow behind text */}
        <div
          className="absolute top-8 left-0 w-[60%] h-[80%] bg-white/50 blur-[100px] lg:blur-[156px] rounded-full"
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative z-10 flex min-h-[400px] sm:min-h-[500px] lg:min-h-[720px] items-center">
          <div className="w-full max-w-xl px-6 py-12 sm:px-10 sm:py-16 lg:px-[158px] lg:py-0">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-[48px] font-light leading-[1.1] tracking-normal text-teal-dark">
              Your Smile Deserves A Specialist
            </h1>
            <p className="mt-4 sm:mt-5 lg:mt-6 max-w-[403px] text-base font-normal leading-6 tracking-[-0.32px] text-foreground">
              Expert orthodontic care tailored to you. From braces to
              Invisalign, our specialists create confident smiles for patients of
              all ages.
            </p>
            <Link
              href="/book"
              className="mt-8 sm:mt-10 lg:mt-12 inline-flex items-center justify-center rounded-sm bg-amber px-6 py-3 text-base sm:text-lg font-bold text-white hover:bg-amber/90 transition-colors"
            >
              BOOK A CONSULTATION
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
