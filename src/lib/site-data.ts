import {
  FileSignature,
  Home,
  ScrollText,
  Map,
  Building2,
  Banknote,
  Hammer,
  Landmark,
  ShieldCheck,
  Users,
  Handshake,
  Layers,
  Award,
  HeartHandshake,
  Scale,
  Ruler,
  SplitSquareHorizontal,
  Building,
  BookMarked,
  TreePine,
  MessageSquare,
  Search,
  FileStack,
  Stamp,
  KeyRound,
  Clock,
  Eye,
  Zap,
  type LucideIcon,
} from "lucide-react";
import depoimentoRoseliVideo from "../assets/01 DEPOIMENTO Dona Roseli.mp4";
import depoimentoArleteVideo from "../assets/arlete.mp4";
import depoimentoIrmaosVideo from "../assets/IRMÃOS.mp4";
import depoimentoRoseliPoster from "../assets/depoimento-roseli-poster.jpg";
import depoimentoArletePoster from "../assets/depoimento-arlete-poster.jpg";
import depoimentoIrmaosPoster from "../assets/depoimento-irmaos-poster.jpg";
import { regularizacaoImage, reurbImage, usucapiaoImage } from "./blog-images";

export const CONTACT = {
  whatsappDisplay: "+55 11 94764-3922",
  whatsappNumber: "5511947643922",
  whatsappUrl:
    "https://wa.me/5511947643922?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20an%C3%A1lise%20do%20meu%20im%C3%B3vel.",
  phone: "+55 11 94764-3922",
  email: "contato@soloregular.com.br",
  address: "São Roque — SP", // TODO: endereço completo
  instagram: "https://www.instagram.com/soloregular/",
  facebook: "https://www.facebook.com/insoloregular/?locale=pt_BR",
  linkedin: "https://www.linkedin.com/in/solo-regular-desenvolvimento-urbano-5483a5420/",
  google: "",
};

export const AREAS = [
  "São Roque",
  "Mairinque",
  "Araçariguama",
  "Alumínio",
  "Ibiúna",
  "Região Metropolitana de Sorocaba",
];

export interface Problem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const PROBLEMS: Problem[] = [
  {
    icon: FileSignature,
    title: "Contrato de gaveta",
    description: "Imóvel comprado sem escritura registrada, sem segurança jurídica para o titular.",
  },
  {
    icon: Home,
    title: "Imóvel herdado",
    description: "Heranças e inventários que travam a transferência e o uso pleno do bem.",
  },
  {
    icon: ScrollText,
    title: "Matrícula irregular",
    description: "Divergências entre a realidade e o que consta no registro de imóveis.",
  },
  {
    icon: Map,
    title: "Loteamento irregular",
    description: "Áreas parceladas sem aprovação ou registro junto aos órgãos competentes.",
  },
  {
    icon: Landmark,
    title: "Problemas com cartório",
    description: "Exigências, pendências e processos parados no registro de imóveis.",
  },
  {
    icon: Banknote,
    title: "Sem possibilidade de financiamento",
    description: "Imóveis que não podem ser financiados por falta de regularização.",
  },
  {
    icon: Hammer,
    title: "Construções a regularizar",
    description: "Edificações sem averbação, habite-se ou aprovação na prefeitura.",
  },
  {
    icon: Building2,
    title: "Processos junto a órgãos públicos",
    description: "Trâmites complexos em prefeituras e cartórios que exigem expertise técnica.",
  },
];

export interface Reason {
  icon: LucideIcon;
  title: string;
}

export const REASONS: Reason[] = [
  { icon: Award, title: "Mais de 15 anos de experiência" },
  { icon: ShieldCheck, title: "Especialistas em REURB" },
  { icon: Landmark, title: "Atuação junto a cartórios e prefeituras" },
  { icon: Layers, title: "Soluções integradas" },
  { icon: Scale, title: "Segurança jurídica" },
  { icon: Users, title: "Equipe multidisciplinar" },
  { icon: HeartHandshake, title: "Atendimento personalizado" },
];

export interface Service {
  slug: string;
  icon: LucideIcon;
  title: string;
  short: string;
  description: string;
}

