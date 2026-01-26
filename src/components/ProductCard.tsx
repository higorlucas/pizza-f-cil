import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { MenuItem } from "@/data/menuData";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ProductCardProps {
  item: MenuItem;
}

const ProductCard = ({ item }: ProductCardProps) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      category: item.category,
    });
  };

  return (
    <div className="pizza-card overflow-hidden">
      <AspectRatio ratio={4 / 3} className="bg-muted rounded-lg overflow-hidden mb-3">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
      </AspectRatio>
      
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-start gap-2">
          <h3 className="font-semibold text-lg text-foreground">{item.name}</h3>
          <span className="price-tag whitespace-nowrap">{item.priceFormatted}</span>
        </div>
        
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
          {item.description}
        </p>
        
        <Button 
          onClick={handleAddToCart}
          className="whatsapp-button mt-1 h-auto p-3"
          variant="ghost"
        >
          <Plus className="h-4 w-4" />
          Adicionar
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
