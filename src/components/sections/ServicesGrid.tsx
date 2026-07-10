import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SERVICES, CONTACT } from "@/lib/site-data";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowUpRight, MessageCircle } from "lucide-react";

export function ServicesGrid({ detailed = false }: { detailed?: boolean }) {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Nossos serviços"
          title="Soluções completas em regularização"
          description="Cada serviço reúne conhecimento jurídico, urbanístico, registral e técnico para resolver o seu caso do começo ao fim."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-elegant"
            >
              <div
                className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-primary/5 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              />
              <div className="relative flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary transition-colors group-hover:from-primary group-hover:to-primary/80 group-hover:text-primary-foreground">
                <s.icon className="size-6" />
              </div>
              <h3 className="relative mt-5 font-serif text-lg text-deep">{s.title}</h3>
              <p className="relative mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {detailed ? s.description : s.short}
              </p>
              {detailed && (
                <a
                  href={CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                  <MessageCircle className="size-4" />
                  Solicitar este serviço
                </a>
              )}
            </motion.div>
          ))}
        </div>
        {!detailed && (
          <div className="mt-10 text-center">
            <Link
              to="/servicos"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            >
              Ver todos os serviços em detalhe
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
