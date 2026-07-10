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

export const CONTACT = {
  whatsappDisplay: "(11) 0000-0000",
  whatsappNumber: "5511000000000", // TODO: substituir pelo número oficial
  whatsappUrl:
    "https://wa.me/5511000000000?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20an%C3%A1lise%20do%20meu%20im%C3%B3vel.",
  phone: "(11) 0000-0000",
  email: "contato@sololregular.com.br", // TODO: substituir
  address: "São Roque — SP", // TODO: endereço completo
  instagram: "https://instagram.com/sololregular",
  facebook: "https://facebook.com/sololregular",
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
  { slug: "regularizacao-imobiliaria", name: "Regularização Imobiliária", description: "Tudo sobre dar segurança jurídica ao seu imóvel." },
  { slug: "reurb", name: "REURB", description: "Regularização Fundiária Urbana na prática." },
  { slug: "usucapiao", name: "Usucapião", description: "Como adquirir propriedade pela posse." },
  { slug: "cartorios", name: "Cartórios", description: "Trâmites e exigências do registro de imóveis." },
  { slug: "patrimonio-familiar", name: "Patrimônio Familiar", description: "Proteja e valorize o patrimônio da família." },
  { slug: "desenvolvimento-urbano", name: "Desenvolvimento Urbano", description: "Planejamento e crescimento das cidades." },
];

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  excerpt: string;
  date: string;
  readingTime: string;
  content: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "como-regularizar-imovel-contrato-de-gaveta",
    title: "Como regularizar um imóvel comprado por contrato de gaveta",
    category: "Regularização Imobiliária",
    categorySlug: "regularizacao-imobiliaria",
    excerpt:
      "Entenda os riscos do contrato de gaveta e o passo a passo para transformar essa posse em propriedade registrada e segura.",
    date: "2026-05-12",
    readingTime: "6 min",
    content: [
      "O contrato de gaveta é uma das situações mais comuns no mercado imobiliário brasileiro. Ele acontece quando alguém compra um imóvel, paga por ele, mas a transferência nunca é registrada no cartório de registro de imóveis.",
      "Embora o documento tenha validade entre as partes que assinaram, ele não garante a propriedade perante terceiros. Isso significa que, oficialmente, o imóvel ainda pertence ao vendedor — o que pode gerar problemas em casos de dívidas, herança ou venda para terceiros.",
      "A boa notícia é que existem caminhos legais para regularizar essa situação. Dependendo do histórico do imóvel e do tempo de posse, é possível utilizar a usucapião extrajudicial, a adjudicação compulsória ou a regularização registral direta.",
      "Na Solo Regular, analisamos cada caso de forma individual, integrando conhecimento jurídico, registral e técnico para indicar a solução mais rápida e segura. O primeiro passo é uma análise da documentação do imóvel.",
    ],
  },
  {
    slug: "o-que-e-reurb-e-quem-tem-direito",
    title: "O que é REURB e quem tem direito à regularização fundiária",
    category: "REURB",
    categorySlug: "reurb",
    excerpt:
      "A Regularização Fundiária Urbana (REURB) é o instrumento legal que titula núcleos urbanos informais. Saiba como funciona.",
    date: "2026-04-28",
    readingTime: "7 min",
    content: [
      "A REURB — Regularização Fundiária Urbana — foi instituída pela Lei nº 13.465/2017 e representa um dos mais importantes instrumentos para garantir o direito à moradia e a segurança jurídica de milhões de imóveis no país.",
      "Ela se divide em duas modalidades principais: a REURB-S, voltada a núcleos urbanos informais ocupados por população de baixa renda, e a REURB-E, destinada às demais situações, em que os custos ficam a cargo dos beneficiários.",
      "O processo envolve etapas técnicas, urbanísticas e registrais que precisam ser conduzidas de forma integrada junto à prefeitura e ao cartório de registro de imóveis.",
      "A equipe multidisciplinar da Solo Regular conduz todo o procedimento, desde o levantamento até a titulação final, garantindo que cada família receba seu título de propriedade com total segurança.",
    ],
  },
  {
    slug: "vantagens-da-usucapiao-extrajudicial",
    title: "Usucapião extrajudicial: regularize sua propriedade sem ir à Justiça",
    category: "Usucapião",
    categorySlug: "usucapiao",
    excerpt:
      "A usucapião extrajudicial permite reconhecer a propriedade diretamente no cartório, com mais agilidade e menos burocracia.",
    date: "2026-04-10",
    readingTime: "5 min",
    content: [
      "Por muito tempo, a usucapião só podia ser obtida por meio de uma ação judicial longa e custosa. Desde 2015, com o novo Código de Processo Civil, passou a ser possível realizar a usucapião diretamente no cartório.",
      "A usucapião extrajudicial é mais rápida e previsível, pois dispensa o trâmite judicial, desde que não haja litígio entre as partes envolvidas.",
      "Para iniciar o procedimento são necessários documentos como a ata notarial, planta e memorial descritivo assinados por profissional habilitado, além das certidões pertinentes.",
      "A Solo Regular reúne arquitetura, urbanismo e expertise registral para conduzir todo o processo com segurança, valorizando o patrimônio dos nossos clientes.",
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
      "Um imóvel regularizado vale mais. Essa é uma realidade do mercado: a segurança jurídica é um dos principais fatores que influenciam o preço de venda de um bem.",
      "Sem regularização, o imóvel não pode ser financiado, dificultando a venda e reduzindo o número de interessados. Já um imóvel com matrícula correta amplia as possibilidades de negócio.",
      "Além do aspecto financeiro, a regularização protege a família de litígios futuros, facilita inventários e garante que o patrimônio seja transmitido com tranquilidade às próximas gerações.",
      "Na Solo Regular, enxergamos a regularização como um investimento. Transformamos imóveis irregulares em patrimônios seguros, valorizados e juridicamente protegidos.",
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
    description: "Você fala com a gente pelo WhatsApp ou formulário e conta a situação do seu imóvel.",
  },
  {
    icon: Search,
    step: "02",
    title: "Análise",
    description: "Fazemos a análise gratuita da documentação e da realidade do imóvel para indicar o melhor caminho.",
  },
  {
    icon: FileStack,
    step: "03",
    title: "Documentação",
    description: "Reunimos e produzimos toda a documentação técnica, urbanística e jurídica necessária.",
  },
  {
    icon: Stamp,
    step: "04",
    title: "Regularização",
    description: "Conduzimos os trâmites junto a cartórios, prefeituras e órgãos públicos até a aprovação.",
  },
  {
    icon: KeyRound,
    step: "05",
    title: "Entrega",
    description: "Você recebe seu imóvel regularizado, com matrícula correta e segurança jurídica definitiva.",
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
    description: "Escuta ativa e acompanhamento próximo em cada etapa, com linguagem clara e sem juridiquês.",
  },
  {
    icon: Scale,
    title: "Segurança jurídica",
    description: "Soluções que convertem posse em propriedade registrada, oponível a todos e definitiva.",
  },
  {
    icon: Zap,
    title: "Agilidade",
    description: "Priorizamos caminhos extrajudiciais e uma gestão única que evita retrabalho e atrasos.",
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
    description: "Do primeiro contato à entrega, você sabe exatamente em que etapa o seu processo está.",
  },
];

