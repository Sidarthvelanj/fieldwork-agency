import Image from "next/image";
import { projects } from "@/lib/content";
import Reveal from "./Reveal";

export default function Portfolio() {
  return (
    <section
      id="work"
      className="wrap py-20 md:py-28 border-b border-line dark:border-line-dark"
    >
      <Reveal className="flex items-end justify-between mb-12">
        <h2 className="font-display italic text-4xl md:text-5xl">Selected work</h2>
        <p className="label hidden sm:block">{projects.length} projects</p>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <Reveal key={project.id} delayMs={i * 60}>
            <article className="group relative rounded-2xl overflow-hidden border border-line dark:border-line-dark">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={`/images/${project.id}.svg`}
                  alt={`${project.client} — ${project.type}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Contact-sheet overlay, revealed on hover */}
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/60 transition-colors duration-300 flex items-end p-5">
                  <div className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <p className="label text-paper/70">
                      {project.year} · {project.type}
                    </p>
                  </div>
                </div>
                {/* Small orange corner tag, the studio's visual signature carried into the grid */}
                <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-clay opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-4 flex items-center justify-between">
                <h3 className="font-display text-xl">{project.client}</h3>
                <span className="label">{project.year}</span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
