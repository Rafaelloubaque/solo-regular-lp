import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CONTACT } from "@/lib/site-data";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade e LGPD | Solo Regular" },
      {
        name: "description",
        content:
          "Saiba como a Solo Regular coleta, utiliza e protege os seus dados pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD).",
      },
      { property: "og:title", content: "Política de Privacidade e LGPD | Solo Regular" },
      {
        property: "og:description",
        content: "Como tratamos e protegemos os seus dados pessoais.",
      },
      { property: "og:url", content: "/privacidade" },
      { name: "robots", content: "index,follow" },
    ],
    links: [{ rel: "canonical", href: "/privacidade" }],
  }),
  component: PrivacidadePage,
});

const SECTIONS: { title: string; body: string[] }[] = [
  {
    title: "1. Quem somos",
    body: [
      "Esta página é mantida pela Solo Regular — Desenvolvimento Urbano para explicar como tratamos os dados pessoais de quem entra em contato conosco por este site.",
    ],
  },
  {
    title: "2. Quais dados coletamos",
    body: [
      "Coletamos apenas os dados que você nos fornece voluntariamente ao preencher o formulário de contato ou ao nos chamar pelo WhatsApp, como nome, cidade, telefone, tipo de imóvel e a descrição da sua situação.",
      "Não coletamos dados sensíveis e não realizamos venda de dados a terceiros.",
    ],
  },
  {
    title: "3. Como utilizamos seus dados",
    body: [
      "Utilizamos suas informações exclusivamente para entrar em contato, entender o seu caso, elaborar a análise gratuita e prestar os serviços de regularização solicitados.",
    ],
  },
  {
    title: "4. Base legal (LGPD)",
    body: [
      "O tratamento é realizado com base no seu consentimento e na execução de medidas preliminares e contratuais, conforme a Lei nº 13.709/2018 (Lei Geral de Proteção de Dados — LGPD).",
    ],
  },
  {
    title: "5. Compartilhamento",
    body: [
      "Quando necessário à prestação do serviço, seus dados podem ser compartilhados com cartórios, prefeituras e órgãos públicos envolvidos no processo de regularização, sempre no limite estritamente necessário.",
    ],
  },
  {
    title: "6. Seus direitos",
    body: [
      "Você pode, a qualquer momento, solicitar a confirmação, o acesso, a correção ou a exclusão dos seus dados pessoais, bem como revogar o consentimento concedido.",
    ],
  },
  {
    title: "7. Contato do encarregado",
    body: [
      "Para exercer seus direitos ou esclarecer dúvidas sobre esta política, fale com a Solo Regular pelos canais oficiais informados no site.",
    ],
  },
];

function PrivacidadePage() {
  return (
    <>
      <PageHero
        eyebrow="Privacidade & LGPD"
        title="Política de Privacidade"
        description="Transparência sobre como coletamos, utilizamos e protegemos os seus dados pessoais."
        breadcrumb={[{ label: "Início", to: "/" }, { label: "Privacidade" }]}
      />
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {SECTIONS.map((s) => (
              <div key={s.title}>
                <h2 className="font-serif text-xl text-deep">{s.title}</h2>
                <div className="mt-3 space-y-3 text-base leading-relaxed text-muted-foreground">
                  {s.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-border bg-sand p-6">
            <h2 className="font-serif text-lg text-deep">Canais de contato</h2>
            <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
              <li>E-mail: {CONTACT.email}</li>
              <li>Telefone: {CONTACT.phone}</li>
              <li>Atendimento: {CONTACT.address}</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
