import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { Problems } from "@/components/sections/Problems";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Differentials } from "@/components/sections/Differentials";
import { Differential } from "@/components/sections/Differential";
import { CasesGrid } from "@/components/sections/CasesGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { FaqSection } from "@/components/sections/FaqSection";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { FinalCta } from "@/components/sections/FinalCta";
import { ContactCta } from "@/components/sections/ContactCta";
import { FAQS } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Solo Regular — Regularização Fundiária, REURB e Usucapião em São Roque" },
      {
        name: "description",
        content:
          "Especialistas em regularização de imóveis, regularização fundiária, REURB, usucapião extrajudicial e desenvolvimento urbano em São Roque e região. Regularize seu imóvel e valorize seu patrimônio.",
      },
      { property: "og:title", content: "Solo Regular — Regularize seu imóvel. Valorize seu patrimônio." },
      {
        property: "og:description",
        content:
          "Especialistas em regularização fundiária, REURB, usucapião extrajudicial e desenvolvimento urbano no interior de São Paulo.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <Problems />
      <HowItWorks />
      <ServicesGrid />
      <Differentials />
      <Differential />
      <CasesGrid />
      <Testimonials />
      <FaqSection />
      <BlogPreview />
      <FinalCta />
      <ContactCta />
    </>
  );
}
