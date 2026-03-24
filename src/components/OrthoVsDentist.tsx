"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";

const tabs = [
  "Qualification and\nMembership",
  "Treatments and Services",
  "Experience and\nTraining",
];

const tabData: Record<
  number,
  { text: string; ortho: boolean; dentist: boolean }[]
> = {
  0: [
    {
      text: "Bachelor of Dental Surgery (5 years)",
      ortho: true,
      dentist: true,
    },
    {
      text: "Specialist Certificate of Orthodontics (3 years) including significant post-graduate research and thesis",
      ortho: true,
      dentist: false,
    },
    {
      text: "Member of professional orthodontic bodies, eg. American Association of Orthodontists, Australian Society of Orthodontists, American Board of Orthodontics",
      ortho: true,
      dentist: false,
    },
  ],
  1: [
    {
      text: "Comprehensive orthodontic diagnosis and treatment planning",
      ortho: true,
      dentist: false,
    },
    {
      text: "Full range of fixed and removable appliances",
      ortho: true,
      dentist: false,
    },
    {
      text: "Clear aligner therapy (e.g. Invisalign)",
      ortho: true,
      dentist: true,
    },
  ],
  2: [
    {
      text: "Minimum 10 years of higher education and clinical training",
      ortho: true,
      dentist: false,
    },
    {
      text: "Treats orthodontic cases exclusively every day",
      ortho: true,
      dentist: false,
    },
    {
      text: "Ongoing specialist continuing professional development",
      ortho: true,
      dentist: true,
    },
  ],
};

export default function OrthoVsDentist() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="w-full px-4 sm:px-6 lg:px-[3%] 2xl:px-[150px] py-16 lg:py-24">
      <div className="mx-auto max-w-[1620px] lg:pl-[158px]">
        {/* Heading */}
        <h2 className="text-3xl lg:text-[40px] font-medium leading-[1.1] tracking-[-0.8px] text-teal-dark">
          Orthodontists vs Dentists
        </h2>
        <p className="mt-6 text-base font-normal leading-6 tracking-[-0.32px] text-foreground max-w-[734px]">
          Semper nunc turpis nulla proin. At mattis tempor orci aenean egestas.
          Sem blandit turpis diam et aliquam. Orci magna eget a eget hendrerit.
        </p>

        {/* Tabs + Table */}
        <div className="mt-10 lg:mt-14 max-w-[1304px]">
          {/* Tab bar */}
          <div className="flex overflow-x-auto">
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`shrink-0 px-6 lg:px-10 py-5 text-base font-bold text-teal whitespace-pre-line text-left rounded-t-lg transition-colors ${
                  activeTab === i ? "bg-[#edf5f7]" : "bg-transparent hover:bg-[#edf5f7]/50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Table */}
          <div
            className={`bg-[#f8fbfc] p-6 sm:p-8 lg:p-10 ${
              activeTab === 0
                ? "rounded-tr-lg rounded-b-lg"
                : "rounded-lg"
            }`}
          >
            {/* Column headers */}
            <div className="flex items-center mb-6">
              <div className="flex-1" />
              <span className="w-24 text-center text-base font-bold text-teal">
                ORTHODONTIST
              </span>
              <span className="w-24 text-center text-base font-bold text-teal">
                DENTIST
              </span>
            </div>

            {/* Rows */}
            <div className="space-y-0">
              {tabData[activeTab].map((row, i) => (
                <div key={i}>
                  <div className="flex items-center py-4">
                    <p className="flex-1 text-base font-normal leading-6 tracking-[-0.32px] text-foreground pr-6">
                      {row.text}
                    </p>
                    <div className="w-24 flex justify-center">
                      <span className="inline-flex items-center justify-center w-[26px] h-[25px] rounded-[4px] bg-gradient-to-b from-[#80b8bb] to-[#3c8b90]">
                        <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                      </span>
                    </div>
                    <div className="w-24 flex justify-center">
                      {row.dentist ? (
                        <span className="inline-flex items-center justify-center w-[26px] h-[25px] rounded-[4px] bg-gradient-to-b from-[#80b8bb] to-[#3c8b90]">
                          <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-[26px] h-[25px] rounded-[4px] bg-[#a5a5a5]">
                          <X className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                        </span>
                      )}
                    </div>
                  </div>
                  {i < tabData[activeTab].length - 1 && (
                    <div className="h-px bg-teal/30" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
