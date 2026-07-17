import { Link } from "@tanstack/react-router";
import { MapPin, Mail, Phone, Instagram, Facebook, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { CONTACT, AREAS, SERVICES } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="bg-deep text-deep-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <Logo />
              <div className="flex flex-col leading-none">
                <span className="font-serif text-lg font-semibold">Solo Regular</span>
                <span className="text-[0.65rem] uppercase tracking-[0.2em] opacity-70">
                  Desenvolvimento Urbano
                </span>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm opacity-80">
              Transformamos imóveis irregulares em patrimônios seguros, valorizados e juridicamente
              protegidos.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-base font-semibold">Serviços</h3>
            <ul className="mt-4 space-y-2 text-sm opacity-85">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/servicos"
                    className="transition-opacity hover:opacity-100 hover:underline"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-base font-semibold">Áreas atendidas</h3>
            <ul className="mt-4 space-y-2 text-sm opacity-85">
              {AREAS.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-base font-semibold">Contato</h3>
            <ul className="mt-4 space-y-3 text-sm opacity-85">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0" />
                <span>{CONTACT.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 shrink-0" />
                <span>{CONTACT.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 shrink-0" />
                <a href={`mailto:${CONTACT.email}`} className="hover:underline">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="size-4 shrink-0" />
                <a
                  href={CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  WhatsApp {CONTACT.whatsappDisplay}
                </a>
              </li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex size-9 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white/10"
              >
                <Instagram className="size-4" />
              </a>
              {CONTACT.facebook && (
                <a
                  href={CONTACT.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="inline-flex size-9 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white/10"
                >
                  <Facebook className="size-4" />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-6 text-center text-xs opacity-70 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} Solo Regular — Desenvolvimento Urbano. Todos os direitos
            reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link
              to="/privacidade"
              className="transition-opacity hover:opacity-100 hover:underline"
            >
              Política de Privacidade
            </Link>
            <Link
              to="/privacidade"
              className="transition-opacity hover:opacity-100 hover:underline"
            >
              LGPD
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
