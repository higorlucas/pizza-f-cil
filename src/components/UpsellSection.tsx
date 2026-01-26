import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { upsellItems } from "@/data/menuData";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const UpsellSection = () => {
  const { addItem, items } = useCart();

  // Filtrar itens que ainda não estão no carrinho
  const availableUpsells = upsellItems.filter(
    (upsell) => !items.some((item) => item.id === upsell.id)
  );

  if (availableUpsells.length === 0) return null;

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <span className="text-lg">💡</span>
        <h3 className="font-semibold text-sm">Que tal adicionar?</h3>
      </div>
      
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex gap-3 pb-3">
          {availableUpsells.slice(0, 6).map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-32 rounded-lg border bg-card overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-20 object-cover"
              />
              <div className="p-2 space-y-1">
                <p className="text-xs font-medium truncate">{item.name}</p>
                <p className="text-xs text-primary font-semibold">{item.priceFormatted}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full h-7 text-xs"
                  onClick={() =>
                    addItem({
                      id: item.id,
                      name: item.name,
                      price: item.price,
                      category: item.category,
                    })
                  }
                >
                  <Plus className="h-3 w-3 mr-1" />
                  Adicionar
                </Button>
              </div>
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default UpsellSection;
