import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send } from "lucide-react";

const PROPERTY_TYPES = [
  "Casa",
  "Apartamento",
  "Terreno / Lote",
  "Imóvel rural",
  "Imóvel comercial",
  "Loteamento",
  "Outro",
];

export function ContactForm() {
  const [propertyType, setPropertyType] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Versão visual: ainda não envia/armazena dados.
    toast.success("Solicitação recebida!", {
      description: "Em breve um especialista entrará em contato. Você também pode falar agora pelo WhatsApp.",
    });
    e.currentTarget.reset();
    setPropertyType("");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
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
          <Input id="telefone" name="telefone" type="tel" required placeholder="(11) 90000-0000" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="tipo">Tipo de imóvel</Label>
          <Select value={propertyType} onValueChange={setPropertyType}>
            <SelectTrigger id="tipo" className="w-full">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              {PROPERTY_TYPES.map((t) => (
                <SelectItem key={t} value={t}>
                  {t}
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

      <Button type="submit" size="lg" className="w-full">
        <Send className="size-4" />
        Solicitar Análise Gratuita
      </Button>
    </form>
  );
}
