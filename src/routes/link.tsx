import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { CONTACT } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Linkedin, Globe, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import logoImage from "@/assets/logo-solo-regular.jpg";

export const Route = createFileRoute("/link")({
  component: LinkPage,
});

function LinkPage() {
  const links = [
    {
      label: "WhatsApp",
      url: CONTACT.whatsappUrl,
      icon: MessageCircle,
      primary: true,
    },
    {
      label: "Site",
      url: "/",
      icon: Globe,
    },
    {
      label: "Instagram",
      url: CONTACT.instagram,
      icon: Instagram,
    },
    {
      label: "Facebook",
      url: CONTACT.facebook || "#",
      icon: Facebook,
    },
    {
      label: "LinkedIn",
      url: CONTACT.linkedin || "#",
      icon: Linkedin,
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-[0.03] plan-grid pointer-events-none" />
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/10 blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="z-10 w-full max-w-md mx-auto flex flex-col items-center"
      >
        <Link to="/" className="mb-8">
          <img
            src={logoImage}
            alt="Solo Regular"
            className="w-32 h-auto mix-blend-multiply rounded-[333px]"
          />
        </Link>

        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold font-serif mb-2 text-foreground">Solo Regular</h1>
          <p className="text-muted-foreground">Regularização Imobiliária Descomplicada</p>
        </div>

        <div className="w-full flex flex-col gap-4">
          {links.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.url}
                target={link.url.startsWith("http") ? "_blank" : undefined}
                rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                className={`flex items-center justify-center gap-3 w-full p-4 rounded-lg font-medium transition-all duration-200 border shadow-sm hover:shadow-md hover:-translate-y-0.5 ${
                  link.primary
                    ? "bg-primary text-primary-foreground border-primary hover:bg-primary/90"
                    : "bg-card text-card-foreground border-border hover:bg-muted"
                }`}
              >
                <Icon className="w-5 h-5" />
                {link.label}
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-sm text-muted-foreground flex flex-col items-center gap-2"
        >
          <img
            src={logoImage}
            alt="Solo Regular"
            className="w-16 h-auto grayscale opacity-50 mix-blend-multiply rounded-[333px]"
          />
          <span>&copy; {new Date().getFullYear()} Solo Regular</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
