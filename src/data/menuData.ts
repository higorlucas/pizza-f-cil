// Imagens dos produtos
import pizzaMussarela from "@/assets/pizza-mussarela.jpg";
import pizzaCalabresa from "@/assets/pizza-calabresa.jpg";
import pizzaPortuguesa from "@/assets/pizza-portuguesa.jpg";
import pizzaMarguerita from "@/assets/pizza-marguerita.jpg";
import pizzaFrangoCatupiry from "@/assets/pizza-frango-catupiry.jpg";
import pizzaQuatroQueijos from "@/assets/pizza-quatro-queijos.jpg";
import pizzaBacon from "@/assets/pizza-bacon.jpg";
import pizzaModaCasa from "@/assets/pizza-moda-casa.jpg";
import pizzaChocolate from "@/assets/pizza-chocolate.jpg";
import pizzaBanana from "@/assets/pizza-banana.jpg";
import pizzaVegetariana from "@/assets/pizza-vegetariana.jpg";
import pizzaQueijos from "@/assets/pizza-queijos.jpg";
import pizzaPromocao from "@/assets/pizza-promocao.jpg";
import bebidasCoca from "@/assets/bebidas-coca.jpg";
import bebidasGuarana from "@/assets/bebidas-guarana.jpg";
import esfihaCarne from "@/assets/esfiha-carne.jpg";
import esfihaQueijo from "@/assets/esfiha-queijo.jpg";
import porcaoBatata from "@/assets/porcao-batata.jpg";
import porcaoCalabresa from "@/assets/porcao-calabresa.jpg";
import cervejas from "@/assets/cervejas.jpg";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  priceFormatted: string;
  image: string;
  category: string;
}

// Helper to create size variants for pizza categories
function createPizzaSizes(
  idPrefix: string,
  category: string,
  image: string,
  mediaPrice: number,
  grandePrice: number,
  hasGrande4Sabores = false
): MenuItem[] {
  const items: MenuItem[] = [
    {
      id: `${idPrefix}-media`,
      name: "Média (4 Pedaços)",
      description: `Pizza ${category} tamanho médio com 4 pedaços.`,
      price: mediaPrice,
      priceFormatted: `R$ ${mediaPrice.toFixed(2).replace(".", ",")}`,
      image,
      category,
    },
    {
      id: `${idPrefix}-media-2sabores`,
      name: "Média 2 Sabores (4 Pedaços)",
      description: `Pizza ${category} tamanho médio, escolha 2 sabores, com 4 pedaços.`,
      price: mediaPrice,
      priceFormatted: `R$ ${mediaPrice.toFixed(2).replace(".", ",")}`,
      image,
      category,
    },
    {
      id: `${idPrefix}-grande`,
      name: "Grande (8 Pedaços)",
      description: `Pizza ${category} tamanho grande com 8 pedaços.`,
      price: grandePrice,
      priceFormatted: `R$ ${grandePrice.toFixed(2).replace(".", ",")}`,
      image,
      category,
    },
    {
      id: `${idPrefix}-grande-2sabores`,
      name: "Grande 2 Sabores (8 Pedaços)",
      description: `Pizza ${category} tamanho grande, escolha 2 sabores, com 8 pedaços.`,
      price: grandePrice,
      priceFormatted: `R$ ${grandePrice.toFixed(2).replace(".", ",")}`,
      image,
      category,
    },
    {
      id: `${idPrefix}-grande-3sabores`,
      name: "Grande 3 Sabores (8 Pedaços)",
      description: `Pizza ${category} tamanho grande, escolha 3 sabores, com 8 pedaços.`,
      price: grandePrice === 55 ? 54.99 : grandePrice,
      priceFormatted: grandePrice === 55 ? "R$ 54,99" : `R$ ${grandePrice.toFixed(2).replace(".", ",")}`,
      image,
      category,
    },
  ];

  if (hasGrande4Sabores) {
    items.push({
      id: `${idPrefix}-grande-4sabores`,
      name: "Grande 4 Sabores (8 Pedaços)",
      description: `Pizza ${category} tamanho grande, escolha 4 sabores, com 8 pedaços.`,
      price: grandePrice,
      priceFormatted: `R$ ${grandePrice.toFixed(2).replace(".", ",")}`,
      image,
      category,
    });
  }

  return items;
}

// ===== PIZZA CATEGORIES =====

export const promocoes: MenuItem[] = createPizzaSizes(
  "promo", "Promoções", pizzaPromocao, 45, 55
);

