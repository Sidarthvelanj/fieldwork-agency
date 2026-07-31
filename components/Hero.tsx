export default function Hero() {
  const capabilities = [
    "Brand",
    "Web",
    "Product",
    "Motion",
    "Strategy",
    "Brand",
    "Web",
    "Product",
    "Motion",
    "Strategy",
  ];

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-line dark:border-line-dark"
    >
      {/* Signature texture: faint orange registration-mark grid, referencing print production craft */}
      <div
        className="reg-marks absolute inset-0 pointer-events-none"
        aria-hidden="true"
      />

      <div className="wrap relative pt-20 pb-16 md:pt-32 md:pb-24">
        <p className="label mb-6 text-clay">Design & Development Studio — Est. 2019</p>

        <h1 className="font-display italic text-[13vw] leading-[0.95] md:text-[7rem] tracking-tight max-w-4xl">
          Design that does the work.
        </h1>

        <p className="mt-8 max-w-lg text-lg text-ink/70 dark:text-ink-dark/70">
          We build brand identities, products, and websites for companies
          that need their work to hold up under scrutiny — not just look
          good in a pitch.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="label bg-clay text-paper px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="label border border-ink dark:border-ink-dark px-6 py-3 rounded-full hover:border-clay hover:text-clay transition-colors"
          >
            Start a Project
          </a>
        </div>
      </div>

      {/* Marquee strip of capabilities — the studio's own colophon, in the accent color */}
      <div className="border-t border-line dark:border-line-dark overflow-hidden whitespace-nowrap py-3">
        <div className="inline-block animate-marquee motion-reduce:animate-none">
          {capabilities.concat(capabilities).map((c, i) => (
            <span key={i} className="label mx-6 inline-block text-clay">
              {c} —
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
