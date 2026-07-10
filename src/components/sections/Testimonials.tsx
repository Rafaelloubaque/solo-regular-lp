import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/site-data";
import { SectionHeading } from "@/components/SectionHeading";

export function Testimonials() {
  return (
    <section className="bg-sand py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Depoimentos"
          title="Quem regularizou com a Solo Regular"
          description="Histórias de clientes que transformaram documentação travada em patrimônio seguro."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card flex h-full flex-col rounded-3xl p-7"
            >
              <Quote className="size-8 text-primary/30" />
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-foreground/90">
                “{t.quote}”
              </blockquote>
              <div className="mt-6 flex items-center gap-1 text-gold" aria-label="5 de 5 estrelas">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="size-4 fill-current" />
                ))}
              </div>
              <figcaption className="mt-4 border-t border-border pt-4">
                <span className="block font-serif text-base text-deep">{t.name}</span>
                <span className="block text-sm text-muted-foreground">{t.location}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
