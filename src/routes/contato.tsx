import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { ContactCta } from "@/components/sections/ContactCta";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Solicite uma Análise Gratuita | Solo Regular" },
      {
        name: "description",
        content:
          "Fale com a Solo Regular pelo WhatsApp ou solicite a análise gratuita do seu imóvel. Atendemos São Roque, Mairinque, Araçariguama, Alumínio, Ibiúna e a Região Metropolitana de Sorocaba.",
      },
      { property: "og:title", content: "Contato | Solo Regular" },
      {
        property: "og:description",
        content: "Solicite a análise gratuita do seu imóvel e regularize seu patrimônio.",
      },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Vamos regularizar o seu imóvel?"
        description="Conte sua situação e nossa equipe indicará o melhor caminho para dar segurança e valor ao seu patrimônio."
        breadcrumb={[{ label: "Início", to: "/" }, { label: "Contato" }]}
      />
      <ContactCta />
    </>
  );
}
