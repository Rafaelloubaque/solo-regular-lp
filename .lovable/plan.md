# Solo Regular — Website Institucional Premium

Site institucional sofisticado para a Solo Regular, posicionando-a como referência em regularização imobiliária no interior de São Paulo. Construído em TanStack Start (SSR + SEO), com identidade visual derivada do logo (verde-petróleo/teal).

## Identidade Visual

**Paleta (extraída do logo):**

- Verde-petróleo (primária): `oklch(0.52 0.08 195)` ≈ `#1B8E8E` — autoridade, solidez
- Verde-petróleo profundo (texto/headers): `#0F4F50`
- Off-white / areia (fundos): `#F7F5F0` — sensação patrimônio/elegância
- Grafite (texto): `#1C2326`
- Dourado discreto (acento premium pontual): `#C2A24A`
- Tudo via tokens semânticos em `src/styles.css` (Tailwind v4 `@theme inline`), sem cores hardcoded.

**Tipografia:** títulos em serifada moderna refinada (Fraunces ou similar) para transmitir autoridade/patrimônio; corpo em sans-serif limpa (Inter/Manrope). Carregadas via `<link>` no `__root.tsx`.

**Elementos de design:** linhas finas geométricas inspiradas em plantas urbanísticas/loteamentos (grid sutil, contornos de quadras), ícones minimalistas (lucide), microanimações suaves (fade/slide on-scroll), uso generoso de espaço em branco, hierarquia forte.

## Imagens

- Logo e fotos dos sócios (Adriana Cruz e Ronaldo Xavier) hospedados via Lovable Assets a partir dos uploads.
- Imagem aérea urbana enviada usada como apoio na Hero/Sobre.
- Imagens geradas adicionais quando necessário (ex.: textura de planta urbanística para hero/cards).

## Estrutura de Rotas (SSR + SEO por página)

```
/            Home (todas as seções abaixo)
/servicos    Serviços detalhados
/sobre       Sobre + sócios
/casos       Casos de sucesso
/blog        Vitrine + categorias
/blog/$slug  Artigos de exemplo
/contato     Formulário + WhatsApp + áreas
```

A Home concentra todas as seções pedidas; páginas dedicadas aprofundam Serviços, Sobre, Casos, Blog e Contato (cada uma com `head()` próprio: title, description, og:tags).

## Home — Seções

1. **Header fixo** — logo, navegação, CTA "Falar com Especialista" (WhatsApp).
2. **Hero** — Título "Regularize seu imóvel. Valorize seu patrimônio." + subtítulo, dois CTAs (Solicitar Análise / Falar com Especialista), imagem profissional dos sócios + grafismo de planta urbanística.
3. **Problemas que resolvemos** — 8 cards ilustrados (contrato de gaveta, imóvel herdado, matrícula irregular, loteamento irregular, problemas com cartório, sem financiamento, regularização de construções, processos com órgãos públicos).
4. **Por que escolher** — 7 diferenciais com ícones (15+ anos, REURB, cartórios/prefeituras, soluções integradas, segurança jurídica, equipe multidisciplinar, atendimento personalizado).
5. **Serviços** — 8 cards premium (Regularização de Imóveis, REURB, Usucapião Extrajudicial, Retificação de Área, Desmembramento, Regularização de Construções, Assessoria Registral, Desenvolvimento Urbano) → linka para /servicos.
6. **Sobre** — história + sócios com fotos → /sobre.
7. **Casos de Sucesso** — formato Problema → Solução → Resultado para 6 projetos (Vinhedos de São Roque, Condomínio Araçari, Pousada dos Bandeirantes, Mirante da Serra, Condomínio São José, Mombaça).
8. **Diferencial Competitivo** — headline "Onde outros enxergam problemas, nós enxergamos soluções." + texto.
9. **FAQ** — accordion com as 6 perguntas (com schema FAQPage JSON-LD).
10. **Blog** — vitrine de categorias e cards.
11. **Contato/CTA** — WhatsApp em destaque + formulário (Nome, Cidade, Telefone, Tipo de imóvel, Descrição) → botão "Solicitar Análise Gratuita".
12. **Rodapé** — endereço, redes, contato, áreas atendidas (São Roque, Mairinque, Araçariguama, Alumínio, Ibiúna, Região Metropolitana de Sorocaba).

## Formulário (conforme escolhido: visual por enquanto)

- Layout estratégico completo e validado (estado local), mas **sem envio/armazenamento**. Botão de submit mostra mensagem de sucesso (toast). WhatsApp permanece como canal real de conversão em destaque. Fácil de conectar a backend depois.

## Blog (conforme escolhido: artigos de exemplo estáticos)

- 6 categorias (Regularização Imobiliária, REURB, Usucapião, Cartórios, Patrimônio Familiar, Desenvolvimento Urbano).
- 3–4 artigos de exemplo já redigidos, otimizados para SEO, em dados estáticos, renderizados em `/blog/$slug` com Article JSON-LD. Editáveis manualmente.

## SEO

- `head()` por rota com keywords-alvo (regularização de imóveis, regularização fundiária, REURB, usucapião extrajudicial, regularização imobiliária São Roque, regularização de loteamentos, desenvolvimento urbano).
- H1 único por página, HTML semântico, alt text, JSON-LD (Organization no root, FAQPage na home, Article no blog, LocalBusiness com áreas atendidas), `sitemap.xml` e `robots.txt`.

## Detalhes Técnicos

- Componentes pequenos e reutilizáveis em `src/components/` (Header, Footer, Hero, seções, cards, FAQ).
- Tokens de design e fontes configurados em `src/styles.css`; fontes via `<link>` no `__root.tsx`.
- shadcn/ui para accordion (FAQ), form inputs, button, cards.
- Microanimações com utilitários CSS / Motion leve.
- Sem backend nesta versão; dados de contato com placeholders claros (WhatsApp/e-mail/endereço) para você substituir, já que não foram informados.

## Observação

Dados oficiais de contato não foram fornecidos — usarei placeholders evidentes (ex.: `(11) 0000-0000`, `contato@sololregular.com.br`, endereço em São Roque/SP) que você poderá trocar depois.
