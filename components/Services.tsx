import { Palette, Code2, LayoutGrid, Megaphone } from "lucide-react";
import { services } from "@/lib/content";
import Reveal from "./Reveal";

const icons = { Palette, Code2, LayoutGrid, Megaphone };

export default function Services() {
  return (
    <section
      id="services"
      className="wrap py-20 md:py-28 border-b border-line dark:border-line-dark"
    >
      <Reveal className="flex items-end justify-between mb-12">
        <h2 className="font-display italic text-4xl md:text-5xl">What we do</h2>
        <p className="label hidden sm:block">Four disciplines, one studio</p>
      </Reveal>

      <div className="grid sm:grid-cols-2 gap-px bg-line dark:bg-line-dark border border-line dark:border-line-dark rounded-2xl overflow-hidden">
        {services.map((service, i) => {
          const Icon = icons[service.icon as keyof typeof icons];
          return (
            <Reveal key={service.number} delayMs={i * 75}>
              <div className="bg-paper dark:bg-paper-dark p-8 h-full hover:bg-clay hover:text-paper transition-colors duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <span className="label group-hover:text-paper/70">
                    {service.number}
                  </span>
                  <Icon
                    size={22}
                    strokeWidth={1.5}
                    className="text-clay group-hover:text-paper transition-colors"
                  />
                </div>
                <h3 className="font-display text-2xl mb-3">{service.title}</h3>
                <p className="text-ink/70 dark:text-ink-dark/70 group-hover:text-paper/85 transition-colors">
                  {service.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
