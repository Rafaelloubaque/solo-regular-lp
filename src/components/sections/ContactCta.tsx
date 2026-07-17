import { MessageCircle, MapPin, Phone, Mail } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { CONTACT, AREAS } from "@/lib/site-data";

export function ContactCta() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-deep py-20 text-deep-foreground lg:py-28"
    >
      <div className="absolute inset-0 plan-grid opacity-[0.12]" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-24 top-1/4 size-96 rounded-full bg-primary/20 blur-[120px] animate-aurora"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Fale com a Solo Regular
          </div>
          <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
            Solicite a análise gratuita do seu imóvel
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-deep-foreground/80">
            Conte sua situação e nossa equipe multidisciplinar indicará o melhor caminho para
            regularizar e valorizar o seu patrimônio.
          </p>

          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glow-primary mt-8 inline-flex items-center gap-3 rounded-2xl bg-primary px-6 py-4 text-primary-foreground transition-transform hover:scale-[1.02]"
          >
            <MessageCircle className="size-6" />
            <span>
              <span className="block text-xs uppercase tracking-wide opacity-80">
                WhatsApp direto
              </span>
              <span className="block text-lg font-semibold">{CONTACT.whatsappDisplay}</span>
            </span>
          </a>

          <ul className="mt-8 space-y-3 text-sm text-deep-foreground/85">
            <li className="flex items-center gap-2">
              <MapPin className="size-4 shrink-0 text-gold" /> {CONTACT.address}
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 shrink-0 text-gold" /> {CONTACT.phone}
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 shrink-0 text-gold" /> {CONTACT.email}
            </li>
          </ul>

          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-deep-foreground/60">
              Áreas atendidas
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {AREAS.map((a) => (
                <span
                  key={a}
                  className="rounded-full border border-white/15 px-3 py-1 text-xs text-deep-foreground/80"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-card p-6 text-card-foreground shadow-2xl sm:p-8">
          <h3 className="font-serif text-xl text-deep">Solicitar Análise Gratuita</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Preencha os dados abaixo e retornaremos o contato.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
