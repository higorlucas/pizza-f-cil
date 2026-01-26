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

export const pizzasTradicionais: MenuItem[] = [
  {
    id: "pizza-mussarela",
    name: "Mussarela",
    description: "Clássica e cremosa, com mussarela derretida, molho de tomate e orégano.",
    price: 35.90,
    priceFormatted: "R$ 35,90",
    image: pizzaMussarela,
    category: "Pizzas Tradicionais"
  },
  {
    id: "pizza-calabresa",
    name: "Calabresa",
    description: "Fatias de calabresa defumada com cebola, azeitonas e orégano.",
    price: 38.90,
    priceFormatted: "R$ 38,90",
    image: pizzaCalabresa,
    category: "Pizzas Tradicionais"
  },
  {
    id: "pizza-portuguesa",
    name: "Portuguesa",
    description: "Presunto, ovos, cebola, azeitonas, ervilha e mussarela.",
    price: 42.90,
    priceFormatted: "R$ 42,90",
    image: pizzaPortuguesa,
    category: "Pizzas Tradicionais"
  },
  {
    id: "pizza-marguerita",
    name: "Marguerita",
    description: "Tomates frescos, mussarela de búfala, manjericão e azeite.",
    price: 39.90,
    priceFormatted: "R$ 39,90",
    image: pizzaMarguerita,
    category: "Pizzas Tradicionais"
  }
];

export const pizzasEspeciais: MenuItem[] = [
  {
    id: "pizza-frango-catupiry",
    name: "Frango com Catupiry",
    description: "Frango desfiado temperado com catupiry cremoso e milho.",
    price: 45.90,
    priceFormatted: "R$ 45,90",
    image: pizzaFrangoCatupiry,
    category: "Pizzas Especiais"
  },
  {
    id: "pizza-quatro-queijos",
    name: "Quatro Queijos",
    description: "Mussarela, provolone, parmesão e gorgonzola em perfeita harmonia.",
    price: 48.90,
    priceFormatted: "R$ 48,90",
    image: pizzaQuatroQueijos,
    category: "Pizzas Especiais"
  },
  {
    id: "pizza-bacon",
    name: "Bacon",
    description: "Bacon crocante, mussarela, cebola caramelizada e molho especial.",
    price: 46.90,
    priceFormatted: "R$ 46,90",
    image: pizzaBacon,
    category: "Pizzas Especiais"
  },
  {
    id: "pizza-moda-casa",
    name: "Moda da Casa",
    description: "Receita exclusiva com calabresa, bacon, champignon e catupiry.",
    price: 52.90,
    priceFormatted: "R$ 52,90",
    image: pizzaModaCasa,
    category: "Pizzas Especiais"
  }
];

export const pizzasDoces: MenuItem[] = [
  {
    id: "pizza-chocolate",
    name: "Chocolate",
    description: "Chocolate ao leite derretido com granulado e morangos frescos.",
    price: 38.90,
    priceFormatted: "R$ 38,90",
    image: pizzaChocolate,
    category: "Pizzas Doces"
  },
  {
    id: "pizza-banana",
    name: "Banana com Canela",
    description: "Bananas caramelizadas, canela, açúcar e leite condensado.",
    price: 36.90,
    priceFormatted: "R$ 36,90",
    image: pizzaBanana,
    category: "Pizzas Doces"
  }
];

