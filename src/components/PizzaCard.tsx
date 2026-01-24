import OrderForm from "./OrderForm";

interface PizzaCardProps {
  name: string;
  description: string;
  price: string;
}

const PizzaCard = ({ name, description, price }: PizzaCardProps) => {
  return (
    <div className="pizza-card">
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-start gap-2">
          <h3 className="font-semibold text-lg text-foreground">{name}</h3>
          <span className="price-tag whitespace-nowrap">{price}</span>
        </div>
        
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
        
        <OrderForm pizzaName={`${name} - ${price}`} />
      </div>
    </div>
  );
};

export default PizzaCard;
