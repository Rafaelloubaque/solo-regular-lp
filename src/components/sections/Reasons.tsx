import { motion } from "framer-motion";
import { REASONS } from "@/lib/site-data";
import { SectionHeading } from "@/components/SectionHeading";
import { Check } from "lucide-react";

export function Reasons() {
  return (
    <section className="relative overflow-hidden bg-deep py-20 text-deep-foreground lg:py-28">
      <div className="absolute inset-0 plan-grid opacity-[0.15]" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-20 bottom-0 size-96 rounded-full bg-primary/20 blur-[110px] animate-aurora"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          invert
          eyebrow="Por que a Solo Regular"
          title="Autoridade, técnica e segurança jurídica em uma só gestão"
          description="Enquanto outros profissionais atuam de forma isolada, integramos as áreas jurídica, urbanística, registral e técnica para entregar uma solução completa."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="glass-dark flex h-full items-center gap-4 rounded-2xl p-5 transition-colors hover:bg-white/10"
            >
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gold/20 text-gold">
                <r.icon className="size-5" />
              </div>
              <div className="flex items-center gap-2">
                <Check className="size-4 shrink-0 text-gold" />
                <span className="font-medium">{r.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
