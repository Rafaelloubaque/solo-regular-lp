import { motion } from "framer-motion";
import { PROBLEMS } from "@/lib/site-data";
import { SectionHeading } from "@/components/SectionHeading";

export function Problems() {
  return (
    <section className="relative overflow-hidden bg-sand py-20 lg:py-28">
      <div className="absolute inset-0 topo-rings opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Problemas que resolvemos"
          title="Seu imóvel tem alguma dessas pendências?"
          description="Atuamos exatamente onde a documentação trava o uso, a venda e a valorização do seu patrimônio."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEMS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="group glass-card h-full rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1.5"
            >
              <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <p.icon className="size-6" />
              </div>
              <h3 className="mt-5 font-serif text-lg text-deep">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
