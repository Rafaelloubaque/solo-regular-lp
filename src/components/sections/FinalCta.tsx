import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/site-data";
import heroTopo from "@/assets/hero-topo.jpg";

export function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden bg-[#06171a] py-24 text-white lg:py-32">
      <img
        src={heroTopo}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={1600}
        height={1200}
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#06171a]/85 via-[#06171a]/80 to-[#06171a]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 size-[30rem] -translate-x-1/2 rounded-full bg-primary/25 blur-[130px] animate-aurora"
        aria-hidden="true"
      />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8"
      >
        <h2 className="font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
          Seu imóvel pode valer muito mais regularizado.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/80">
          Fale agora com um especialista e receba a análise gratuita do seu caso. Sem compromisso,
          com total transparência.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="glow-primary">
            <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="size-4" />
              Falar no WhatsApp
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/25 bg-white/5 text-white backdrop-blur-sm hover:bg-white/10 hover:text-white"
          >
            <Link to="/contato">
              Solicitar Análise
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
