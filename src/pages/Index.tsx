import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuSectionNew from "@/components/MenuSectionNew";
import CartDrawer from "@/components/CartDrawer";
import { 
  promocoes,
  pizzasTradicionais, 
  pizzasEspeciais, 
  pizzasDoces, 
  vegetariana,
  pizzasSaboresQueijos,
  bebidas, 
  cervejasItems, 
  esfihas, 
  porcoes 
} from "@/data/menuData";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 px-4 py-8 max-w-2xl mx-auto w-full">
        <MenuSectionNew
          title="Promoções"
          emoji="🔥"
          items={promocoes}
        />

        <MenuSectionNew
          title="Pizzas Tradicionais"
          emoji="🍕"
          items={pizzasTradicionais}
        />
        
        <MenuSectionNew
          title="Pizzas Especiais"
          emoji="⭐"
          items={pizzasEspeciais}
        />
        
        <MenuSectionNew
          title="Pizzas Doces"
          emoji="🍫"
          items={pizzasDoces}
        />

        <MenuSectionNew
          title="Vegetariana"
          emoji="🥬"
          items={vegetariana}
        />

        <MenuSectionNew
          title="Pizzas Sabores Queijos"
          emoji="🧀"
          items={pizzasSaboresQueijos}
        />
        
        <MenuSectionNew
          title="Refrigerantes"
          emoji="🥤"
          items={bebidas}
        />
        
        <MenuSectionNew
          title="Cervejas"
          emoji="🍺"
          items={cervejasItems}
        />
        
        <MenuSectionNew
          title="Esfihas"
          emoji="🥟"
          items={esfihas}
        />
        
        <MenuSectionNew
          title="Porções"
          emoji="🍟"
          items={porcoes}
        />
      </main>
      
      <CartDrawer />
      <Footer />
    </div>
  );
};

export default Index;
