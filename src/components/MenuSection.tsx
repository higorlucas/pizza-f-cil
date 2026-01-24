import PizzaCard from "./PizzaCard";

interface Pizza {
  name: string;
  description: string;
  price: string;
}

interface MenuSectionProps {
  title: string;
  emoji: string;
  pizzas: Pizza[];
}

const MenuSection = ({ title, emoji, pizzas }: MenuSectionProps) => {
  return (
    <section className="mb-10">
      <h2 className="section-title">
        <span className="text-3xl">{emoji}</span>
        {title}
      </h2>
      
      <div className="grid gap-4 sm:grid-cols-2">
        {pizzas.map((pizza) => (
          <PizzaCard
            key={pizza.name}
            name={pizza.name}
            description={pizza.description}
            price={pizza.price}
          />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
