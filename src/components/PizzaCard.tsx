interface PizzaCardProps {
  name: string;
  description: string;
  price: string;
}

const PizzaCard = ({ name, description, price }: PizzaCardProps) => {
  const whatsappNumber = "5511981627116";
  const message = encodeURIComponent(`Olá! Quero pedir a pizza ${name}.`);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

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
        
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button mt-1"
        >
          <span>📲</span>
          Pedir no WhatsApp
        </a>
      </div>
    </div>
  );
};

export default PizzaCard;
