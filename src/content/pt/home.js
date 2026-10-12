// Landing page copy. Edit text here, never inside components.
import hero from '../../assets/images/hero.jpg'


export const home = {
    seo: {
        title: "Fenix | Parceiro oficial Cegid Primavera em Moçambique",
        description:
            "Implementamos soluções de gestão Cegid Primavera em Moçambique: ERP, faturação, POS, RH e mais, com acompanhamento próximo.",
    },

    hero: {
        title: "Eleve a gestão do seu negócio",
        subtitle: "Aumente a produtividade, melhore o controlo da informação e a tomada de decisões.",
        secondaryCta: { label: "Conhecer soluções", to: "/solucoes" },
        image: hero, // TODO: import hero image from assets/images (e.g. hero.webp)
        imageAlt: "Gestor a acompanhar os indicadores do negócio no portátil e no telemóvel",
    },

    painPoints: {
        label: "Reconhece estes desafios?",
        items: [
            { problem: "Processos manuais?", solution: "Processos automatizados" },
            { problem: "Informação dispersa?", solution: "Informação centralizada" },
            { problem: "Falta de controlo financeiro?", solution: "Melhor gestão financeira" },
        ],
    },

    identity: {
        title: "Grandes soluções, acompanhamento de perto",
        text: "Somos uma empresa moçambicana e parceira oficial Cegid Primavera. Implementamos soluções de gestão com a atenção que o seu negócio merece, do primeiro diagnóstico ao suporte diário.",
        pillars: [
            { icon: "team", label: "Equipa local" },
            { icon: "follow", label: "Acompanhamento próximo" },
            { icon: "partner", label: "Parceiro oficial da Cegid" },
        ],
    },

    benefits: {
        title: "O que ganha",
        items: [
            { icon: "costs", title: "Reduzir custos operacionais" },
            { icon: "realtime", title: "Tomar decisões informadas em tempo real" },
            { icon: "errors", title: "Reduzir erros humanos" },
        ],
    },

    ctaBand: {
        title: "Pronto para organizar a gestão do seu negócio?",
        text: "Fale connosco. Começamos por conhecer os seus processos, sem compromisso.",
        nextStepsTitle: "O que acontece a seguir",
        nextSteps: [
            "Agendamos uma conversa",
            "Analisamos os seus processos",
            "Apresentamos uma proposta à medida",
        ],
    },
};
