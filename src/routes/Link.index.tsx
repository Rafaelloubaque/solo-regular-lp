import { createFileRoute } from "@tanstack/react-router";
import { CONTACT } from "@/lib/site-data";
import {
  ArrowUpRight,
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import logoImage from "@/assets/logo-solo-regular.jpg";

export const Route = createFileRoute("/Link/")({
  head: () => ({
    meta: [
      { title: "Solo Regular | Links oficiais" },
      {
        name: "description",
        content:
          "Acesse os canais oficiais da Solo Regular: WhatsApp, Instagram, Facebook, LinkedIn e site.",
      },
      { property: "og:title", content: "Solo Regular | Links oficiais" },
      {
        property: "og:description",
        content: "Regularização imobiliária, REURB e usucapião em São Roque e região.",
      },
      { property: "og:url", content: "https://soloregular.com.br/Link" },
    ],
    links: [{ rel: "canonical", href: "https://soloregular.com.br/Link" }],
  }),
  component: LinkPage,
});

const primaryLinks = [
  {
    label: "Falar no WhatsApp",
    helper: "Análise inicial gratuita",
    url: CONTACT.whatsappUrl,
    icon: MessageCircle,
  },
  {
    label: "Acessar site oficial",
    helper: "Serviços, casos e conteúdo",
    url: "/",
    icon: Globe,
  },
];

const socialLinks = [
  {
    label: "Instagram",
    url: CONTACT.instagram,
    icon: Instagram,
  },
  {
    label: "Facebook",
    url: CONTACT.facebook,
    icon: Facebook,
  },
  {
    label: "LinkedIn",
    url: CONTACT.linkedin,
    icon: Linkedin,
  },
  {
    label: "E-mail",
    url: `mailto:${CONTACT.email}`,
    icon: Mail,
  },
].filter((link) => Boolean(link.url));

function isExternal(url: string) {
  return url.startsWith("http") || url.startsWith("mailto:");
}

function LinkPage() {
  return (
    <div className="relative min-h-dvh w-full overflow-hidden bg-[#06171a] text-white">
      <div
        className="pointer-events-none absolute inset-0 plan-grid opacity-[0.08]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(65,172,169,0.32),_transparent_34rem),linear-gradient(180deg,_rgba(6,23,26,0.42),_#06171a_82%)]"
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 mx-auto flex min-h-dvh w-full max-w-lg flex-col px-4 py-8 sm:px-6"
      >
        <header className="flex flex-col items-center text-center">
          <a
            href="/"
            aria-label="Ir para o site da Solo Regular"
            className="grid size-24 place-items-center overflow-hidden rounded-full border border-white/12 bg-white shadow-2xl shadow-black/25"
          >
            <img src={logoImage} alt="Solo Regular" className="h-full w-full object-cover" />
          </a>

          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/7 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/75">
            <ShieldCheck className="size-3.5 text-gold" />
            Links oficiais
          </div>

          <h1 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl">
            Solo Regular
          </h1>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/76 sm:text-base">
            Regularização imobiliária, REURB, usucapião e desenvolvimento urbano em São Roque e
            região.
          </p>
        </header>

        <main className="mt-8 flex w-full min-w-0 flex-1 flex-col gap-3">
          {primaryLinks.map((link, index) => {
            const Icon = link.icon;
            const external = isExternal(link.url);

            return (
              <motion.a
                key={link.label}
                href={link.url}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                className="group flex min-h-16 w-full min-w-0 items-center gap-3 rounded-2xl border border-white/12 bg-white/10 p-4 text-left shadow-2xl shadow-black/10 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/14"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                  <Icon className="size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold text-white">{link.label}</span>
                  <span className="mt-0.5 block truncate text-xs text-white/62">{link.helper}</span>
                </span>
                <ArrowUpRight className="size-5 shrink-0 text-white/45 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
              </motion.a>
            );
          })}

          <div className="mt-2 grid w-full min-w-0 grid-cols-2 gap-3">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              const external = isExternal(link.url);

              return (
                <motion.a
                  key={link.label}
                  href={link.url}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.22 + index * 0.04 }}
                  className="flex min-h-14 min-w-0 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.06] px-3 text-sm font-medium text-white/88 backdrop-blur-md transition-colors hover:bg-white/12"
                >
                  <Icon className="size-4 shrink-0 text-gold" />
                  <span className="truncate">{link.label}</span>
                </motion.a>
              );
            })}
          </div>

          <a
            href={`mailto:${CONTACT.email}`}
            className="mt-3 text-center text-xs leading-relaxed text-white/58 transition-colors hover:text-white"
          >
            {CONTACT.email}
          </a>
        </main>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 flex flex-col items-center gap-2 pb-[env(safe-area-inset-bottom)] text-xs text-white/45"
        >
          <span>soloregular.com.br</span>
          <span>&copy; {new Date().getFullYear()} Solo Regular</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