export const bebidas: MenuItem[] = [
  {
    id: "coca-350",
    name: "Coca-Cola 350ml",
    description: "Refrigerante Coca-Cola gelado (350ml)",
    price: 6.00,
    priceFormatted: "R$ 6,00",
    image: bebidasCoca,
    category: "Refrigerantes"
  },
  {
    id: "coca-600",
    name: "Coca-Cola 600ml",
    description: "Refrigerante Coca-Cola gelado (700ml)",
    price: 10.00,
    priceFormatted: "R$ 10,00",
    image: bebidasCoca,
    category: "Refrigerantes"
  },
  {
    id: "coca-2l",
    name: "Coca-Cola 2 Litros",
    description: "Refrigerante Coca-Cola gelado (2L)",
    price: 18.00,
    priceFormatted: "R$ 18,00",
    image: bebidasCoca,
    category: "Refrigerantes"
  },
  {
    id: "convencao-2l",
    name: "Convenção 2L",
    description: "Refrigerante Convenção gelado. Serve 4 pessoas (2L)",
    price: 10.00,
    priceFormatted: "R$ 10,00",
    image: bebidasGuarana,
    category: "Refrigerantes"
  },
  {
    id: "fanta-laranja-2l",
    name: "Fanta Laranja 2 Litros",
    description: "Refrigerante Fanta Laranja (Garrafa 2L)",
    price: 18.00,
    priceFormatted: "R$ 18,00",
    image: bebidasCoca,
    category: "Refrigerantes"
  },
  {
    id: "fanta-uva-2l",
    name: "Fanta Uva 2 Litros",
    description: "Refrigerante Fanta Uva (Garrafa 2L)",
    price: 18.00,
    priceFormatted: "R$ 18,00",
    image: bebidasCoca,
    category: "Refrigerantes"
  },
  {
    id: "guarana-2l",
    name: "Guaraná Antártica 2 Litros",
    description: "Refrigerante Guaraná Antártica (Garrafa 2L)",
    price: 15.00,
    priceFormatted: "R$ 15,00",
    image: bebidasGuarana,
    category: "Refrigerantes"
  },
  {
    id: "guarana-600",
    name: "Guaraná Antártica 600ml",
    description: "Refrigerante Guaraná Antártica (Garrafa 600ml)",
    price: 8.00,
    priceFormatted: "R$ 8,00",
    image: bebidasGuarana,
    category: "Refrigerantes"
  },
  {
    id: "sprite-2l",
    name: "Sprite 2 Litros",
    description: "Refrigerante Sprite (Garrafa 2L)",
    price: 18.00,
    priceFormatted: "R$ 18,00",
    image: bebidasCoca,
    category: "Refrigerantes"
  }
];

export const cervejasItems: MenuItem[] = [
  {
    id: "itaipava-269",
    name: "Itaipava Lata 269ml",
    description: "Cerveja Itaipava gelada (269ml)",
    price: 5.00,
    priceFormatted: "R$ 5,00",
    image: cervejas,
    category: "Cervejas"
  },
  {
    id: "skol-269",
    name: "Skol Lata 269ml",
    description: "Cerveja Skol gelada (269ml)",
    price: 5.00,
    priceFormatted: "R$ 5,00",
    image: cervejas,
    category: "Cervejas"
  }
];

