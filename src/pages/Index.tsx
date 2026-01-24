import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuSection from "@/components/MenuSection";
import { pizzasTradicionais, pizzasEspeciais, pizzasDoces } from "@/data/pizzas";

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
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
