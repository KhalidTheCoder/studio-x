import Image from 'next/image';

export default function TestimonialsSection() {
  return (
    <section className="py-[100px] px-20 flex flex-col items-center gap-16 w-full">
      {/* Header */}
      <div className="flex flex-col items-center gap-4">
        <h2 className="font-berghan text-[64px] leading-[1.1em] capitalize text-center text-text-strong max-w-[916px] m-0">
          Valued by Founders &amp; Trusted by Enterprises
        </h2>
        <p className="font-satoshi font-normal text-base text-center text-text-weak m-0">
          Don&apos;t just take our word for it. Here is how our design, strategy, and growth frameworks have transformed businesses globally.
        </p>
      </div>

      {/* Content Row */}
      <div className="w-full flex items-center gap-16">
        {/* Left: Image Collage */}
        <div className="flex flex-row items-end gap-3 flex-1">
          <div className="w-[178px] h-[400px] shrink-0 relative rounded-3xl overflow-hidden">
            <Image
              src="/images/testimonial-1.png"
              alt="Testimonial 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 h-[400px] relative rounded-3xl overflow-hidden">
            <Image
              src="/images/testimonial-2.png"
              alt="Testimonial 2"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 h-[400px] relative rounded-3xl overflow-hidden">
            <Image
              src="/images/testimonial-3.png"
              alt="Testimonial 3"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 h-[800px] relative rounded-3xl overflow-hidden">
            <Image
              src="/images/testimonial-4-123129.png"
              alt="Testimonial 4"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right: Testimonial Content */}
        <div className="w-[596px] shrink-0 flex flex-col gap-[60px]">
          {/* Top Block */}
          <div className="flex flex-col gap-9">
            {/* Author Info */}
            <div className="flex flex-col gap-2 w-[217px]">
              <span className="font-satoshi font-bold text-base text-text-strong">
                Daniel Branson
              </span>
              <span className="font-satoshi font-normal text-sm text-text-weak">
                Chief Product Officer, Pulse Health
              </span>
            </div>

            {/* Review Block */}
            <div className="flex flex-col gap-3">
              {/* Stars */}
              <div className="flex flex-row gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Image
                    key={i}
                    src="/icons/star.svg"
                    alt="Star"
                    width={16}
                    height={16}
                  />
                ))}
              </div>
              {/* Quote */}
              <p className="font-berghan text-[22px] leading-[1.2em] text-text-strong m-0">
                &ldquo;We came to them with a massive, feature-heavy product blueprint and a tight timeline. They completely de-risked our project, stripping away the noise to define a bulletproof MVP. Their strategy didn&apos;t just save us over $120K in development waste; it gave us a scalable foundation that our engineering team executed flawlessly.&rdquo;
              </p>
            </div>
          </div>

          {/* Bottom: Chevron Button */}
          <button className="w-12 h-12 bg-fill-hover border border-brand-strong rounded-full flex items-center justify-center cursor-pointer p-0">
            <Image
              src="/icons/chevron-right.svg"
              alt="Next testimonial"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