export const pizzasTradicionais: MenuItem[] = createPizzaSizes(
  "trad", "Pizzas Tradicionais", pizzaMussarela, 45, 55
);

export const pizzasEspeciais: MenuItem[] = createPizzaSizes(
  "esp", "Pizzas Especiais", pizzaFrangoCatupiry, 50, 60
);

export const pizzasDoces: MenuItem[] = createPizzaSizes(
  "doce", "Pizzas Doces", pizzaChocolate, 50, 60
);

export const vegetariana: MenuItem[] = createPizzaSizes(
  "veg", "Vegetariana", pizzaVegetariana, 50, 60, true
);

export const pizzasSaboresQueijos: MenuItem[] = createPizzaSizes(
  "queijo", "Pizzas Sabores Queijos", pizzaQueijos, 45, 55
);

// ===== BEBIDAS =====

export const bebidas: MenuItem[] = [
  {
    id: "coca-350",
    name: "Coca-Cola 350ml",
    description: "Refrigerante Coca-Cola gelado (350ml)",
    price: 6.0,
    priceFormatted: "R$ 6,00",
    image: bebidasCoca,
    category: "Refrigerantes",
  },
  {
    id: "coca-600",
    name: "Coca-Cola 600ml",
    description: "Refrigerante Coca-Cola gelado (600ml)",
    price: 10.0,
    priceFormatted: "R$ 10,00",
    image: bebidasCoca,
    category: "Refrigerantes",
  },
  {
    id: "coca-2l",
    name: "Coca-Cola 2 Litros",
    description: "Refrigerante Coca-Cola gelado (2L)",
    price: 18.0,
    priceFormatted: "R$ 18,00",
    image: bebidasCoca,
    category: "Refrigerantes",
  },
  {
    id: "convencao-2l",
    name: "Convenção 2L",
    description: "Refrigerante Convenção gelado. Serve 4 pessoas (2L)",
    price: 10.0,
    priceFormatted: "R$ 10,00",
    image: bebidasGuarana,
    category: "Refrigerantes",
  },
  {
    id: "fanta-laranja-2l",
    name: "Fanta Laranja 2 Litros",
    description: "Refrigerante Fanta Laranja (Garrafa 2L)",
    price: 18.0,
    priceFormatted: "R$ 18,00",
    image: bebidasCoca,
    category: "Refrigerantes",
  },
  {
    id: "fanta-uva-2l",
    name: "Fanta Uva 2 Litros",
    description: "Refrigerante Fanta Uva (Garrafa 2L)",
    price: 18.0,
    priceFormatted: "R$ 18,00",
    image: bebidasCoca,
    category: "Refrigerantes",
  },
  {
    id: "guarana-2l",
    name: "Guaraná Antártica 2 Litros",
    description: "Refrigerante Guaraná Antártica (Garrafa 2L)",
    price: 15.0,
    priceFormatted: "R$ 15,00",
    image: bebidasGuarana,
    category: "Refrigerantes",
  },
  {
    id: "guarana-600",
    name: "Guaraná Antártica 600ml",
    description: "Refrigerante Guaraná Antártica (Garrafa 600ml)",
    price: 8.0,
    priceFormatted: "R$ 8,00",
    image: bebidasGuarana,
    category: "Refrigerantes",
  },
  {
    id: "sprite-2l",
    name: "Sprite 2 Litros",
    description: "Refrigerante Sprite (Garrafa 2L)",
    price: 18.0,
    priceFormatted: "R$ 18,00",
    image: bebidasCoca,
    category: "Refrigerantes",
  },
];

export const cervejasItems: MenuItem[] = [
  {
    id: "itaipava-269",
    name: "Itaipava Lata 269ml",
    description: "Cerveja Itaipava gelada (269ml)",
    price: 5.0,
    priceFormatted: "R$ 5,00",
    image: cervejas,
    category: "Cervejas",
  },
  {
    id: "skol-269",
    name: "Skol Lata 269ml",
    description: "Cerveja Skol gelada (269ml)",
    price: 5.0,
    priceFormatted: "R$ 5,00",
    image: cervejas,
    category: "Cervejas",
  },
];

// ===== ESFIHAS =====