/* ---- Depoimentos ---- */
export interface Testimonial {
  name: string;
  location: string;
  quote: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Marcelo A.",
    location: "São Roque — SP",
    quote:
      "Comprei meu terreno por contrato de gaveta e vivia com medo de perder tudo. A Solo Regular resolveu e hoje a escritura está no meu nome.",
  },
  {
    name: "Fernanda R.",
    location: "Mairinque — SP",
    quote:
      "O inventário travava a venda da casa da família há anos. Em poucos meses tínhamos a documentação regularizada e pudemos vender.",
  },
  {
    name: "Condomínio Araçari",
    location: "Araçariguama — SP",
    quote:
      "Regularizaram as unidades e instituíram o condomínio. O patrimônio de todos os moradores valorizou e ficou seguro.",
  },
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
    description: "Da percepção de que regularizar exige integração entre áreas que atuavam de forma separada.",
  },
  {
    year: "+15 anos",
    title: "Experiência em casos complexos",
    description: "Documentação antiga, contratos de gaveta, divergências registrais e loteamentos irregulares.",
  },
  {
    year: "Gestão única",
    title: "Equipe multidisciplinar integrada",
    description: "Arquitetura, urbanismo, direito e expertise registral sob uma única gestão do início ao fim.",
  },
  {
    year: "Hoje",
    title: "Referência regional",
    description: "Atuação consolidada em São Roque, Sorocaba e região, transformando imóveis em patrimônio seguro.",
  },
];
