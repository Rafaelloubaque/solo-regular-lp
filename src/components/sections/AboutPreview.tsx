import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import aboutImage from "@/assets/e6532291-9f2c-47be-a8f6-f980443594d9.png";

export function AboutPreview() {
  return (
    <section className="overflow-hidden bg-sand py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          className="mx-auto w-full max-w-xl lg:max-w-none"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative mx-auto">
            <div className="overflow-hidden rounded-3xl border border-border shadow-elegant">
              <img
                src={aboutImage}
                alt="Fachada da Solo Regular"
                width={1546}
                height={1017}
                loading="lazy"
                className="aspect-[16/10] w-full object-cover object-center"
              />
            </div>
            <div className="glass-card absolute -bottom-6 -right-2 hidden animate-float rounded-2xl px-6 py-4 sm:block">
              <p className="font-serif text-3xl font-semibold text-primary">+15</p>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">
                anos de experiência
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Quem somos
          </div>
          <h2 className="font-serif text-3xl leading-tight text-deep sm:text-4xl">
            A Solo Regular não vende documentos. Entrega patrimônio seguro.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Nascida no interior de São Paulo, a Solo Regular reúne arquitetura, urbanismo, direito e
            expertise registral em uma única gestão. Transformamos imóveis irregulares em
            patrimônios valorizados e juridicamente protegidos.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Onde outros enxergam burocracia, nós enxergamos soluções — atuando em casos complexos
            que exigem integração entre cartórios, órgãos públicos e equipes técnicas.
          </p>
          <Button asChild className="mt-8" size="lg" variant="outline">
            <Link to="/sobre">
              Conheça nossa história
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
