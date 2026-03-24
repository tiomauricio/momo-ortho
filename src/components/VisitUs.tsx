import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function VisitUs() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-[3%] 2xl:px-[150px]">
      <div className="mx-auto max-w-[1620px] flex flex-col-reverse lg:flex-row gap-10 lg:gap-[120px] items-start">
        {/* Left content */}
        <div className="w-full lg:w-1/2 lg:pl-[158px] lg:py-16">
          <h2 className="text-3xl lg:text-[40px] font-medium leading-[1.1] tracking-[-0.8px] text-teal-dark">
            Visit Us
          </h2>

          <p className="mt-4 lg:mt-6 text-base font-normal leading-6 tracking-[-0.32px] text-foreground max-w-[408px]">
            The Lincoln Orthodontics practice is conveniently located off the
            A1434 with free onsite parking available. We look forward to seeing
            you in Lincoln!
          </p>

          <div className="mt-10 space-y-6">
            {/* Address */}
            <div className="flex items-start gap-3">
              <MapPin className="h-4 w-4 mt-1 text-teal-dark shrink-0" strokeWidth={2.5} />
              <p className="text-base leading-6 text-foreground">
                Deacon Road
                <br />
                Lincoln LN24JB
              </p>
            </div>

            {/* New patients */}
            <div className="flex items-start gap-3">
              <Phone className="h-4 w-4 mt-1 text-teal-dark shrink-0" strokeWidth={2.5} />
              <div>
                <p className="text-xs font-medium text-foreground">
                  New patient direct line
                </p>
                <a
                  href="tel:01522533227"
                  className="text-base text-foreground hover:text-teal-dark transition-colors"
                >
                  01522 533227
                </a>
              </div>
            </div>

            {/* Existing patients */}
            <div className="flex items-start gap-3">
              <Phone className="h-4 w-4 mt-1 text-teal-dark shrink-0" strokeWidth={2.5} />
              <div>
                <p className="text-xs font-medium text-foreground">
                  Reception for existing patients
                </p>
                <a
                  href="tel:01522533363"
                  className="text-base text-foreground hover:text-teal-dark transition-colors"
                >
                  01522 533363
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3">
              <Mail className="h-4 w-4 mt-1 text-teal-dark shrink-0" strokeWidth={2.5} />
              <a
                href="mailto:info@lincolnorthodontics.co.uk"
                className="text-base text-foreground hover:text-teal-dark transition-colors"
              >
                info@lincolnorthodontics.co.uk
              </a>
            </div>

            {/* Opening hours */}
            <div className="flex items-start gap-3">
              <Clock className="h-4 w-4 mt-1 text-teal-dark shrink-0" strokeWidth={2.5} />
              <div className="text-base leading-6 text-foreground">
                <div className="flex gap-6">
                  <span className="w-[140px]">Monday - Thursday</span>
                  <span>8:30 am - 5:30 pm</span>
                </div>
                <div className="flex gap-6">
                  <span className="w-[140px]">Friday</span>
                  <span>9:00 am - 3:30 pm</span>
                </div>
                <p className="mt-2 text-base text-foreground">
                  (Closed for lunch between 12:30pm - 1:25pm)
                </p>
              </div>
            </div>

            {/* Google Maps link */}
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-teal-dark shrink-0" strokeWidth={2.5} />
              <a
                href="https://maps.google.com/?q=Lincoln+Orthodontics+Deacon+Road+Lincoln"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-medium text-foreground hover:text-teal-dark transition-colors"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* Right map */}
        <div className="relative w-full lg:w-1/2 aspect-square max-w-[790px] rounded-3xl overflow-hidden">
          <Image
            src="/map.png"
            alt="Lincoln Orthodontics location map"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 790px"
          />
          {/* Map pin */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
            <div className="w-8 h-8 bg-teal-dark rounded-full border-4 border-white shadow-lg" />
            <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-t-[12px] border-l-transparent border-r-transparent border-t-teal-dark mx-auto -mt-1" />
          </div>
        </div>
      </div>
    </section>
  );
}