export const SERVICES: Service[] = [
  {
    slug: "regularizacao-de-imoveis",
    icon: Home,
    title: "Regularização de Imóveis",
    short: "Documentação completa para dar segurança jurídica ao seu bem.",
    description:
      "Análise registral, regularização de matrícula e adequação documental para transformar imóveis irregulares em patrimônios protegidos.",
  },
  {
    slug: "reurb",
    icon: Map,
    title: "REURB",
    short: "Regularização Fundiária Urbana em suas modalidades S e E.",
    description:
      "Condução técnica e jurídica de núcleos urbanos informais, garantindo titulação e cidadania aos ocupantes.",
  },
  {
    slug: "usucapiao-extrajudicial",
    icon: ScrollText,
    title: "Usucapião Extrajudicial",
    short: "Aquisição de propriedade diretamente no cartório, sem ação judicial.",
    description:
      "Procedimento ágil e seguro para reconhecer a propriedade pela posse prolongada, evitando longos processos judiciais.",
  },
  {
    slug: "retificacao-de-area",
    icon: Ruler,
    title: "Retificação de Área",
    short: "Correção de medidas e divisas para alinhar registro e realidade.",
    description:
      "Ajuste das dimensões, confrontações e descrição do imóvel junto ao registro de imóveis, com base em levantamento técnico.",
  },
  {
    slug: "desmembramento",
    icon: SplitSquareHorizontal,
    title: "Desmembramento",
    short: "Divisão de um imóvel em lotes individualizados e registrados.",
    description:
      "Planejamento, aprovação e registro do desmembramento ou desdobro de áreas conforme a legislação municipal.",
  },
  {
    slug: "regularizacao-de-construcoes",
    icon: Building,
    title: "Regularização de Construções",
    short: "Averbação e aprovação de edificações junto à prefeitura.",
    description:
      "Regularização de obras, habite-se e averbação da construção na matrícula, valorizando e legalizando o imóvel.",
  },
  {
    slug: "assessoria-registral",
    icon: BookMarked,
    title: "Assessoria Registral",
    short: "Acompanhamento técnico em todos os trâmites de cartório.",
    description:
      "Suporte especializado para protocolos, cumprimento de exigências e condução de processos junto ao registro de imóveis.",
  },
  {
    slug: "desenvolvimento-urbano",
    icon: TreePine,
    title: "Desenvolvimento Urbano",
    short: "Planejamento e viabilização de projetos urbanísticos.",
    description:
      "Estudos de viabilidade, parcelamento do solo e estruturação de empreendimentos com responsabilidade urbanística.",
  },
];

export interface SuccessCase {
  name: string;
  problem: string;
  solution: string;
  result: string;
}

export const CASES: SuccessCase[] = [
  {
    name: "Vinhedos de São Roque",
    problem: "Loteamento com pendências registrais e divergências de área.",
    solution: "Retificação técnica e integração entre cartório e prefeitura.",
    result: "Lotes individualizados, registrados e aptos a financiamento.",
  },
  {
    name: "Condomínio Araçari",
    problem: "Unidades sem matrícula individual e documentação fragmentada.",
    solution: "Regularização condominial e instituição registral completa.",
    result: "Patrimônio dos moradores valorizado e juridicamente seguro.",
  },
  {
    name: "Pousada dos Bandeirantes",
    problem: "Construções comerciais sem averbação e habite-se.",
    solution: "Regularização de edificações junto à prefeitura e cartório.",
    result: "Empreendimento legalizado e apto para expansão e crédito.",
  },
  {
    name: "Mirante da Serra",
    problem: "Parcelamento de solo em área com restrições urbanísticas.",
    solution: "Estudo de viabilidade e adequação ao desenvolvimento urbano.",
    result: "Projeto aprovado com segurança jurídica e ambiental.",
  },
  {
    name: "Condomínio São José",
    problem: "Contratos de gaveta e ausência de titulação definitiva.",
    solution: "Usucapião extrajudicial e regularização da titularidade.",
    result: "Proprietários com escrituras registradas em seus nomes.",
  },
  {
    name: "Mombaça",
    problem: "Núcleo urbano informal sem reconhecimento legal.",
    solution: "Aplicação da REURB com gestão integrada multidisciplinar.",
    result: "Famílias tituladas e área incorporada à cidade formal.",
  },
];

export interface Faq {
  question: string;
  answer: string;
}

