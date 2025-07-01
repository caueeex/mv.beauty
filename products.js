const products = [
    // Esfoliante de Bumbum Max Love
    {
        id: 1,
        name: "Esfoliante de Bumbum Max Love",
        subtitle: "Esfoliação e Maciez",
        price: 24.90,
        shortDescription: "Esfoliante corporal para região do bumbum.",
        description: "O Esfoliante de Bumbum Max Love promove renovação celular, maciez e suavidade para a pele da região dos glúteos. Com partículas naturais e fragrância refrescante.",
        benefits: [
            "Esfoliação suave",
            "Renovação celular",
            "Pele macia e perfumada",
            "Uso corporal"
        ],
        ingredients: "Partículas naturais, fragrância, extratos vegetais",
        images: [
            "esfoliante-poran-bumbum.jpg"
        ],
        category: "skincare",
        quantity: 2
    },
    // Sérum 3 em 1 Max Love
    {
        id: 2,
        name: "Sérum 3 em 1 Max Love",
        subtitle: "Hidrata, Nutre e Ilumina",
        price: 29.90,
        shortDescription: "Sérum facial multifuncional: hidrata, nutre e ilumina.",
        description: "O Sérum 3 em 1 Max Love é ideal para quem busca praticidade e resultados. Hidrata profundamente, nutre a pele e proporciona luminosidade natural.",
        benefits: [
            "Hidratação intensa",
            "Nutrição",
            "Luminosidade",
            "Textura leve"
        ],
        ingredients: "Ácido hialurônico, vitamina E, extratos vegetais",
        images: [
            "serum-maxlove.png"
        ],
        category: "skincare",
        quantity: 4
    },
    // Sérum Vitamina C Max Love
    {
        id: 3,
        name: "Sérum Vitamina C Max Love",
        subtitle: "Antioxidante e Iluminador",
        price: 32.90,
        shortDescription: "Sérum facial com vitamina C para pele radiante.",
        description: "O Sérum Vitamina C Max Love combate radicais livres, uniformiza o tom da pele e proporciona luminosidade. Ideal para uso diário.",
        benefits: [
            "Ação antioxidante",
            "Uniformiza o tom",
            "Luminosidade",
            "Textura leve"
        ],
        ingredients: "Vitamina C, ácido hialurônico, extratos vegetais",
        images: [
            "serumfacial-maxlove.jpeg"
        ],
        category: "skincare",
        quantity: 4
    },
    // Esfoliante Corporal Max Love - Melancia
    {
        id: 4,
        name: "Esfoliante Corporal Max Love - Melancia",
        subtitle: "Refrescância e Renovação",
        price: 22.90,
        shortDescription: "Esfoliante corporal com extrato de melancia.",
        description: "O Esfoliante Corporal Max Love Melancia remove células mortas, renova e refresca a pele, deixando-a macia e perfumada.",
        benefits: [
            "Esfoliação suave",
            "Pele renovada",
            "Fragrância refrescante",
            "Uso corporal"
        ],
        ingredients: "Extrato de melancia, partículas naturais, fragrância",
        images: [
            "esfoliante-melancia.png"
        ],
        category: "skincare",
        quantity: 3
    },
    // Esfoliante Corporal Max Love - Morango
    {
        id: 5,
        name: "Esfoliante Corporal Max Love - Morango",
        subtitle: "Doçura e Renovação",
        price: 22.90,
        shortDescription: "Esfoliante corporal com extrato de morango.",
        description: "O Esfoliante Corporal Max Love Morango remove células mortas, renova e perfuma a pele com fragrância doce de morango.",
        benefits: [
            "Esfoliação suave",
            "Pele renovada",
            "Fragrância doce",
            "Uso corporal"
        ],
        ingredients: "Extrato de morango, partículas naturais, fragrância",
        images: [
            "esfoliante-morango.png"
        ],
        category: "skincare",
        quantity: 3
    },
    // Esfoliante Corporal Max Love - Pitaya
    {
        id: 6,
        name: "Esfoliante Corporal Max Love - Pitaya",
        subtitle: "Exótico e Renovador",
        price: 22.90,
        shortDescription: "Esfoliante corporal com extrato de pitaya.",
        description: "O Esfoliante Corporal Max Love Pitaya remove células mortas, renova e perfuma a pele com fragrância exótica de pitaya.",
        benefits: [
            "Esfoliação suave",
            "Pele renovada",
            "Fragrância exótica",
            "Uso corporal"
        ],
        ingredients: "Extrato de pitaya, partículas naturais, fragrância",
        images: [
            "esfoliante-pitaya.png"
        ],
        category: "skincare",
        quantity: 2
    },
    // Primer Facial Max Love - Rosa Mosqueta
    {
        id: 7,
        name: "Primer Facial Max Love - Rosa Mosqueta",
        subtitle: "Pele Lisa e Hidratada",
        price: 19.90,
        shortDescription: "Primer facial com óleo de rosa mosqueta para hidratação e preparação da pele.",
        description: "O Primer Facial Max Love com óleo de rosa mosqueta hidrata, suaviza e prepara a pele para a maquiagem, garantindo maior fixação e acabamento natural.",
        benefits: [
            "Hidratação",
            "Suaviza a pele",
            "Prolonga a maquiagem",
            "Textura leve"
        ],
        ingredients: "Óleo de rosa mosqueta, vitamina E, silicones",
        images: [
            "primer-rosa.png"
        ],
        category: "makeup",
        quantity: 2
    },
    // Gloss Labial Max Love
    {
        id: 8,
        name: "Gloss Labial Max Love",
        subtitle: "Brilho e Hidratação",
        price: 13.90,
        shortDescription: "Gloss labial com efeito molhado e hidratação prolongada.",
        description: "O Gloss Labial Max Love oferece brilho intenso, efeito molhado e hidratação para os lábios. Pode ser usado sozinho ou sobre o batom para um acabamento luminoso.",
        benefits: [
            "Brilho intenso",
            "Efeito molhado",
            "Hidratação prolongada",
            "Textura confortável",
            "Não pegajoso"
        ],
        ingredients: "Óleo de rícino, vitamina E, pigmentos",
        images: [
            "gloss-maxlove.png"
        ],
        category: "makeup",
        quantity: 5
    },
    // Faixa de Cabelo
    {
        id: 9,
        name: "Faixa de Cabelo",
        subtitle: "Acessório para Skincare e Maquiagem",
        price: 9.90,
        shortDescription: "Faixa de cabelo confortável para rotina de beleza.",
        description: "A Faixa de Cabelo é ideal para prender os fios durante a rotina de skincare ou maquiagem. Confortável, ajustável e prática para o dia a dia.",
        benefits: [
            "Confortável e ajustável",
            "Ideal para skincare e maquiagem",
            "Mantém o cabelo longe do rosto",
            "Material macio"
        ],
        ingredients: "Poliéster, elástico",
        images: [
            "faixa-cabelo.png"
        ],
        category: "acessorio",
        quantity: 5,
    },
    {
        id: 11,
        name: "Escova Massageadora",
        subtitle: "Acessório de uso capilar que auxilia na limpeza ´profunda do couro cabeludo",
        price: 6.00,
        shortDescription: "Escova Massageadora capilar para rotina de beleza.",
        description: "A Faixa de Cabelo é ideal para prender os fios durante a rotina de skincare ou maquiagem. Confortável, ajustável e prática para o dia a dia.",
        benefits: [
            "Confortável e macio",
            "Ideal para lavagens e aplicação de tônicos",
            "Mantém o cabelo limpo e sem caspas",
            "Material macio"
        ],
        ingredients: "Silicone",
        images: [
            "faixa-cabelo.png"
        ],
        category: "acessorio",
        quantity: 5
    },
];
