import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Início", to: "/" },
  { label: "Serviços", to: "/servicos" },
  { label: "Sobre", to: "/sobre" },
  { label: "Casos", to: "/casos" },
  { label: "Blog", to: "/blog" },
  { label: "Contato", to: "/contato" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-xl shadow-sm"
          : "border-b border-transparent bg-background/40 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Logo />
          <div className="hidden flex-col leading-none sm:flex">
            <span className="font-serif text-lg font-semibold text-deep">Solo Regular</span>
            <span className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
              Desenvolvimento Urbano
            </span>
          </div>
        </div>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden sm:inline-flex">
            <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="size-4" />
              Falar no WhatsApp
            </a>
          </Button>
          <button
            className="inline-flex size-11 items-center justify-center rounded-md text-foreground lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-border/60 bg-background lg:hidden",
          open ? "max-h-[28rem]" : "max-h-0",
          "transition-[max-height] duration-300 ease-out",
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-4">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-3 text-sm font-medium text-foreground/80 hover:bg-muted hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild className="mt-2">
            <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="size-4" />
              Falar no WhatsApp
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
