import { motion } from "framer-motion";
import { CASES } from "@/lib/site-data";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function CasesGrid() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Casos reais"
          title="Antes e depois: resultados que viram patrimônio"
          description="Do problema à solução, conduzimos cada projeto até a segurança jurídica definitiva."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CASES.map((c, i) => (
            <motion.article
              key={c.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-elegant"
            >
              <div className="relative overflow-hidden bg-[#06171a] px-6 py-6">
                <div className="absolute inset-0 topo-rings opacity-30" aria-hidden="true" />
                <h3 className="relative font-serif text-xl text-white">{c.name}</h3>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="grid grid-cols-[1fr_auto_1fr] items-stretch gap-3">
                  <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-4">
                    <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-destructive/80">
                      Antes
                    </p>
                    <p className="mt-1 text-sm leading-snug text-foreground/90">{c.problem}</p>
                  </div>
                  <div className="flex items-center justify-center text-primary">
                    <ArrowRight className="size-5" />
                  </div>
                  <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4">
                    <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-primary">
                      Depois
                    </p>
                    <p className="mt-1 text-sm leading-snug text-foreground/90">{c.result}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-start gap-2 border-t border-border pt-4">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-gold" />
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-deep">Solução: </span>
                    {c.solution}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
