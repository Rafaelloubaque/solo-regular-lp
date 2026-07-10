import { motion } from "framer-motion";
import { DIFFERENTIALS } from "@/lib/site-data";
import { SectionHeading } from "@/components/SectionHeading";

export function Differentials() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-28">
      <div className="absolute inset-0 topo-rings opacity-[0.5]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Diferenciais"
          title="Por que confiar na Solo Regular"
          description="Autoridade técnica e atenção humana em cada etapa do processo."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DIFFERENTIALS.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group glass-card h-full rounded-3xl p-7 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/70 text-primary-foreground shadow-lg shadow-primary/20">
                <d.icon className="size-6" />
              </div>
              <h3 className="mt-5 font-serif text-lg text-deep">{d.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
