import { motion } from "framer-motion";
import blueprint from "@/assets/blueprint.jpg";

export function Differential() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground lg:py-28">
      <img
        src={blueprint}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-10 mix-blend-luminosity"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 size-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-[120px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground/70">
            Diferencial competitivo
          </p>
          <h2 className="font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
            Onde outros enxergam problemas, nós enxergamos soluções.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/85">
            A Solo Regular atua em casos complexos envolvendo documentação antiga, contratos de
            gaveta, divergências registrais, loteamentos irregulares e processos que exigem
            integração entre cartórios, órgãos públicos e equipes técnicas.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
