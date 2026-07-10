import { motion } from "framer-motion";
import { STEPS } from "@/lib/site-data";
import { SectionHeading } from "@/components/SectionHeading";

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-[#06171a] py-20 text-white lg:py-28">
      <div className="absolute inset-0 topo-rings opacity-[0.4]" aria-hidden="true" />
      <div
        className="pointer-events-none absolute right-0 top-1/3 size-[28rem] rounded-full bg-primary/20 blur-[120px] animate-aurora"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          invert
          eyebrow="Como funciona"
          title="Um processo claro, do primeiro contato à entrega"
          description="Você acompanha cada etapa e sabe exatamente onde o seu processo está."
        />

        <div className="relative mt-16">
          {/* linha de conexão */}
          <div
            className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-white/25 to-transparent lg:block"
            aria-hidden="true"
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative text-center lg:text-left"
              >
                <div className="mx-auto flex size-18 items-center justify-center rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm lg:mx-0">
                  <s.icon className="size-7 text-gold" />
                </div>
                <span className="mt-4 block font-serif text-sm font-semibold tracking-widest text-primary">
                  {s.step}
                </span>
                <h3 className="mt-1 font-serif text-xl text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
