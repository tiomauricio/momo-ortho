"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cases = [
  {
    name: "Kornelia",
    before: "/kornelia-before.jpg",
    after: "/kornelia-after.jpg",
    thumb1: "/kornelia-thumb1.jpg",
    thumb2: "/kornelia-thumb2.jpg",
    description:
      "This is Kornelia, who needed to have her teeth corrected in order to smile with confidence. Only orthodontics was used to re-create her smile, no fillings, crowns or veneers were used. She is delighted with her new smile and now smiles like a Celebrity!",
  },
  {
    name: "Rachel",
    before: "/rachel-before.jpg",
    after: "/rachel-after.jpg",
    thumb1: "/rachel-thumb1.jpg",
    thumb2: "/rachel-thumb2.jpg",
    description:
      "Upper arch braces, 6 months Rachel chose to have just the upper arch treated and the treatment time was just 6 months.",
  },
];

function Slider({
  before,
  after,
}: {
  before: string;
  after: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const dragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const onPointerDown = useCallback(() => {
    dragging.current = true;
  }, []);

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (dragging.current) handleMove(e.clientX);
    },
    [handleMove]
  );

  const onPointerUp = useCallback(() => {
    dragging.current = false;
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[408/209] rounded-lg overflow-hidden cursor-ew-resize select-none touch-none"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      {/* Before (full) */}
      <Image
        src={before}
        alt="Before treatment"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      {/* After (clipped from right) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 0 0 ${position}%)` }}
      >
        <Image
          src={after}
          alt="After treatment"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      {/* Slider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-teal-dark/80"
        style={{ left: `${position}%` }}
      />
      {/* Handle */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-[50px] h-[26px] bg-teal-dark rounded-[4px] flex items-center justify-center gap-1"
        style={{ left: `${position}%` }}
      >
        <ChevronLeft className="h-3 w-3 text-white" strokeWidth={3} />
        <ChevronRight className="h-3 w-3 text-white" strokeWidth={3} />
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-[3%] 2xl:px-[150px]">
      <div
        className="mx-auto max-w-[1620px] rounded-3xl p-6 sm:p-10 lg:px-[158px] lg:py-16"
        style={{
          background: "linear-gradient(to bottom, #f7fbfb, #f4f9fa)",
        }}
      >
        {/* Header */}
        <span className="text-base font-bold leading-6 tracking-[-0.32px] text-teal">
          BEFORE & AFTERS
        </span>
        <h2 className="mt-4 text-3xl lg:text-[40px] font-medium leading-[1.1] tracking-[-0.8px] text-teal-dark max-w-[581px]">
          Et suspendisse non tellus netus.
        </h2>
        <p className="mt-4 lg:mt-6 text-base font-normal leading-6 tracking-[-0.32px] text-foreground max-w-[694px]">
          See the difference orthodontic treatment can make in a smile. Here are
          some of the smile transformations we have achieved for our patients
          here at Lincoln Orthodontics.
        </p>

        {/* Cases grid */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {cases.map((c) => (
            <div key={c.name}>
              {/* Slider + thumbnails row */}
              <div className="flex gap-4">
                <div className="flex-1">
                  <Slider before={c.before} after={c.after} />
                </div>
                <div className="hidden sm:flex flex-col gap-2.5 w-[120px] lg:w-[184px]">
                  <div className="relative aspect-[184/94] rounded-lg overflow-hidden">
                    <Image
                      src={c.thumb1}
                      alt={`${c.name} detail`}
                      fill
                      className="object-cover"
                      sizes="184px"
                    />
                  </div>
                  <div className="relative aspect-[184/95] rounded-lg overflow-hidden">
                    <Image
                      src={c.thumb2}
                      alt={`${c.name} detail`}
                      fill
                      className="object-cover"
                      sizes="184px"
                    />
                  </div>
                </div>
              </div>
              {/* Patient info */}
              <p className="mt-4 text-base font-normal text-teal-dark">
                {c.name}
              </p>
              <p className="mt-1 text-base font-normal leading-6 tracking-[-0.32px] text-foreground max-w-[520px]">
                {c.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom row: CTA + arrows */}
        <div className="mt-10 flex items-center justify-between">
          <Link
            href="/before-after"
            className="inline-flex w-fit items-center justify-center rounded-[4px] border border-teal-dark px-4 py-2 text-base font-bold text-teal-dark hover:bg-teal-dark hover:text-white transition-colors"
          >
            DISCOVER MORE
          </Link>
          <div className="flex gap-4">
            <button
              className="w-10 h-10 rounded-lg border-2 border-teal-dark flex items-center justify-center hover:bg-teal-dark hover:text-white text-teal-dark transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={2} />
            </button>
            <button
              className="w-10 h-10 rounded-lg border-2 border-teal-dark flex items-center justify-center hover:bg-teal-dark hover:text-white text-teal-dark transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
