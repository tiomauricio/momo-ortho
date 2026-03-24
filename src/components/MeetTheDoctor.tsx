import Image from "next/image";
import Link from "next/link";

export default function MeetTheDoctor() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-[3%] 2xl:px-[150px]">
      <div className="relative mx-auto max-w-[1620px] overflow-hidden rounded-3xl bg-[#f4f4f4] min-h-[400px] lg:min-h-[800px]">
        {/* Doctor photo — covers left ~80% */}
        <Image
          src="/doctor.jpg"
          alt="Meet the doctor"
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 1280px"
        />

        {/* Gradient fade from right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to left, #f5f5f5 0%, #f5f5f5 15%, rgba(245,245,245,0.97) 31.5%, rgba(245,245,245,0) 68%)",
          }}
          aria-hidden="true"
        />

        {/* Content — right aligned */}
        <div className="relative z-10 flex items-center justify-end h-full min-h-[400px] lg:min-h-[800px]">
          <div className="w-full lg:w-auto lg:max-w-[480px] p-6 sm:p-10 lg:pr-[158px]">
            <span className="text-base font-bold leading-6 tracking-[-0.32px] text-teal">
              MEET THE DOCTOR
            </span>

            <h2 className="mt-4 lg:mt-6 text-3xl lg:text-[40px] font-medium leading-[1.1] tracking-[-0.8px] text-teal-dark max-w-[408px]">
              Et suspendisse non tellus netus. Sagittis vulputate eget eu.
            </h2>

            <p className="mt-4 lg:mt-6 text-base font-normal leading-6 tracking-[-0.32px] text-foreground max-w-[408px]">
              Justo mauris scelerisque placerat habitant. Quis phasellus a
              ultricies facilisis. Senectus morbi risus risus.
            </p>

            <Link
              href="/meet-the-doctor"
              className="mt-10 lg:mt-16 inline-flex w-fit items-center justify-center rounded-[4px] border border-teal-dark px-4 py-2 text-base font-bold text-teal-dark hover:bg-teal-dark hover:text-white transition-colors"
            >
              MEET THE DR
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
