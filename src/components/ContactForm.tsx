import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { sendLandingLead } from "@/lib/crm";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SERVICES } from "@/lib/site-data";
import { Send } from "lucide-react";

function maskPhone(value: string) {
  let digits = value.replace(/\D/g, "");
  if (digits.length > 11 && digits.startsWith("55")) digits = digits.slice(2);
  digits = digits.slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function ContactForm() {
  const [service, setService] = useState("");
  const [phone, setPhone] = useState("");
  const [lgpdConsent, setLgpdConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    if (!service) {
      toast.error("Selecione o serviço.");
      return;
    }

    if (!lgpdConsent) {
      toast.error("Aceite a politica de privacidade para enviar.");
      return;
    }

    setIsSubmitting(true);
    try {
      await sendLandingLead({
        name: String(formData.get("nome") || ""),
        city: String(formData.get("cidade") || ""),
        phone: String(formData.get("telefone") || ""),
        email: String(formData.get("email") || ""),
        birthDate: String(formData.get("dataNascimento") || ""),
        service,
        description: String(formData.get("descricao") || ""),
        website: String(formData.get("website") || ""),
        lgpdConsent,
      });

      toast.success("Solicitação recebida!", {
        description:
          "Em breve um especialista entrará em contato. Você também pode falar agora pelo WhatsApp.",
      });
      form.reset();
      setPhone("");
      setService("");
      setLgpdConsent(false);
    } catch {
      toast.error("Nao foi possivel enviar agora.", {
        description: "Tente novamente em alguns instantes ou fale pelo WhatsApp.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="nome">Nome</Label>
          <Input id="nome" name="nome" required placeholder="Seu nome completo" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="cidade">Cidade</Label>
          <Input id="cidade" name="cidade" required placeholder="Sua cidade" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="telefone">Telefone</Label>
          <Input
            id="telefone"
            name="telefone"
            type="tel"
            inputMode="tel"
            required
            value={phone}
            onChange={(event) => setPhone(maskPhone(event.target.value))}
            placeholder="(11) 94764-3922"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" name="email" type="email" placeholder="voce@email.com" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="dataNascimento">Data de nascimento</Label>
          <Input id="dataNascimento" name="dataNascimento" type="date" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="servico">Serviço</Label>
          <Select value={service} onValueChange={setService}>
            <SelectTrigger id="servico" className="w-full">
              <SelectValue placeholder="Selecione o serviço" />
            </SelectTrigger>
            <SelectContent>
              {SERVICES.map((item) => (
                <SelectItem key={item.slug} value={item.title}>
                  {item.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="descricao">Descrição do problema</Label>
        <Textarea
          id="descricao"
          name="descricao"
          rows={4}
          placeholder="Conte-nos sobre a situação do seu imóvel..."
        />
      </div>

      <label className="flex items-start gap-3 rounded-2xl border border-border/70 bg-background/70 p-4 text-sm text-muted-foreground">
        <input
          type="checkbox"
          checked={lgpdConsent}
          onChange={(event) => setLgpdConsent(event.target.checked)}
          className="mt-1 size-4 rounded border-input accent-primary"
        />
        <span>
          Autorizo a Solo Regular a entrar em contato e tratar meus dados conforme a politica de
          privacidade.
        </span>
      </label>

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        <Send className="size-4" />
        {isSubmitting ? "Enviando..." : "Solicitar Análise Gratuita"}
      </Button>
    </form>
  );
}