export const esfihas: MenuItem[] = [
  {
    id: "esfiha-atum",
    name: "Atum",
    description: "Atum Dada.",
    price: 6.00,
    priceFormatted: "R$ 6,00",
    image: esfihaQueijo,
    category: "Esfihas"
  },
  {
    id: "esfiha-bacon-queijo",
    name: "Bacon c/ Queijo",
    description: "Mussarela com pitadas de bacon.",
    price: 7.00,
    priceFormatted: "R$ 7,00",
    image: esfihaQueijo,
    category: "Esfihas"
  },
  {
    id: "esfiha-banana",
    name: "Banana",
    description: "Canela, leite condensado com pedaços de banana.",
    price: 10.00,
    priceFormatted: "R$ 10,00",
    image: esfihaCarne,
    category: "Esfihas"
  },
  {
    id: "esfiha-bauru",
    name: "Bauru",
    description: "Mussarela com toque refinado de presunto e tomate.",
    price: 7.00,
    priceFormatted: "R$ 7,00",
    image: esfihaQueijo,
    category: "Esfihas"
  },
  {
    id: "esfiha-beijinho",
    name: "Beijinho",
    description: "Leite condensado com pitadas de coco ralado.",
    price: 10.00,
    priceFormatted: "R$ 10,00",
    image: esfihaCarne,
    category: "Esfihas"
  },
  {
    id: "esfiha-chocolate",
    name: "Chocolate",
    description: "Chocolate ao leite.",
    price: 10.00,
    priceFormatted: "R$ 10,00",
    image: esfihaCarne,
    category: "Esfihas"
  },
  {
    id: "esfiha-chocolate-morango",
    name: "Chocolate com Morango",
    description: "Chocolate ao leite com pedaços de morango.",
    price: 10.00,
    priceFormatted: "R$ 10,00",
    image: esfihaCarne,
    category: "Esfihas"
  },
  {
    id: "esfiha-escarola",
    name: "Escarola",
    description: "Escarola com pitadas de mussarela.",
    price: 7.00,
    priceFormatted: "R$ 7,00",
    image: esfihaQueijo,
    category: "Esfihas"
  },
  {
    id: "esfiha-calabresa-queijo",
    name: "Calabresa c/ Queijo",
    description: "Calabresa com pitadas de mussarela.",
    price: 7.00,
    priceFormatted: "R$ 7,00",
    image: esfihaCarne,
    category: "Esfihas"
  },
  {
    id: "esfiha-carne",
    name: "Carne",
    description: "Carne bovina com tempero da casa.",
    price: 5.00,
    priceFormatted: "R$ 5,00",
    image: esfihaCarne,
    category: "Esfihas"
  },
  {
    id: "esfiha-frango-catupiry",
    name: "Frango Catupiry",
    description: "Frango desfiado com catupiry original.",
    price: 10.00,
    priceFormatted: "R$ 10,00",
    image: esfihaCarne,
    category: "Esfihas"
  },
  {
    id: "esfiha-calabresa",
    name: "Calabresa",
    description: "Calabresa moída.",
    price: 5.00,
    priceFormatted: "R$ 5,00",
    image: esfihaCarne,
    category: "Esfihas"
  },
  {
    id: "esfiha-camarao",
    name: "Camarão",
    description: "Camarão com pitadas de mussarela.",
    price: 10.00,
    priceFormatted: "R$ 10,00",
    image: esfihaQueijo,
    category: "Esfihas"
  },
  {
    id: "esfiha-queijo",
    name: "Queijo",
    description: "Queijo mussarela.",
    price: 5.00,
    priceFormatted: "R$ 5,00",
    image: esfihaQueijo,
    category: "Esfihas"
  },
  {
    id: "esfiha-mms",
    name: "M&Ms",
    description: "Chocolate e M&Ms.",
    price: 10.00,
    priceFormatted: "R$ 10,00",
    image: esfihaCarne,
    category: "Esfihas"
  },
  {
    id: "esfiha-portuguesa",
    name: "Portuguesa",
    description: "Presunto, ovos, cebola, ervilha e pitadas de mussarela.",
    price: 8.00,
    priceFormatted: "R$ 8,00",
    image: esfihaCarne,
    category: "Esfihas"
  },
  {
    id: "esfiha-presunto-queijo",
    name: "Presunto com Queijo",
    description: "Mussarela com toques refinados de presunto.",
    price: 7.00,
    priceFormatted: "R$ 7,00",
    image: esfihaQueijo,
    category: "Esfihas"
  }
];

export const porcoes: MenuItem[] = [
  {
    id: "porcao-batata",
    name: "Batata",
    description: "Batata frita, cheddar e bacon. Serve 3 pessoas (350g)",
    price: 50.00,
    priceFormatted: "R$ 50,00",
    image: porcaoBatata,
    category: "Porções"
  },
  {
    id: "porcao-calabresa",
    name: "Calabresa",
    description: "Calabresa em rodelas, cebola, tomate e limão. Serve 3 pessoas (350g)",
    price: 50.00,
    priceFormatted: "R$ 50,00",
    image: porcaoCalabresa,
    category: "Porções"
  }
];

// Itens sugeridos para upsell (bebidas e porções)
export const upsellItems: MenuItem[] = [
  ...bebidas.slice(0, 4),
  ...cervejasItems,
  ...porcoes
];

// Todos os itens para fácil acesso
export const allItems: MenuItem[] = [
  ...pizzasTradicionais,
  ...pizzasEspeciais,
  ...pizzasDoces,
  ...bebidas,
  ...cervejasItems,
  ...esfihas,
  ...porcoes
];
