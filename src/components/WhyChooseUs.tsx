import Image from "next/image";

const features = [
  { icon: "/icons/experience.png", label: "20 Years Of Specialist Experience" },
  { icon: "/icons/remote.png", label: "Remote Treatment Monitoring" },
  { icon: "/icons/award.png", label: "Multi Award-Winning Practice" },
  { icon: "/icons/family.png", label: "Treatments For All The Family" },
  { icon: "/icons/virtual.png", label: "Virtual Consultations Offered" },
  { icon: "/icons/parking.png", label: "Free Onsite Parking" },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-[3%] 2xl:px-[150px] py-16 lg:py-24">
      <div className="mx-auto max-w-[1620px] flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 lg:gap-16">
        {/* Left column — heading + body */}
        <div className="lg:pl-[158px] max-w-[408px] shrink-0">
          <h2 className="font-display text-3xl lg:text-[40px] font-normal leading-[1.1] tracking-[-0.8px] text-teal-dark">
            Why choose{"\n"}Lincoln Orthodontics
          </h2>
          <p className="mt-6 text-base font-normal leading-6 tracking-[-0.32px] text-foreground">
            Semper nunc turpis nulla proin. At mattis tempor orci aenean
            egestas. Sem blandit turpis diam et aliquam. Orci magna eget a eget
            hendrerit.
          </p>
        </div>

        {/* Right column — 3x2 feature grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 lg:gap-x-[56px] gap-y-10 lg:gap-y-[60px]">
          {features.map((feature) => (
            <div key={feature.label} className="flex flex-col items-start max-w-[131px]">
              <Image
                src={feature.icon}
                alt=""
                width={56}
                height={56}
                className="h-12 w-12 lg:h-14 lg:w-14"
              />
              <p className="mt-4 lg:mt-6 text-base lg:text-lg font-normal leading-[1.4] tracking-[-0.36px] text-foreground">
                {feature.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
