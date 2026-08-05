import { Link } from "@tanstack/react-router";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { MessageCircle, ArrowRight, ShieldCheck, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/site-data";
import heroDesktop from "@/assets/2[[ (2).png";
import heroMobile from "@/assets/mobiel.png";

const STATS = [
  { value: "+15", label: "anos de experiência" },
  { value: "6", label: "cidades atendidas" },
  { value: "100%", label: "gestão integrada" },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-8%"]);

  return (
    <section ref={ref} className="relative isolate overflow-hidden bg-[#06171a] text-white">
      {/* Imagem de fundo com parallax */}
      <motion.picture
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-0 -z-10 block h-[118%] w-full opacity-80"
      >
        <source media="(min-width: 768px)" srcSet={heroDesktop} />
        <img
          src={heroMobile}
          alt="Equipe Solo Regular em escritório de arquitetura e regularização imobiliária"
          width={500}
          height={700}
          className="h-full w-full object-cover object-left md:object-center"
        />
      </motion.picture>
      {/* Gradientes / iluminação */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#06171a]/60 via-[#06171a]/70 to-[#06171a]"
        aria-hidden="true"
      />

      <motion.div
        style={{ y: contentY }}
        className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-36"
      >
        <div className="min-w-0 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.08em] text-white/85 backdrop-blur-sm sm:px-4 sm:text-xs sm:tracking-[0.15em]"
          >
            <ShieldCheck className="size-3.5 shrink-0 text-gold" />
            Regularização imobiliária & fundiária
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-full break-words font-serif text-[2.2rem] leading-[1.05] text-white min-[390px]:text-[2.35rem] sm:text-5xl lg:text-6xl"
          >
            Regularize seu imóvel.
            <span className="mt-1 block max-w-[12ch] bg-gradient-to-r from-primary via-teal-300 to-gold bg-clip-text text-transparent sm:max-w-none">
              Valorize seu patrimônio.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
          >
            Especialistas em Regularização Fundiária, REURB, Usucapião Extrajudicial e
            Desenvolvimento Urbano. Resolvemos casos complexos de documentação de forma simples e
            segura.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button asChild size="lg" className="glow-primary w-full justify-center sm:w-auto">
              <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" />
                Falar no WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full justify-center border-white/25 bg-white/5 text-white backdrop-blur-sm hover:bg-white/10 hover:text-white sm:w-auto"
            >
              <Link to="/contato">
                Solicitar Análise
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 grid w-full max-w-xl grid-cols-3 gap-2 sm:gap-4"
          >
            {STATS.map((s) => (
              <div
                key={s.label}
                className="glass-dark min-w-0 rounded-xl px-2 py-3 text-center sm:rounded-2xl sm:px-4 sm:py-4"
              >
                <p className="font-serif text-xl font-semibold text-white sm:text-3xl">{s.value}</p>
                <p className="mt-1 text-[0.7rem] leading-tight text-white/65">{s.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.42 }}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/70"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-4 text-gold" /> São Roque e região
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Sparkles className="size-4 text-gold" /> Análise inicial gratuita
            </span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
