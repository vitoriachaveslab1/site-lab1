// FOOTER
export const footerlabels: { label: string; href: string }[] = [
  { label: "Termos de uso", href: "#" },
  { label: "Política de privacidade", href: "#" },
  { label: "Avisos legais", href: "#" },
  { label: "Últimas notícias", href: "#" },
];

// BENEFÍCIOS
export const pricedeta: {
  title: string;
  short: string;
  icon: JSX.Element;
  background: string;
  description: string;
  mark: string;
  width: number;
  height: number;
  padding: string;
}[] = [
  {
    title: "Mais economia",
    short: "",
    icon: <img src="/images/beneficios/icon-melhoria_1.svg" alt="Ícone" width={40} height={40} />,
    background: "bg-warning bg-opacity-0",
    description: "Reduza custos de gestão em todas as áreas, do financeiro ao RH.",
    mark: "",
    width: 50,
    height: 5,
    padding: "px-4 py-4",
  },
  {
    title: "Controle total",
    short: "",
    icon: <img src="/images/beneficios/icon-melhoria_2.svg" alt="Ícone" width={40} height={40} />,
    background: "bg-warning bg-opacity-0",
    description: "Visão clara e integrada de toda a empresa, com acesso rápido às informações.",
    mark: "",
    width: 50,
    height: 5,
    padding: "px-4 py-4",
  },
  {
    title: "Crescimento ágil",
    short: "",
    icon: <img src="/images/beneficios/icon-melhoria_3.svg" alt="Ícone" width={40} height={40} />,
    background: "bg-warning bg-opacity-0",
    description: "Insights precisos e interface simples para atingir metas e expandir negócios.",
    mark: "",
    width: 50,
    height: 5,
    padding: "px-4 py-4",
  },
  {
    title: "Eficiência operacional",
    short: "",
    icon: <img src="/images/beneficios/icon-melhoria_4.svg" alt="Ícone" width={40} height={40} />,
    background: "bg-warning bg-opacity-0",
    description: "Reduza retrabalho, elimine tarefas manuais e ganhe mais tempo no dia a dia.",
    mark: "",
    width: 50,
    height: 5,
    padding: "px-4 py-4",
  },
  {
    title: "Soluções sob medida",
    short: "",
     icon: <img src="/images/beneficios/icon-melhoria_5.svg" alt="Ícone" width={40} height={40} />,
    background: "bg-warning bg-opacity-0",
    description: "Add‑Ons personalizados e flexíveis para as necessidades reais do seu negócio.",
    mark: "",
    width: 50,
    height: 5,
    padding: "px-4 py-4",
  },
  {
    title: "Acompanhamento contínuo",
    short: "",
    icon: <img src="/images/beneficios/icon-melhoria_6.svg" alt="Ícone" width={40} height={40} />,
    background: "bg-warning bg-opacity-0",
    description: "Suporte especializado durante e após a implantação, com foco em evolução constante.",
    mark: "",
    width: 50,
    height: 5,
    padding: "px-4 py-4",
  },
];

// ADD-ONS
export const portfolioData: { image: string; title: string; description: string }[] = [
  {
    image: "/images/portfolio/icon-aprovações.svg",
    title: "LA Aprovações",
    description: "Fluxos automatizados de aprovação de crédito, compras e liberações.",
  },
  {
    image: "/images/portfolio/icon-estoque.svg",
    title: "LA Estoque",
    description: "Controle avançado de lotes, validade, localização e inventário.",
  },
  {
    image: "/images/portfolio/icon-mobileapp.svg",
    title: "LA Cobrança",
    description: "Emissão de boletos, avisos de vencimento e alertas por e‑mail ou WhatsApp.",
  },
];

// CONTATO / PERKS
export const perksData: {
  icon: string;
  title: string;
  text: string;
  space: string;
}[] = [
  {
    icon: "/images/perks/icon-support.svg",
    title: "Regiões de Atuação",
    text: "Grande São Paulo, Campinas, Barueri e Sorocaba.",
    space: "lg:mt-8",
  },
  {
    icon: "/images/perks/icon-academy.svg",
    title: "WhatsApp",
    text: "(15) 99690-4882",
    space: "lg:mt-4",
  },
];

// TIMELINE / SERVIÇOS
export const timelineData: {
  icon: string;
  title: string;
  text: string;
  position: string;
}[] = [
  {
    icon: "/images/icon-melhoria.svg",
    title: "Consultoria SAP B1",
    text: "Implementação estratégica e personalizada do sistema SAP Business One.",
    position: "md:top-0 md:left-0",
  },
  {
    icon: "/images/timeline/icon-refinement.svg",
    title: "Fábrica de Add‑Ons",
    text: "Desenvolvimento de funcionalidades específicas para o seu negócio.",
    position: "md:top-0 md:right-0",
  },
  {
    icon: "/images/timeline/icon-prototype.svg",
    title: "Consultoria Power BI",
    text: "Dashboards e análises inteligentes para decisões mais rápidas.",
    position: "md:bottom-0 md:left-0",
  },
  {
    icon: "/images/timeline/icon-support.svg",
    title: "Suporte Especializado",
    text: "Acompanhamento técnico contínuo e dedicado, garantindo evolução da solução.",
    position: "md:bottom-0 md:right-0",
  },
];
