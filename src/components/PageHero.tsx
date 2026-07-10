import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import heroTopo from "@/assets/hero-topo.jpg";

interface Crumb {
  label: string;
  to?: string;
}

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  breadcrumb?: Crumb[];
}

export function PageHero({ eyebrow, title, description, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#06171a] text-white">
      <img
        src={heroTopo}
        alt=""
        aria-hidden="true"
        width={1600}
        height={1200}
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#06171a]/80 via-[#06171a]/85 to-[#06171a]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-24 top-0 -z-10 size-96 rounded-full bg-primary/25 blur-[120px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:py-24 lg:px-8">
        {breadcrumb && (
          <nav aria-label="Breadcrumb" className="mb-5 flex justify-center">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/60">
              {breadcrumb.map((c, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  {c.to ? (
                    <Link to={c.to} className="transition-colors hover:text-white">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-white/85">{c.label}</span>
                  )}
                  {i < breadcrumb.length - 1 && <ChevronRight className="size-3" />}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            {eyebrow}
          </p>
        )}
        <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl">{title}</h1>
        {description && (
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