export const esfihas: MenuItem[] = [
  { id: "esfiha-atum", name: "Atum", description: "Atum Dada.", price: 6.0, priceFormatted: "R$ 6,00", image: esfihaQueijo, category: "Esfihas" },
  { id: "esfiha-bacon-queijo", name: "Bacon c/ Queijo", description: "Mussarela com pitadas de bacon.", price: 7.0, priceFormatted: "R$ 7,00", image: esfihaQueijo, category: "Esfihas" },
  { id: "esfiha-banana", name: "Banana", description: "Canela, leite condensado com pedaços de banana.", price: 10.0, priceFormatted: "R$ 10,00", image: esfihaCarne, category: "Esfihas" },
  { id: "esfiha-bauru", name: "Bauru", description: "Mussarela com toque refinado de presunto e tomate.", price: 7.0, priceFormatted: "R$ 7,00", image: esfihaQueijo, category: "Esfihas" },
  { id: "esfiha-beijinho", name: "Beijinho", description: "Leite condensado com pitadas de coco ralado.", price: 10.0, priceFormatted: "R$ 10,00", image: esfihaCarne, category: "Esfihas" },
  { id: "esfiha-chocolate", name: "Chocolate", description: "Chocolate ao leite.", price: 10.0, priceFormatted: "R$ 10,00", image: esfihaCarne, category: "Esfihas" },
  { id: "esfiha-chocolate-morango", name: "Chocolate com Morango", description: "Chocolate ao leite com pedaços de morango.", price: 10.0, priceFormatted: "R$ 10,00", image: esfihaCarne, category: "Esfihas" },
  { id: "esfiha-escarola", name: "Escarola", description: "Escarola com pitadas de mussarela.", price: 7.0, priceFormatted: "R$ 7,00", image: esfihaQueijo, category: "Esfihas" },
  { id: "esfiha-calabresa-queijo", name: "Calabresa c/ Queijo", description: "Calabresa com pitadas de mussarela.", price: 7.0, priceFormatted: "R$ 7,00", image: esfihaCarne, category: "Esfihas" },
  { id: "esfiha-carne", name: "Carne", description: "Carne bovina com tempero da casa.", price: 5.0, priceFormatted: "R$ 5,00", image: esfihaCarne, category: "Esfihas" },
  { id: "esfiha-frango-catupiry", name: "Frango Catupiry", description: "Frango desfiado com catupiry original.", price: 10.0, priceFormatted: "R$ 10,00", image: esfihaCarne, category: "Esfihas" },
  { id: "esfiha-calabresa", name: "Calabresa", description: "Calabresa moída.", price: 5.0, priceFormatted: "R$ 5,00", image: esfihaCarne, category: "Esfihas" },
  { id: "esfiha-camarao", name: "Camarão", description: "Camarão com pitadas de mussarela.", price: 10.0, priceFormatted: "R$ 10,00", image: esfihaQueijo, category: "Esfihas" },
  { id: "esfiha-queijo", name: "Queijo", description: "Queijo mussarela.", price: 5.0, priceFormatted: "R$ 5,00", image: esfihaQueijo, category: "Esfihas" },
  { id: "esfiha-mms", name: "M&Ms", description: "Chocolate e M&Ms.", price: 10.0, priceFormatted: "R$ 10,00", image: esfihaCarne, category: "Esfihas" },
  { id: "esfiha-portuguesa", name: "Portuguesa", description: "Presunto, ovos, cebola, ervilha e pitadas de mussarela.", price: 8.0, priceFormatted: "R$ 8,00", image: esfihaCarne, category: "Esfihas" },
  { id: "esfiha-presunto-queijo", name: "Presunto com Queijo", description: "Mussarela com toques refinados de presunto.", price: 7.0, priceFormatted: "R$ 7,00", image: esfihaQueijo, category: "Esfihas" },
];

// ===== PORÇÕES =====

export const porcoes: MenuItem[] = [
  {
    id: "porcao-batata",
    name: "Batata",
    description: "Batata frita, cheddar e bacon. Serve 3 pessoas (350g)",
    price: 50.0,
    priceFormatted: "R$ 50,00",
    image: porcaoBatata,
    category: "Porções",
  },
  {
    id: "porcao-calabresa",
    name: "Calabresa",
    description: "Calabresa em rodelas, cebola, tomate e limão. Serve 3 pessoas (350g)",
    price: 50.0,
    priceFormatted: "R$ 50,00",
    image: porcaoCalabresa,
    category: "Porções",
  },
];

// Itens sugeridos para upsell
export const upsellItems: MenuItem[] = [
  ...bebidas.slice(0, 4),
  ...cervejasItems,
  ...porcoes,
];

// Todos os itens
export const allItems: MenuItem[] = [
  ...promocoes,
  ...pizzasTradicionais,
  ...pizzasEspeciais,
  ...pizzasDoces,
  ...vegetariana,
  ...pizzasSaboresQueijos,
  ...bebidas,
  ...cervejasItems,
  ...esfihas,
  ...porcoes,
];
