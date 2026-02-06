// Sabores disponíveis por categoria de pizza

export interface PizzaFlavor {
  id: string;
  name: string;
  description: string;
  price: number;
  priceFormatted: string;
}

export interface CrustOption {
  id: string;
  name: string;
  extraPrice: number;
  extraPriceFormatted: string;
}

export const crustOptions: CrustOption[] = [
  { id: "trad-catupiry", name: "Massa Tradicional + Borda Catupiry", extraPrice: 0, extraPriceFormatted: "" },
  { id: "trad-catupiry-original", name: "Massa Tradicional + Borda Catupiry Original", extraPrice: 8, extraPriceFormatted: "+ R$ 8,00" },
  { id: "trad-cheddar", name: "Massa Tradicional + Borda Cheddar", extraPrice: 0, extraPriceFormatted: "" },
  { id: "grossa-catupiry", name: "Massa Grossa + Borda Catupiry", extraPrice: 0, extraPriceFormatted: "" },
  { id: "grossa-catupiry-original", name: "Massa Grossa + Borda Catupiry Original", extraPrice: 8, extraPriceFormatted: "+ R$ 8,00" },
  { id: "grossa-cheddar", name: "Massa Grossa + Borda Cheddar", extraPrice: 0, extraPriceFormatted: "" },
];

// ===== PIZZAS ESPECIAIS =====
export const flavorsEspeciais: PizzaFlavor[] = [
  { id: "camareis", name: "Camareis", description: "Pizza artesanal, base de molho de tomate, Camarão, palmito, champignon e mussarela.", price: 70, priceFormatted: "R$ 70,00" },
  { id: "corinthians", name: "Corinthians", description: "Pizza Artesanal a base de molho de tomate, Palmito, Ervilha, Calabresa, Cebola, Mussarela e Pimentão vermelho ou verde.", price: 50, priceFormatted: "R$ 50,00" },
  { id: "tanto-faz", name: "Tanto Faz", description: "Pizza Artesanal a base de molho de tomate, Atum, Palmito, Catupiry, Mussarela e Calabresa.", price: 55, priceFormatted: "R$ 55,00" },
  { id: "voce-que-sabe", name: "Você Que Sabe", description: "Pizza artesanal a base de Molho de tomate, Calabresa, Palmito, Lombo, Catupiry e Pitadas de Bacon.", price: 55, priceFormatted: "R$ 55,00" },
  { id: "camarao", name: "Camarão", description: "Pizza artesanal a base de molho de tomate, Camarão com Catupiry ou Mussarela.", price: 70, priceFormatted: "R$ 70,00" },
  { id: "carne-seca", name: "Carne Seca", description: "Pizza Artesanal a base de Molho de tomate, Carne seca desfiada, com mussarela ou Catupiry.", price: 65, priceFormatted: "R$ 65,00" },
  { id: "santos", name: "Santos", description: "Pizza Artesanal a base de Molho de tomate, Atum, Palmito, Ervilha e Catupiry.", price: 50, priceFormatted: "R$ 50,00" },
  { id: "quero-mais", name: "Quero Mais", description: "Pizza Artesanal a base de molho de tomate, Presunto, Palmito, Catupiry, Mussarela, Calabresa e Pitadas de Bacon.", price: 55, priceFormatted: "R$ 55,00" },
  { id: "palmeiras", name: "Palmeiras", description: "Pizza Artesanal a base de molho de tomate, Presunto, Palmito, Catupiry, Calabresa com Pitadas de Bacon.", price: 55, priceFormatted: "R$ 55,00" },
  { id: "sao-paulo", name: "São Paulo", description: "Pizza artesanal a base de molho de tomate, Presunto, Camarão, Catupiry, Ervilha, Milho e Mussarela.", price: 65, priceFormatted: "R$ 65,00" },
  { id: "brasileira", name: "Brasileira", description: "Pizza artesanal a base de molho de tomate, Atum, Palmito, ovos, camarão e mussarela.", price: 70, priceFormatted: "R$ 70,00" },
  { id: "chamepizza", name: "Chamepizza", description: "Pizza artesanal a base de molho de tomate, Frango, Palmito, ervilha, milho, bacon, Catupiry e Pimentão vermelho.", price: 55, priceFormatted: "R$ 55,00" },
  { id: "nordestao", name: "Nordestão", description: "Pizza artesanal a base de molho de tomate, Carne seca, mussarela, calabresa e Pitadas de Bacon.", price: 60, priceFormatted: "R$ 60,00" },
];

// Placeholder arrays for other categories - user will provide data later
export const flavorsPromocoes: PizzaFlavor[] = [];
export const flavorsTradicionais: PizzaFlavor[] = [];
export const flavorsDoces: PizzaFlavor[] = [];
export const flavorsVegetariana: PizzaFlavor[] = [];
export const flavorsSaboresQueijos: PizzaFlavor[] = [];

// Map category name to flavors
export const categoryFlavorsMap: Record<string, PizzaFlavor[]> = {
  "Promoções": flavorsPromocoes,
  "Pizzas Tradicionais": flavorsTradicionais,
  "Pizzas Especiais": flavorsEspeciais,
  "Pizzas Doces": flavorsDoces,
  "Vegetariana": flavorsVegetariana,
  "Pizzas Sabores Queijos": flavorsSaboresQueijos,
};

// Check if a category has the flavor selection flow
export const hasFlavors = (category: string): boolean => {
  const flavors = categoryFlavorsMap[category];
  return !!flavors && flavors.length > 0;
};