export const FAQS: Faq[] = [
  {
    question: "Meu imóvel pode ser regularizado?",
    answer:
      "Na grande maioria dos casos, sim. Cada situação é única, por isso fazemos uma análise detalhada da documentação e da realidade do imóvel para indicar o melhor caminho — seja REURB, usucapião extrajudicial, retificação ou outra solução.",
  },
  {
    question: "Quanto tempo demora?",
    answer:
      "O prazo varia conforme a complexidade do caso e dos órgãos envolvidos. Procedimentos extrajudiciais costumam ser mais rápidos que ações judiciais. Após a análise inicial, apresentamos uma estimativa realista de prazo.",
  },
  {
    question: "Quanto custa?",
    answer:
      "O investimento depende do tipo de regularização e das particularidades do imóvel. Trabalhamos com transparência: após a análise gratuita, você recebe uma proposta clara, com escopo e valores detalhados.",
  },
  {
    question: "Posso financiar após regularizar?",
    answer:
      "Sim. Um imóvel regularizado e com matrícula correta pode ser dado em garantia e financiado por instituições financeiras, além de valorizar significativamente no mercado.",
  },
  {
    question: "Contrato de gaveta tem validade?",
    answer:
      "O contrato de gaveta tem efeitos entre as partes, mas não garante a propriedade perante terceiros porque não está registrado. A regularização converte essa posse em propriedade segura e oponível a todos.",
  },
  {
    question: "Vale a pena regularizar antes de vender?",
    answer:
      "Com certeza. Imóveis regularizados vendem mais rápido, alcançam melhores preços e permitem ao comprador financiar a aquisição, ampliando o número de interessados.",
  },
];

export interface BlogCategory {
  slug: string;
  name: string;
  description: string;
}

export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    slug: "regularizacao-imobiliaria",
    name: "Regularização Imobiliária",
    description: "Tudo sobre dar segurança jurídica ao seu imóvel.",
  },
  { slug: "reurb", name: "REURB", description: "Regularização Fundiária Urbana na prática." },
  { slug: "usucapiao", name: "Usucapião", description: "Como adquirir propriedade pela posse." },
  {
    slug: "cartorios",
    name: "Cartórios",
    description: "Trâmites e exigências do registro de imóveis.",
  },
  {
    slug: "patrimonio-familiar",
    name: "Patrimônio Familiar",
    description: "Proteja e valorize o patrimônio da família.",
  },
  {
    slug: "desenvolvimento-urbano",
    name: "Desenvolvimento Urbano",
    description: "Planejamento e crescimento das cidades.",
  },
];

