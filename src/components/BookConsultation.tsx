import Image from "next/image";
import Link from "next/link";

export default function BookConsultation() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-[3%] 2xl:px-[150px] py-16 lg:py-24">
      <div className="mx-auto max-w-[1620px] flex flex-col lg:flex-row gap-10 lg:gap-[120px] items-center">
        {/* Left image */}
        <div className="relative w-full lg:w-1/2 aspect-square max-w-[790px] rounded-3xl overflow-hidden">
          <Image
            src="/consultation.jpg"
            alt="Book a free consultation"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 790px"
          />
        </div>

        {/* Right content */}
        <div className="w-full lg:w-1/2 max-w-[480px]">
          <span className="text-base font-bold leading-6 tracking-[-0.32px] text-teal">
            BOOK FREE CONSULTATION
          </span>

          <h2 className="mt-4 lg:mt-6 text-3xl lg:text-[40px] font-medium leading-[1.1] tracking-[-0.8px] text-teal-dark max-w-[408px]">
            Faucibus vitae amet egestas sagittis cras nunc vel pellentesque.
          </h2>

          <p className="mt-4 lg:mt-6 text-base font-normal leading-6 tracking-[-0.32px] text-foreground max-w-[408px]">
            Leo platea at venenatis nulla placerat congue feugiat habitant.
            Maecenas libero habitant a orci quis vel nunc.
          </p>

          <Link
            href="/book"
            className="mt-10 lg:mt-16 inline-flex items-center justify-center rounded-sm bg-amber px-6 py-3 text-lg font-bold text-white hover:bg-amber/90 transition-colors"
          >
            BOOK A CONSULTATION
          </Link>
        </div>
      </div>
    </section>
  );
}
