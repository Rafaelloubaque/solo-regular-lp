import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Differential } from "@/components/sections/Differential";
import { ContactCta } from "@/components/sections/ContactCta";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — Regularização de Imóveis, REURB e Usucapião | Solo Regular" },
      {
        name: "description",
        content:
          "Conheça os serviços da Solo Regular: regularização de imóveis, REURB, usucapião extrajudicial, retificação de área, desmembramento, regularização de construções e desenvolvimento urbano.",
      },
      { property: "og:title", content: "Serviços de Regularização Imobiliária | Solo Regular" },
      {
        property: "og:description",
        content:
          "Soluções completas em regularização fundiária e imobiliária com gestão integrada.",
      },
      { property: "og:url", content: "/servicos" },
    ],
    links: [{ rel: "canonical", href: "/servicos" }],
  }),
  component: ServicosPage,
});

function ServicosPage() {
  return (
    <>
      <PageHero
        eyebrow="Nossos serviços"
        title="Soluções completas em regularização"
        description="Reunimos conhecimento jurídico, urbanístico, registral e técnico em uma única gestão para resolver o seu caso do começo ao fim."
        breadcrumb={[{ label: "Início", to: "/" }, { label: "Serviços" }]}
      />
      <ServicesGrid detailed />
      <Differential />
      <ContactCta />
    </>
  );
}