export type BlogContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "unorderedList"; items: string[] }
  | { type: "orderedList"; items: string[] }
  | { type: "note"; text: string };

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  excerpt: string;
  date: string;
  readingTime: string;
  image?: string;
  imageAlt?: string;
  content: BlogContentBlock[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "como-regularizar-imovel-contrato-de-gaveta",
    title:
      "Regularização de Imóvel: o guia completo para quem quer vender, financiar ou deixar de herança sem dor de cabeça",
    category: "Regularização Imobiliária",
    categorySlug: "regularizacao-imobiliaria",
    excerpt:
      "Entenda o que é regularização de imóvel, quais documentos reunir e quando o processo deixa de ser opção para virar urgência.",
    date: "2026-05-12",
    readingTime: "8 min",
    image: regularizacaoImage,
    imageAlt: "Planta de terreno e escritura para regularização imobiliária",
    content: [
      {
        type: "paragraph",
        text: "Se você chegou até aqui, provavelmente está enfrentando ou temendo enfrentar um problema comum a milhões de brasileiros: descobrir que o seu imóvel ou o terreno da família não está regularizado. E a boa notícia é que, na grande maioria dos casos, isso tem solução.",
      },
      { type: "heading", text: "O que é, afinal, regularização de imóvel?" },
      {
        type: "paragraph",
        text: "A regularização de imóvel consiste em adequar a situação documental de um bem à legislação vigente, garantindo o registro no nome correto do proprietário na matrícula do Cartório de Registro de Imóveis. Na prática, é alinhar o que foi construído ou reformado com o que está aprovado e registrado, envolvendo projeto aprovado, alvará, habite-se, atualização cadastral e, quando necessário, ajustes na cadeia de proprietários.",
      },
      {
        type: "paragraph",
        text: "Um imóvel irregular pode impedir a venda, a doação, o financiamento bancário e até o inventário. Por isso, regularizar não é burocracia por burocracia: é segurança jurídica para você e para quem vier depois.",
      },
      { type: "heading", text: "As três situações mais comuns e que mais geram dúvida" },
      {
        type: "orderedList",
        items: [
          "Construção no terreno dos pais. Construir no terreno da família é prática comum no Brasil, mas na maioria dos casos o terreno está regularizado em nome dos pais e a construção nunca foi averbada no registro de imóveis. Isso gera problemas na hora de vender, financiar ou dividir a herança. As soluções mais usadas nesse cenário são o desmembramento, a usucapião, a escritura de doação e o contrato de comodato. Cada caso pede uma análise específica.",
          "Compra informal, só com contrato particular. Quando alguém compra um terreno apenas com contrato de gaveta, sem passar no cartório, o comprador não é o dono legal perante o registro. Isso é chamado de cadeia dominial quebrada, e precisa ser regularizada antes de qualquer outra etapa.",
          "Loteamento clandestino. Comum em áreas periféricas, é quando o próprio loteador nunca regularizou o empreendimento junto à prefeitura. Nesse caso, o problema não é individual: é do loteamento inteiro, e costuma exigir regularização fundiária urbana, o famoso REURB, que detalhamos em outro artigo.",
        ],
      },
      {
        type: "heading",
        text: "Por que legalizar imóvel já construído é uma das dúvidas mais buscadas",
      },
      {
        type: "paragraph",
        text: "Muita gente, com o passar dos anos, faz reformas e ampliações sem atualizar o projeto aprovado na prefeitura. O resultado: o imóvel fica irregular e sujeito a multas. Para resolver, normalmente é preciso um projeto técnico de regularização, assinado por engenheiro ou arquiteto, que retrata fielmente a área construída, a divisão dos ambientes e o número de pavimentos.",
      },
      {
        type: "paragraph",
        text: "Esse projeto será analisado pela prefeitura à luz do coeficiente de aproveitamento do terreno, taxa de ocupação, recuos obrigatórios e altura máxima permitida.",
      },
      { type: "heading", text: "Quais documentos você vai precisar" },
      {
        type: "unorderedList",
        items: [
          "Matrícula atualizada do imóvel, emitida no Cartório de Registro de Imóveis, mostrando o proprietário legal, dívidas registradas e o histórico completo de transferências.",
          "Escritura pública, quando houver.",
          "Certidão de Uso do Solo, emitida pela prefeitura, que indica se o terreno pode ser usado para fins residenciais, comerciais ou está em área de proteção ambiental.",
          "Habite-se, em caso de construção.",
          "Planta baixa do imóvel.",
          "IPTU atualizado e certidão negativa de débitos municipais.",
        ],
      },
      { type: "heading", text: "Quando a regularização deixa de ser algum dia e vira urgência" },
      {
        type: "paragraph",
        text: "Na prática, ela se torna inadiável em três momentos: quando você quer vender o imóvel, quando precisa de financiamento bancário, ou quando pretende construir e precisa de alvará. A prefeitura não emite alvará de obra sem matrícula atualizada. Também vale lembrar: se você planeja deixar o imóvel como herança, a irregularidade multiplica custos e prazos no inventário.",
      },
      { type: "heading", text: "O ganho que poucos calculam: valorização" },
      {
        type: "paragraph",
        text: "Estudos de mercado apontam que terrenos e imóveis regularizados podem se valorizar significativamente mais do que aqueles com pendências, além de venderem mais rápido e com muito mais segurança jurídica para as duas partes da negociação.",
      },
      { type: "heading", text: "Não tente pular etapas" },
      {
        type: "paragraph",
        text: "Pular etapas no processo de regularização costuma gerar retrabalho e custos extras. O caminho mais seguro começa sempre pela mesma pergunta: qual é a real situação documental do meu imóvel hoje? A partir dessa resposta é possível montar um plano com etapas, prazos e custos, evitando o erro mais comum, que é protocolar pedidos na prefeitura ou no cartório sem antes conferir a situação real do bem.",
      },
      {
        type: "note",
        text: "Este conteúdo é educativo e não substitui a análise de um especialista em regularização imobiliária, que pode avaliar a documentação específica do seu caso e indicar o caminho mais rápido e seguro.",
      },
    ],
  },
  {
    slug: "o-que-e-reurb-e-quem-tem-direito",
    title:
      "REURB: o que é, quem pode pedir e como transformar um terreno sem escritura em propriedade legal",
    category: "REURB",
    categorySlug: "reurb",
    excerpt:
      "Veja como a Regularização Fundiária Urbana transforma núcleos informais em propriedade legal e quais caminhos existem para pedir.",
    date: "2026-04-28",
    readingTime: "7 min",
    image: reurbImage,
    imageAlt: "Área urbana vista de cima para processo de REURB",
    content: [
      {
        type: "paragraph",
        text: "Mais da metade dos imóveis no Brasil ainda está em situação irregular. Se o seu bairro cresceu antes da organização plena do cadastro urbano municipal, ou se você mora em um loteamento que nunca foi formalizado, existe hoje um caminho legal e muitas vezes gratuito para resolver isso: a REURB.",
      },
      { type: "heading", text: "O que é REURB" },
      {
        type: "paragraph",
        text: "REURB é a sigla para Regularização Fundiária Urbana, criada pela Lei nº 13.465/2017 e regulamentada pelo Decreto nº 9.310/2018. Trata-se do conjunto de medidas jurídicas, urbanísticas, ambientais e sociais destinadas a transformar uma ocupação consolidada ou um núcleo urbano informal em situação jurídica segura, integrando essas áreas ao ordenamento territorial da cidade.",
      },
      {
        type: "paragraph",
        text: "Na prática, a REURB compatibiliza o registro de imóveis com a realidade construída no terreno. O resultado final é um direito real registrado no Cartório de Registro de Imóveis, garantindo segurança jurídica de posse para quem mora no local, muitas vezes por meio da entrega de um título de propriedade.",
      },
      { type: "heading", text: "REURB-S e REURB-E: qual é a diferença" },
      {
        type: "paragraph",
        text: "A lei criou dois caminhos principais:",
      },
      {
        type: "unorderedList",
        items: [
          "REURB-S, Regularização Fundiária de Interesse Social: voltada a famílias de baixa renda. Nessa modalidade, os primeiros atos registrais e certidões costumam ser gratuitos, dado o caráter social do processo.",
          "REURB-E, Regularização Fundiária de Interesse Específico: usada em ocupações que não se enquadram no perfil de baixa renda.",
        ],
      },
      { type: "heading", text: "Quem pode pedir a REURB" },
      {
        type: "paragraph",
        text: "Podem iniciar o procedimento:",
      },
      {
        type: "unorderedList",
        items: [
          "O próprio proprietário do terreno.",
          "Ocupantes há mais de cinco anos.",
          "Associações de moradores e cooperativas habitacionais.",
          "A própria prefeitura, de ofício.",
        ],
      },
      {
        type: "paragraph",
        text: "Quem aprova o pedido, no entanto, é sempre o Município. É ele quem analisa se a área e a ocupação atendem aos requisitos legais.",
      },
      { type: "heading", text: "As fases da REURB, sem enrolação" },
      {
        type: "paragraph",
        text: "O procedimento segue fases previstas na Lei 13.465/2017:",
      },
      {
        type: "orderedList",
        items: [
          "Requerimento, protocolado na prefeitura, em muitos municípios nas subprefeituras ou na Secretaria Municipal responsável, identificando o núcleo urbano informal e os requerentes.",
          "Processamento administrativo, com prazo para manifestação dos titulares de direitos reais sobre o imóvel e dos confrontantes, ou seja, vizinhos.",
          "Elaboração do Projeto de Regularização Fundiária, contendo levantamento planialtimétrico georreferenciado, planta de parcelamento com lotes e vias, e memorial descritivo.",
          "Registro da CRF, Certidão de Regularização Fundiária, e do projeto aprovado no Cartório de Registro de Imóveis.",
        ],
      },
      { type: "heading", text: "Por que isso importa para quem tem terreno irregular" },
      {
        type: "paragraph",
        text: "Quem possui um terreno ou imóvel sem escritura definitiva costuma esbarrar em três problemas práticos: não consegue vender com escritura pública, tem dificuldade para obter financiamento bancário e corre risco de perder o imóvel em disputas judiciais por falta de documentação. A REURB ataca justamente essa raiz: ela integra a ocupação informal ao sistema formal, permitindo que o bem circule normalmente no mercado imobiliário e que o proprietário tenha acesso a crédito.",
      },
      { type: "heading", text: "Prazos e janelas de oportunidade" },
      {
        type: "paragraph",
        text: "É comum que municípios abram e prorroguem prazos especiais para protocolo de pedidos de regularização, muitas vezes chamados de anistias ou programas municipais de regularização fundiária. Ficar atento ao calendário da sua cidade pode significar economia real de tempo e de custos no processo.",
      },
      { type: "heading", text: "REURB ou usucapião?" },
      {
        type: "paragraph",
        text: "É uma dúvida frequente. A REURB é indicada quando o problema é coletivo: um núcleo inteiro, um loteamento ou bairro sem regularização junto à prefeitura. Já a usucapião é o caminho quando a questão é individual: uma pessoa que ocupa um imóvel específico há determinado tempo e quer transformar essa posse em propriedade registrada. Em muitos casos, os dois instrumentos se complementam, e a análise de um especialista é o que define a rota mais rápida para o seu caso.",
      },
      {
        type: "note",
        text: "Este conteúdo é educativo e não substitui a análise de um especialista, que pode avaliar a situação específica do seu núcleo urbano ou terreno e indicar corretamente a modalidade aplicável.",
      },
    ],
  },
  {
    slug: "vantagens-da-usucapiao-extrajudicial",
    title:
      "Usucapião: como transformar posse em propriedade registrada e por que pode ser mais rápido do que você imagina",
    category: "Usucapião",
    categorySlug: "usucapiao",
    excerpt:
      "Entenda os requisitos, modalidades e caminhos da usucapião judicial e extrajudicial para converter posse em propriedade registrada.",
    date: "2026-04-10",
    readingTime: "9 min",
    image: usucapiaoImage,
    imageAlt: "Documentação técnica para usucapião e regularização de posse",
    content: [
      {
        type: "paragraph",
        text: '"Ouvi falar que depois de morar tanto tempo numa casa ela vira sua." A frase é popular, mas a realidade jurídica por trás dela é mais precisa e mais interessante do que parece. Esse instrumento se chama usucapião, e está previsto na Constituição Federal, arts. 183 e 191, e no Código Civil, arts. 1.238 a 1.244.',
      },
      { type: "heading", text: "O que é usucapião, em linguagem simples" },
      {
        type: "paragraph",
        text: "Usucapião é o direito de adquirir a propriedade de um imóvel por meio da posse prolongada, contínua e sem oposição, desde que cumpridos requisitos legais específicos. Se você mora, cuida e age como dono de um imóvel por tempo suficiente, sem contestação do proprietário registral, a lei reconhece que a propriedade é sua, mesmo que o imóvel nunca tenha sido formalmente comprado ou registrado em seu nome.",
      },
      {
        type: "paragraph",
        text: "O prazo de posse varia de 2 a 15 anos, dependendo da modalidade. O processo pode ser conduzido em cartório, na usucapião extrajudicial, ou na Justiça, na usucapião judicial.",
      },
      { type: "heading", text: "Os requisitos que valem para todas as modalidades" },
      {
        type: "paragraph",
        text: "Independentemente do tipo, alguns requisitos são comuns:",
      },
      {
        type: "unorderedList",
        items: [
          "Posse mansa e pacífica, ou seja, sem oposição do proprietário.",
          "Posse ininterrupta, sem interrupções relevantes.",
          "Posse pública, exercida às claras, nunca escondida.",
          "Comportamento de dono, arcando com custos, manutenção e, em geral, tributos como o IPTU.",
          "Cumprimento do prazo legal da modalidade aplicável.",
        ],
      },
      {
        type: "paragraph",
        text: "Um detalhe pouco conhecido: em determinadas situações é possível somar o tempo de posse de quem ocupou o imóvel anteriormente, a chamada acessão de posse, o que pode antecipar o cumprimento do prazo.",
      },
      { type: "heading", text: "Os principais tipos de usucapião" },
      {
        type: "unorderedList",
        items: [
          "Extraordinária: a mais utilizada. Não exige contrato nem boa-fé, apenas tempo de posse, de 15 anos, reduzido para 10 se houver moradia habitual ou obras e serviços de caráter produtivo.",
          "Ordinária: exige justo título e boa-fé, com prazo de 10 anos, podendo cair para 5 anos em caso de aquisição onerosa com moradia ou investimentos relevantes.",
          "Especial urbana: para quem possui, como sua, área urbana de até 250 m², usando-a para moradia própria ou da família, por 5 anos ininterruptos e sem oposição. Atenção: o limite de 250 m² refere-se à área do terreno, não à área construída.",
          "Especial rural: 5 anos de posse ininterrupta, sem oposição, em área rural de até 50 hectares, desde que produtiva e usada como moradia.",
          "Familiar: a mais rápida, com 2 anos, voltada a situações específicas de ex-cônjuge ou ex-companheiro que permanece na posse do imóvel após separação, mas também a de aplicação mais restrita na prática.",
        ],
      },
      { type: "heading", text: "Usucapião extrajudicial: a via mais rápida" },
      {
        type: "paragraph",
        text: "Desde 2016, é possível pedir a usucapião diretamente no Cartório de Registro de Imóveis, sem processo judicial. Essa via costuma levar de 6 meses a 1 ano, contra anos de tramitação na Justiça quando há disputa. O procedimento envolve a notificação do proprietário registral, dos confrontantes, ou seja, vizinhos, e dos entes públicos. Se ninguém se opuser, a usucapião é deferida e o imóvel é registrado no nome do possuidor.",
      },
      {
        type: "paragraph",
        text: "Havendo impugnação fundamentada, o caso pode seguir para a via judicial. Mesmo na via extrajudicial, a presença de advogado é obrigatória, tanto na modalidade judicial quanto na extrajudicial.",
      },
      { type: "heading", text: "Vale para qualquer terreno?" },
      {
        type: "paragraph",
        text: "Não. Se o terreno for particular e cumprir os requisitos de posse e prazo, sim. Mas se for terreno público, da prefeitura, do estado ou da União, a usucapião não se aplica: bens públicos não podem ser usucapidos.",
      },
      { type: "heading", text: "Usucapião entre herdeiros" },
      {
        type: "paragraph",
        text: "É uma situação recorrente: um herdeiro que ocupa e cuida do imóvel de família por longos anos, enquanto o inventário nunca é aberto. Dependendo do tempo de posse e da forma como ela foi exercida, a usucapião pode ser uma alternativa ao inventário tradicional para resolver a titularidade, mas exige avaliação cuidadosa para não gerar conflitos entre os demais herdeiros.",
      },
      { type: "heading", text: "O que muda com a Reforma do Código Civil em análise" },
      {
        type: "paragraph",
        text: "O Congresso Nacional discute mudanças que devem tornar a usucapião extrajudicial ainda mais ágil: o silêncio dos notificados passaria a valer como concordância tácita, os prazos de resposta seriam reduzidos e os cartórios ganhariam mais autonomia para decidir os pedidos sem necessidade de homologação judicial, inclusive com etapas realizadas eletronicamente.",
      },
      { type: "heading", text: "Por onde começar" },
      {
        type: "paragraph",
        text: "Antes de entrar com qualquer pedido, o passo mais importante é reunir a documentação que comprove o tempo e a forma da posse: contas em seu nome, comprovantes de pagamento de IPTU, testemunhas e fotos ao longo dos anos. É esse conjunto de provas que vai indicar qual modalidade se aplica ao seu caso, e se o caminho mais indicado é o cartório ou a Justiça.",
      },
      {
        type: "note",
        text: "Este conteúdo é educativo e não substitui a análise de um advogado especialista, que poderá avaliar os documentos e o histórico de posse do seu caso específico e indicar a modalidade e a via corretas.",
      },
    ],
  },
  {
    slug: "por-que-regularizar-valoriza-patrimonio",
    title: "Por que regularizar o imóvel valoriza o patrimônio da sua família",
    category: "Patrimônio Familiar",
    categorySlug: "patrimonio-familiar",
    excerpt:
      "Regularizar não é apenas resolver papelada: é proteger e multiplicar o valor de um dos maiores bens de uma família.",
    date: "2026-03-22",
    readingTime: "4 min",
    content: [
      {
        type: "paragraph",
        text: "Um imóvel regularizado vale mais. Essa é uma realidade do mercado: a segurança jurídica é um dos principais fatores que influenciam o preço de venda de um bem.",
      },
      {
        type: "paragraph",
        text: "Sem regularização, o imóvel não pode ser financiado, dificultando a venda e reduzindo o número de interessados. Já um imóvel com matrícula correta amplia as possibilidades de negócio.",
      },
      {
        type: "paragraph",
        text: "Além do aspecto financeiro, a regularização protege a família de litígios futuros, facilita inventários e garante que o patrimônio seja transmitido com tranquilidade às próximas gerações.",
      },
      {
        type: "paragraph",
        text: "Na Solo Regular, enxergamos a regularização como um investimento. Transformamos imóveis irregulares em patrimônios seguros, valorizados e juridicamente protegidos.",
      },
    ],
  },
];

