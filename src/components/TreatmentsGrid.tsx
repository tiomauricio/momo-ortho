import Image from "next/image";
import Link from "next/link";

const treatments = [
  {
    label: "CLEAR ALIGNERS",
    title: "A convenient treatment for a busy lifestyle",
    description:
      "Justo mauris scelerisque placerat habitant. Quis phasellus a ultricies facilisis nectus morbi risus risus.",
    image: "/card-clear-aligners.jpg",
    href: "/treatments/clear-aligners",
  },
  {
    label: "FIXED BRACES",
    title: "The tried and trusted teeth straightening solution",
    description:
      "Etiam eu fermentum mattis ut fringilla aliquam at habitant ultricies drerit natoque turpis sed.",
    image: "/card-fixed-braces.jpg",
    href: "/treatments/fixed-braces",
  },
  {
    label: "REMOTE MONITORING",
    title: "Vestibulum dui imperdiet pretium",
    description:
      "Sed in ornare magnis vitae mauris in netus amet. Vitae adipiscing a laoreet risus justo.",
    image: "/card-remote-monitoring.jpg",
    href: "/treatments/remote-monitoring",
  },
  {
    label: "NHS",
    title: "Beat the NHS waiting list",
    description:
      "Vestibulum interdum donec lectus a donec consectetur gravida amet eu. Penatibus dictum.",
    image: "/card-nhs.jpg",
    href: "/treatments/nhs",
  },
];

export default function TreatmentsGrid() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-[3%] 2xl:px-[150px] pt-10">
      <div className="mx-auto max-w-[1620px] grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
        {treatments.map((card) => (
          <div
            key={card.label}
            className="relative overflow-hidden rounded-3xl aspect-square md:aspect-[790/720]"
          >
            {/* Background image */}
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            {/* Radial gradient from bottom-left corner */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at 20% 95%, rgba(245,245,245,0.97) 0%, rgba(245,245,245,0.80) 25%, rgba(245,245,245,0.40) 45%, rgba(245,245,245,0) 70%)",
              }}
              aria-hidden="true"
            />

            {/* Blur glow behind text area */}
            <div
              className="absolute bottom-[15%] left-[15%] w-[55%] h-[45%] bg-[#f5f5f5] blur-[116px] rounded-full"
              aria-hidden="true"
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-end h-full p-6 sm:p-8 lg:p-10 xl:pl-[158px] xl:pb-[48px]">
              <span className="text-base font-bold leading-6 tracking-[-0.32px] text-teal">
                {card.label}
              </span>
              <h3 className="mt-3 text-2xl lg:text-[32px] font-medium leading-[1.1] tracking-[-0.64px] text-teal-dark max-w-[400px]">
                {card.title}
              </h3>
              <p className="mt-4 lg:mt-6 text-base font-normal leading-6 tracking-[-0.32px] text-foreground max-w-[408px]">
                {card.description}
              </p>
              <Link
                href={card.href}
                className="mt-6 lg:mt-8 inline-flex w-fit items-center justify-center rounded-[4px] border border-teal-dark px-4 py-2 text-base font-bold text-teal-dark hover:bg-teal-dark hover:text-white transition-colors"
              >
                DISCOVER MORE
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
