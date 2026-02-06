import { useState, memo, useCallback, lazy, Suspense } from "react";
import { ShoppingCart, Minus, Plus, Trash2 } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetDescription } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useCart } from "@/contexts/CartContext";

// Lazy load heavier components
const UpsellSection = lazy(() => import("./UpsellSection"));
const CheckoutForm = lazy(() => import("./CheckoutForm"));

// Memoized cart item component
const CartItem = memo(({ 
  item, 
  onUpdateQuantity, 
  onRemove,
  formatPrice 
}: { 
  item: { id: string; name: string; price: number; quantity: number; category: string; details?: string };
  onUpdateQuantity: (id: string, qty: number) => void;
  onRemove: (id: string) => void;
  formatPrice: (price: number) => string;
}) => (
  <div className="flex items-center gap-3 p-3 bg-card rounded-lg border">
    <div className="flex-1 min-w-0">
      <p className="font-medium text-sm truncate">{item.name}</p>
      <p className="text-xs text-muted-foreground">{item.category}</p>
      {item.details && <p className="text-xs text-muted-foreground italic">{item.details}</p>}
      <p className="text-sm font-semibold text-primary mt-1">
        {formatPrice(item.price * item.quantity)}
      </p>
    </div>
    
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8"
        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
      >
        <Minus className="h-3 w-3" />
      </Button>
      <span className="w-8 text-center font-medium">{item.quantity}</span>
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8"
        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
      >
        <Plus className="h-3 w-3" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 text-destructive hover:text-destructive"
        onClick={() => onRemove(item.id)}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  </div>
));

CartItem.displayName = "CartItem";

const CartDrawer = () => {
  const { items, total, itemCount, updateQuantity, removeItem } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const formatPrice = useCallback((price: number) => {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }, []);

  const handleUpdateQuantity = useCallback((id: string, qty: number) => {
    updateQuantity(id, qty);
  }, [updateQuantity]);

  const handleRemoveItem = useCallback((id: string) => {
    removeItem(id);
  }, [removeItem]);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button 
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50 bg-primary hover:bg-primary/90"
          size="icon"
        >
          <ShoppingCart className="h-6 w-6" />
          {itemCount > 0 && (
            <Badge className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0 flex items-center justify-center bg-accent text-accent-foreground animate-scale-in">
              {itemCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      
      <SheetContent className="w-full sm:max-w-lg flex flex-col p-0">
        <SheetHeader className="p-4 border-b">
          <SheetTitle className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            Seu Carrinho ({itemCount})
          </SheetTitle>
          <SheetDescription className="sr-only">
            Gerencie os itens do seu pedido
          </SheetDescription>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <ShoppingCart className="h-16 w-16 text-muted-foreground mb-4" />
            <p className="text-muted-foreground">Seu carrinho está vazio</p>
            <p className="text-sm text-muted-foreground mt-2">
              Adicione itens do cardápio para começar
            </p>
          </div>
        ) : showCheckout ? (
          <Suspense fallback={<div className="flex-1 flex items-center justify-center"><p>Carregando...</p></div>}>
            <CheckoutForm onBack={() => setShowCheckout(false)} />
          </Suspense>
        ) : (
          <>
            <ScrollArea className="flex-1">
              <div className="p-4 space-y-4">
                {/* Itens do carrinho */}
                <div className="space-y-3">
                  {items.map((item) => (
                    <CartItem
                      key={item.id}
                      item={item}
                      onUpdateQuantity={handleUpdateQuantity}
                      onRemove={handleRemoveItem}
                      formatPrice={formatPrice}
                    />
                  ))}
                </div>

                <Separator />

                {/* Sugestões de upsell */}
                <Suspense fallback={<div className="h-32 flex items-center justify-center"><p className="text-sm text-muted-foreground">Carregando sugestões...</p></div>}>
                  <UpsellSection />
                </Suspense>
              </div>
            </ScrollArea>

            {/* Footer com total e checkout */}
            <div className="border-t p-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Total</span>
                <span className="text-xl font-bold text-primary">{formatPrice(total)}</span>
              </div>
              
              <Button 
                className="w-full h-12 text-base bg-accent hover:bg-accent/90"
                onClick={() => setShowCheckout(true)}
              >
                <span className="mr-2">📲</span>
                Finalizar Pedido
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
