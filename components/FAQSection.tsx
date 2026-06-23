import Image from "next/image";

const column1Questions = [
  "What sets your studio apart from conventional design firms?",
  "How does your studio differentiate itself from a typical design agency?",
  "In what ways is your studio unique compared to traditional design agencies?",
];

const column2Questions = [
  "What are the key differences between your studio and a standard design agency?",
  "How is your studio distinct from a regular design agency?",
  "What makes your studio stand out from traditional design agencies?",
];

const column3Questions = [
  "What unique qualities does your studio offer that traditional design agencies do not?",
  "How does your studio's approach differ from that of a typical design agency?",
  "What innovative aspects does your studio bring compared to conventional design agencies?",
];

function FAQItem({ question }: { question: string }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row gap-4 w-full items-center">
        <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 bg-fill-hover border border-brand-strong">
          <Image
            src="/icons/chevron-right.svg"
            alt="chevron"
            width={12}
            height={12}
          />
        </div>
        <span className="text-base leading-normal flex-1 font-satoshi font-normal text-text-strong">
          {question}
        </span>
      </div>
    </div>
  );
}

function FAQColumn({
  questions,
  withBorder = false,
}: {
  questions: string[];
  withBorder?: boolean;
}) {
  return (
    <div
      className={`flex-1 flex flex-col gap-6 py-9 px-6${
        withBorder ? " border-l border-border-weak" : ""
      }`}
    >
      {questions.map((q, i) => (
        <FAQItem key={i} question={q} />
      ))}
    </div>
  );
}

export default function FAQSection() {
  return (
    <section className="flex flex-col items-center gap-16 w-full py-[100px] px-20">
      {/* Header */}
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-center capitalize max-w-[916px] font-berghan text-[64px] leading-[1.1em] text-text-strong">
          Frequently Asked Questions
        </h2>
        <p className="text-center font-satoshi font-normal text-base text-text-weak">
          Don&apos;t just take our word for it. Here is how our design, strategy,
          and growth frameworks have transformed businesses globally.
        </p>
      </div>

      {/* FAQ Grid */}
      <div className="flex flex-row items-stretch max-w-[1760px] w-full">
        <FAQColumn questions={column1Questions} />
        <FAQColumn questions={column2Questions} withBorder />
        <FAQColumn questions={column3Questions} withBorder />
      </div>
    </section>
  );
}
