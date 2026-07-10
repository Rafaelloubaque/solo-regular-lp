import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CasesGrid } from "@/components/sections/CasesGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactCta } from "@/components/sections/ContactCta";

export const Route = createFileRoute("/casos")({
  head: () => ({
    meta: [
      { title: "Casos de Sucesso — Projetos de Regularização | Solo Regular" },
      {
        name: "description",
        content:
          "Projetos reais de regularização conduzidos pela Solo Regular: loteamentos, condomínios e empreendimentos transformados em patrimônios seguros e valorizados.",
      },
      { property: "og:title", content: "Casos de Sucesso | Solo Regular" },
      {
        property: "og:description",
        content: "Do problema à solução: resultados reais em projetos complexos de regularização.",
      },
      { property: "og:url", content: "/casos" },
    ],
    links: [{ rel: "canonical", href: "/casos" }],
  }),
  component: CasosPage,
});

function CasosPage() {
  return (
    <>
      <PageHero
        eyebrow="Casos reais"
        title="Projetos que viraram patrimônio seguro"
        description="Conheça alguns dos projetos em que conduzimos a regularização até a segurança jurídica definitiva."
        breadcrumb={[{ label: "Início", to: "/" }, { label: "Casos" }]}
      />
      <CasesGrid />
      <Testimonials />
      <ContactCta />
    </>
  );
}
