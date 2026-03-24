import Image from "next/image";
import Link from "next/link";

const stats = [
  { icon: "/icons/zero.png", label: "Adipiscing sed suspendisse amet nibh ac" },
  { icon: "/icons/finance.png", label: "Orci vel et ornare aenean ipsum amet ut." },
  { icon: "/icons/hundred.png", label: "Ut egestas eleifend id consequat" },
];

export default function CostsSection() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-[3%] 2xl:px-[150px] pt-10">
      <div className="relative mx-auto max-w-[1620px] overflow-hidden rounded-3xl min-h-[500px] lg:min-h-[800px]">
        {/* Background image */}
        <Image
          src="/costs-bg.jpg"
          alt="Family smiling"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 1620px"
        />

        {/* Left-to-right gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(248,251,252,0.91) 24.6%, rgba(248,251,252,0) 100%)",
          }}
          aria-hidden="true"
        />

        {/* Blur glow behind text */}
        <div
          className="absolute top-[5%] left-0 w-[48%] h-[75%] bg-[#F8FBFC]/50 blur-[156px] rounded-full"
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center h-full min-h-[500px] lg:min-h-[800px] p-6 sm:p-10 lg:pl-[158px] lg:py-16">
          <span className="text-base font-bold leading-6 tracking-[-0.32px] text-teal">
            COSTS
          </span>

          <h2 className="mt-4 text-3xl lg:text-[40px] font-medium leading-[1.1] tracking-[-0.8px] text-teal-dark max-w-[408px]">
            Et suspendisse non tellus netus agittis vulputate eget eu.
          </h2>

          <p className="mt-4 lg:mt-6 text-base font-normal leading-6 tracking-[-0.32px] text-foreground max-w-[408px]">
            Justo mauris scelerisque placerat habitant. Quis phasellus a
            ultricies facilisis. Senectus morbi risus risus.
          </p>

          {/* Stats row */}
          <div className="mt-10 lg:mt-14 flex gap-6 lg:gap-[40px]">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-start w-[131px]">
                <Image
                  src={stat.icon}
                  alt=""
                  width={48}
                  height={48}
                  className="h-10 w-10 lg:h-12 lg:w-12"
                />
                <p className="mt-4 text-sm lg:text-base font-normal leading-6 tracking-[-0.32px] text-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/costs"
            className="mt-10 lg:mt-14 inline-flex w-fit items-center justify-center rounded-[4px] border border-teal-dark px-4 py-2 text-base font-bold text-teal-dark hover:bg-teal-dark hover:text-white transition-colors"
          >
            DISCOVER MORE
          </Link>
        </div>
      </div>
    </section>
  );
}