/* ---- Como funciona: etapas do processo ---- */
export interface ProcessStep {
  icon: LucideIcon;
  step: string;
  title: string;
  description: string;
}

export const STEPS: ProcessStep[] = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Contato",
    description:
      "Você fala com a gente pelo WhatsApp ou formulário e conta a situação do seu imóvel.",
  },
  {
    icon: Search,
    step: "02",
    title: "Análise",
    description:
      "Fazemos a análise gratuita da documentação e da realidade do imóvel para indicar o melhor caminho.",
  },
  {
    icon: FileStack,
    step: "03",
    title: "Documentação",
    description:
      "Reunimos e produzimos toda a documentação técnica, urbanística e jurídica necessária.",
  },
  {
    icon: Stamp,
    step: "04",
    title: "Regularização",
    description:
      "Conduzimos os trâmites junto a cartórios, prefeituras e órgãos públicos até a aprovação.",
  },
  {
    icon: KeyRound,
    step: "05",
    title: "Entrega",
    description:
      "Você recebe seu imóvel regularizado, com matrícula correta e segurança jurídica definitiva.",
  },
];

/* ---- Diferenciais ---- */
export interface Differential {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const DIFFERENTIALS: Differential[] = [
  {
    icon: HeartHandshake,
    title: "Atendimento humanizado",
    description:
      "Escuta ativa e acompanhamento próximo em cada etapa, com linguagem clara e sem juridiquês.",
  },
  {
    icon: Scale,
    title: "Segurança jurídica",
    description:
      "Soluções que convertem posse em propriedade registrada, oponível a todos e definitiva.",
  },
  {
    icon: Zap,
    title: "Agilidade",
    description:
      "Priorizamos caminhos extrajudiciais e uma gestão única que evita retrabalho e atrasos.",
  },
  {
    icon: Users,
    title: "Equipe técnica",
    description: "Arquitetura, urbanismo, direito e expertise registral integrados em um só time.",
  },
  {
    icon: Eye,
    title: "Transparência",
    description: "Escopo, prazos e valores apresentados de forma clara após a análise gratuita.",
  },
  {
    icon: Clock,
    title: "Acompanhamento completo",
    description:
      "Do primeiro contato à entrega, você sabe exatamente em que etapa o seu processo está.",
  },
];

/* ---- Depoimentos ---- */
export interface Testimonial {
  src: string;
  poster: string;
}

export const TESTIMONIALS: Testimonial[] = [
  { src: depoimentoRoseliVideo, poster: depoimentoRoseliPoster },
  { src: depoimentoArleteVideo, poster: depoimentoArletePoster },
  { src: depoimentoIrmaosVideo, poster: depoimentoIrmaosPoster },
];

/* ---- Linha do tempo da empresa ---- */
export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export const TIMELINE: TimelineItem[] = [
  {
    year: "Origem",
    title: "Nasce no interior de São Paulo",
    description:
      "Da percepção de que regularizar exige integração entre áreas que atuavam de forma separada.",
  },
  {
    year: "+15 anos",
    title: "Experiência em casos complexos",
    description:
      "Documentação antiga, contratos de gaveta, divergências registrais e loteamentos irregulares.",
  },
  {
    year: "Gestão única",
    title: "Equipe multidisciplinar integrada",
    description:
      "Arquitetura, urbanismo, direito e expertise registral sob uma única gestão do início ao fim.",
  },
  {
    year: "Hoje",
    title: "Referência regional",
    description:
      "Atuação consolidada em São Roque, Sorocaba e região, transformando imóveis em patrimônio seguro.",
  },
];
