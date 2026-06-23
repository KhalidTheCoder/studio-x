import Image from 'next/image';

export default function CoreServices() {
  return (
    <section className="w-full py-[100px] px-20 flex flex-col items-center gap-16">
      {/* Header */}
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-text-strong text-center font-berghan text-[64px] leading-[1.1em] capitalize">
          Our Core Services
        </h2>
        <p className="text-text-weak text-base text-center font-satoshi">
          An elite suite of digital services designed to take your product from early-stage concept to market domination
        </p>
      </div>

      {/* Cards grid */}
      <div className="w-full flex items-stretch gap-3 h-[800px]">
        {/* Left - Media Production */}
        <div className="relative w-[564px] shrink-0 rounded-3xl overflow-hidden flex flex-col justify-end">
          <Image src="/images/service-media.png" alt="Media Production" fill className="object-cover" />
          <div className="absolute inset-0 overlay-media" />
          <div className="relative z-10 p-14 flex flex-col gap-4">
            <h3 className="text-text-strong font-berghan text-[48px] leading-[1.05em] capitalize">
              Media Production
            </h3>
            <p className="text-text-strong text-right font-satoshi font-bold text-xl leading-[1.2em]">
              High-growth brands require high-impact imagery. We produce commercial-grade photography and cinematic brand videos that instantly capture attention and tell your unique story.
            </p>
          </div>
        </div>

        {/* Right column */}
        <div className="flex-1 flex flex-col gap-3">
          {/* Top row */}
          <div className="flex-1 flex gap-3">
            {/* Digital Marketing */}
            <div className="relative flex-1 rounded-3xl overflow-hidden flex flex-col">
              <Image src="/images/service-marketing-3170f2.png" alt="Digital Marketing" fill className="object-cover" />
              <div className="absolute inset-0 overlay-marketing" />
              <div className="relative z-10 p-14 flex flex-col gap-4">
                <h3 className="text-text-strong max-w-[427px] font-berghan text-[48px] leading-[1.05em] capitalize">
                  Digital Marketing
                </h3>
                <p className="text-text-strong text-right max-w-[427px] font-satoshi font-bold text-xl leading-[1.2em]">
                  We bypass vanity metrics to engineer performance infrastructure. From search visibility to paid acquisition, we optimize your campaigns to maximize actual revenue.
                </p>
              </div>
            </div>

            {/* Design & Branding */}
            <div className="relative flex-1 rounded-3xl overflow-hidden flex flex-col">
              <Image src="/images/service-branding.png" alt="Design & Branding" fill className="object-cover" />
              <div className="absolute inset-0 overlay-branding-tint" />
              <div className="absolute inset-0 overlay-branding" />
              <div className="relative z-10 p-14 flex flex-col items-end gap-4">
                <h3 className="text-text-strong text-right font-berghan text-[48px] leading-[1.05em] capitalize">
                  Design & Branding
                </h3>
                <p className="text-text-strong text-right max-w-[477px] font-satoshi font-bold text-xl leading-[1.2em]">
                  We craft premium brand strategies and high-fidelity UI/UX designs that transform casual users into loyal advocates.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom - Product Strategy */}
          <div className="relative flex-1 rounded-3xl overflow-hidden flex items-end justify-end">
            <Image src="/images/service-strategy.png" alt="Product Strategy" fill className="object-cover" />
            <div className="absolute inset-0 overlay-strategy" />
            <div className="relative z-10 p-14 flex flex-col items-end gap-4">
              <h3 className="text-text-strong text-right font-berghan text-[48px] leading-[1.05em] capitalize">
                Product Strategy
              </h3>
              <p className="text-text-strong text-right max-w-[477px] font-satoshi font-bold text-xl leading-[1.2em]">
                We de-risk your digital product launch. By utilizing rigorous MVP validation tactics and scalable technical architecture, we ensure your software is built on a foundation designed to grow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
