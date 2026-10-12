// Contact form + company details. Empty details are hidden in the footer.
export const contact = {
    modalTitle: "Agendar diagnóstico",
    modalText: "Deixe os seus dados e entramos em contacto para marcar uma conversa.",
    fields: {
        name: "Nome",
        company: "Empresa",
        email: "Email",
        phone: "Telefone",
        interest: "Área de interesse",
        interestPlaceholder: "Selecione uma opção",
        message: "Mensagem (opcional)",
    },
    interests: [
        "ERP",
        "Contabilidade",
        "Recursos Humanos",
        "POS",
        "Faturação",
        "Gestão de Ativos",
        "Tesouraria",
        "Compras",
        "Vendas",
        "Ainda não sei",
    ],
    submit: "Enviar pedido",
    sending: "A enviar…",
    success: "Obrigado! Recebemos o seu pedido e entraremos em contacto em breve.",
    error: "Não foi possível enviar o pedido. Tente novamente ou fale connosco pelo WhatsApp.",
    validation: {
        name: "Indique o seu nome.",
        contact: "Indique um email ou telefone.",
        email: "Indique um email válido.",
    },
    whatsappMessage: "Olá Fenix! Gostaria de agendar um diagnóstico.",

    // TODO: real details from Fenix
    details: {
        address: "",
        phone: "",
        email: "",
        hours: "",
    },
};
