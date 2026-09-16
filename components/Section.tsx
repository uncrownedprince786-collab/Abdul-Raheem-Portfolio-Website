import { Reveal } from "./motion";

type SectionProps = {
  id: string;
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
};

/**
 * Editorial section scaffold. Large serif display title with a mono index
 * and rule, restrained — never a card, always a spread.
 */
export function Section({ id, index, eyebrow, title, subtitle, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`relative scroll-mt-28 border-t border-line py-16 md:py-24 ${className}`}>
      <span aria-hidden="true" className="section-mark" />
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal className="mb-10 md:mb-14">
          <div className="flex items-baseline gap-3">
            <span aria-hidden="true" className="hud text-acid">
              {index}
            </span>
            <span aria-hidden="true" className="h-0.5 w-8 bg-acid/50" />
            <span className="hud text-ash">{eyebrow}</span>
          </div>

          <h2 className="font-display mt-4 max-w-3xl text-4xl font-light leading-[1.05] tracking-tight text-paper text-balance sm:text-5xl md:text-6xl">
            {title}
          </h2>

          {subtitle && (
            <p className="text-pretty mt-5 max-w-2xl text-sm leading-relaxed text-fawn sm:text-base">
              {subtitle}
            </p>
          )}
        </Reveal>

        {children}
      </div>
    </section>
  );
}