import React from "react";
import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section className="py-24 bg-primary text-primary-foreground text-center">
      <div className="container px-4">
        <h2 className="text-3xl font-bold mb-4">Pronto para regularizar seu imóvel?</h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Nossa equipe de especialistas está preparada para analisar o seu caso e oferecer a melhor
          solução jurídica para garantir a propriedade do seu imóvel.
        </p>
        <Button size="lg" variant="secondary">
          Fale com um Especialista
        </Button>
      </div>
    </section>
  );
}
