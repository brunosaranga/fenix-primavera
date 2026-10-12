// "Como escolher": used by <Comparison variant="compact" /> on the landing
// and <Comparison variant="full" /> on /como-escolher.
export const comparisons = {
    label: "Como escolher",
    title: "Duas decisões. Nós ajudamos com ambas.",
    subtitle: "Cada empresa é diferente. Explicamos as opções para que escolha com confiança.",
    moreLink: { label: "Ver comparação completa", to: "/como-escolher" },
    idealForLabel: "Ideal para",
    detailsLabel: "Em detalhe",
    openDetailsLabel: "Ver detalhes",

    groups: [
        {
            id: "instalacao",
            tab: "Onde instalar",
            options: [
                {
                    id: "cloud",
                    icon: "cloud",
                    title: "Cloud",
                    short: "Acessível pela internet, alojado no fornecedor.",
                    description:
                        "A solução corre nos servidores do fornecedor e é acedida pela internet, a partir de qualquer lugar. Não precisa de servidores próprios.",
                    checks: [
                        "Escalável e flexível",
                        "Atualizações automáticas",
                        "Segurança gerida pelo fornecedor",
                        "Acesso imediato, em qualquer lugar",
                    ],
                    idealFor: "Empresas que querem começar rápido e trabalhar de qualquer lugar.",
                },
                {
                    id: "on-premise",
                    icon: "server",
                    title: "On-Premise",
                    short: "Instalado nas instalações da sua empresa.",
                    description:
                        "A solução é instalada nos servidores da sua empresa. Tem controlo total sobre a infraestrutura e pode trabalhar sem internet.",
                    checks: [
                        "Controlo total da infraestrutura",
                        "Personalização e integração",
                        "Acesso offline",
                        "Custos previsíveis a longo prazo",
                    ],
                    idealFor: "Empresas com equipa de TI ou com internet instável.",
                },
            ],
            // Full comparison table (slide 9)
            rows: [
                {
                    label: "Onde fica instalado",
                    values: ["Servidores do fornecedor, acedido pela internet", "Servidores da sua empresa"],
                },
                {
                    label: "Escalabilidade",
                    values: [
                        "Recursos ajustáveis; cancelamento a qualquer altura",
                        "Escalar é mais complexo; sem flexibilidade de cancelamento",
                    ],
                },
                { label: "Segurança", values: ["Responsabilidade do fornecedor", "Responsabilidade da empresa"] },
                { label: "Manutenção e atualizações", values: ["Automáticas", "Manuais"] },
                { label: "Acesso", values: ["Imediato, online", "Requer instalação; permite acesso offline"] },
                { label: "Custos", values: ["Mais baixos, mas contínuos", "Mais altos no início"] },
            ],
        },
        {
            id: "pagamento",
            tab: "Como pagar",
            options: [
                {
                    id: "subscricao",
                    icon: "subscription",
                    title: "Subscrição",
                    short: "Pagamento recorrente, acesso contínuo.",
                    description:
                        "Paga mensal ou anualmente para usar a solução. As atualizações estão incluídas e pode ajustar o plano à medida que o negócio muda.",
                    checks: [
                        "Aprovação interna mais fácil",
                        "Custos flexíveis",
                        "Atualizações incluídas",
                        "Adapta-se às mudanças do mercado",
                    ],
                    idealFor: "Quem quer flexibilidade e menor custo inicial.",
                },
                {
                    id: "perpetua",
                    icon: "license",
                    title: "Licença Perpétua",
                    short: "Compra única, licença vitalícia.",
                    description:
                        "Compra a licença uma vez e fica com ela. É um investimento com custos previsíveis e mais económico a longo prazo.",
                    checks: [
                        "Lógica de investimento",
                        "Custos previsíveis",
                        "Mais económico a longo prazo",
                        "Ativo da empresa",
                    ],
                    idealFor: "Quem prefere investir uma vez e planear a longo prazo.",
                },
            ],
            // Full comparison table (slide 13)
            rows: [
                { label: "Tipo de despesa", values: ["Operacional", "Investimento (capital)"] },
                { label: "Pagamento", values: ["Mensal ou anual", "No ato da compra"] },
                { label: "Flexibilidade", values: ["Adapta-se ao mercado", "Compromisso de longo prazo"] },
                { label: "Atualizações", values: ["Incluídas", "Podem ter custo adicional"] },
                {
                    label: "Custos",
                    values: [
                        "Mais baixos e contínuos; aprovação mais fácil",
                        "Mais altos no início, mais baixos a longo prazo",
                    ],
                },
            ],
        },
    ],

    // Shown only on /como-escolher. TODO: confirm answers with Fenix.
    faq: {
        title: "Perguntas frequentes",
        items: [
            {
                q: "Posso mudar de Cloud para On-Premise mais tarde?",
                a: "TODO: resposta a confirmar com a Fenix.",
            },
            {
                q: "Os meus dados ficam seguros na cloud?",
                a: "TODO: resposta a confirmar com a Fenix.",
            },
            {
                q: "O que acontece se a internet falhar?",
                a: "TODO: resposta a confirmar com a Fenix.",
            },
            {
                q: "As atualizações da licença perpétua têm custo?",
                a: "TODO: resposta a confirmar com a Fenix.",
            },
        ],
    },
};
