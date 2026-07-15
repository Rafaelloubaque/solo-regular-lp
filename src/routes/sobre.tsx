import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reasons } from "@/components/sections/Reasons";
import { ContactCta } from "@/components/sections/ContactCta";
import { Reveal } from "@/components/Reveal";
import { Compass, Scale } from "lucide-react";
import { TIMELINE } from "@/lib/site-data";
import adriana from "@/assets/adriana.jpeg";
import ronaldo from "@/assets/ronaldo.jpeg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a Solo Regular — Especialistas em Regularização Fundiária" },
      {
        name: "description",
        content:
          "Conheça a história da Solo Regular e seus sócios Adriana Cruz, Arquiteta e Urbanista, e Ronaldo Xavier Alves, especialista em regularização imobiliária e relacionamento institucional.",
      },
      { property: "og:title", content: "Sobre a Solo Regular" },
      {
        property: "og:description",
        content: "Arquitetura, urbanismo, direito e expertise registral em uma única gestão.",
      },
      { property: "og:url", content: "/sobre" },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
  component: SobrePage,
});

const PARTNERS = [
  {
    name: "Adriana Cruz",
    role: "Arquiteta e Urbanista",
    photo: adriana,
    photoPosition: "center 36%",
    icon: Compass,
    bio: "Responsável pela visão urbanística e técnica dos projetos, Adriana une planejamento, levantamento e adequação às normas para que cada regularização tenha base sólida e definitiva.",
  },
  {
    name: "Ronaldo Xavier Alves",
    role: "Especialista em regularização imobiliária e relacionamento institucional",
    photo: ronaldo,
    photoPosition: "center 28%",
    icon: Scale,
    bio: "À frente do relacionamento com cartórios, prefeituras e órgãos públicos, Ronaldo conduz as tratativas institucionais e garante a fluidez dos processos mais complexos.",
  },
];

function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow="Quem somos"
        title="A Solo Regular não vende documentos. Entrega patrimônio seguro."
        description="Nascida no interior de São Paulo, integramos conhecimento jurídico, urbanístico, registral e técnico para transformar imóveis irregulares em patrimônios valorizados e juridicamente protegidos."
        breadcrumb={[{ label: "Início", to: "/" }, { label: "Sobre" }]}
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                A Solo Regular surgiu da percepção de que a regularização imobiliária exige muito
                mais do que reunir papéis: exige integração entre áreas que, tradicionalmente, atuam
                de forma separada.
              </p>
              <p>
                Enquanto advogados, engenheiros, topógrafos e despachantes costumam trabalhar
                isoladamente, nós entregamos uma{" "}
                <span className="font-medium text-deep">solução completa</span>, com gestão única do
                início ao fim do processo.
              </p>
              <p>
                São mais de 15 anos de experiência aplicados em casos complexos — documentação
                antiga, contratos de gaveta, divergências registrais e loteamentos irregulares —
                sempre com o mesmo objetivo: dar segurança jurídica e valorizar o patrimônio dos
                nossos clientes.
              </p>
            </div>
          </Reveal>

          <div className="mt-14">
            <div className="relative border-l border-border pl-8">
              {TIMELINE.map((t, i) => (
                <Reveal key={t.title} delay={i * 100}>
                  <div className="relative pb-10 last:pb-0">
                    <span className="absolute -left-[2.6rem] flex size-7 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-[0.6rem] font-semibold text-primary">
                      {i + 1}
                    </span>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                      {t.year}
                    </p>
                    <h3 className="mt-1 font-serif text-xl text-deep">{t.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {t.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sand py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Quem conduz
            </p>
            <h2 className="font-serif text-3xl text-deep sm:text-4xl">Sócios fundadores</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {PARTNERS.map((p, i) => (
              <Reveal key={p.name} delay={i * 120}>
                <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm sm:flex-row">
                  <img
                    src={p.photo}
                    alt={`${p.name} — ${p.role}`}
                    width={320}
                    height={400}
                    loading="lazy"
                    style={{ objectPosition: p.photoPosition }}
                    className="h-72 w-full object-cover sm:h-auto sm:w-48"
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <p.icon className="size-5" />
                    </div>
                    <h3 className="mt-4 font-serif text-xl text-deep">{p.name}</h3>
                    <p className="text-sm font-medium text-primary">{p.role}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.bio}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Reasons />
      <ContactCta />
    </>
  );
}
