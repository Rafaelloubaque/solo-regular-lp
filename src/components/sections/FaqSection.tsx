import { Link } from "@tanstack/react-router";
import { FAQS } from "@/lib/site-data";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection() {
  return (
    <section className="relative overflow-hidden bg-sand py-20 lg:py-28">
      <div className="absolute inset-0 topo-rings opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Perguntas frequentes"
          title="Tire suas dúvidas sobre regularização"
        />
        <div className="glass-card mt-12 rounded-3xl p-2 sm:p-4">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border/70 px-4">
                <AccordionTrigger className="text-left font-serif text-lg text-deep hover:no-underline">
                  {f.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  {f.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">Ainda com dúvidas?</p>
          <Button asChild className="mt-3">
            <Link to="/contato">Solicitar Análise Gratuita</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
