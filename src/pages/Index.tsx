import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuSection from "@/components/MenuSection";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { pizzasTradicionais, pizzasEspeciais, pizzasDoces, bebidas, cervejas, esfihas, porcoes } from "@/data/pizzas";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 px-4 py-8 max-w-2xl mx-auto w-full">
        <MenuSection
          title="Pizzas Tradicionais"
          emoji="🍕"
          pizzas={pizzasTradicionais}
        />
        
        <MenuSection
          title="Pizzas Especiais"
          emoji="⭐"
          pizzas={pizzasEspeciais}
        />
        
        <MenuSection
          title="Pizzas Doces"
          emoji="🍫"
          pizzas={pizzasDoces}
        />
        
        <MenuSection
          title="Refrigerantes"
          emoji="🥤"
          pizzas={bebidas}
        />
        
        <MenuSection
          title="Cervejas"
          emoji="🍺"
          pizzas={cervejas}
        />
        
        <MenuSection
          title="Esfihas"
          emoji="🥟"
          pizzas={esfihas}
        />
        
        <MenuSection
          title="Porções"
          emoji="🍟"
          pizzas={porcoes}
        />
      </main>
      
      <WhatsAppFloatingButton />
      <Footer />
    </div>
  );
};

export default Index;
