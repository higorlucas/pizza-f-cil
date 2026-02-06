import { useState } from "react";
import { ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { useCart } from "@/contexts/CartContext";
import { MenuItem } from "@/data/menuData";
import { PizzaFlavor, CrustOption, categoryFlavorsMap, crustOptions } from "@/data/flavorsData";
import { toast } from "sonner";

interface FlavorSelectionModalProps {
  item: MenuItem;
  open: boolean;
  onClose: () => void;
}

const FlavorSelectionModal = ({ item, open, onClose }: FlavorSelectionModalProps) => {
  const { addItem } = useCart();
  const [selectedFlavor, setSelectedFlavor] = useState<string>("");
  const [selectedCrust, setSelectedCrust] = useState<string>("");

  const flavors = categoryFlavorsMap[item.category] || [];
  const selectedFlavorData = flavors.find((f) => f.id === selectedFlavor);
  const selectedCrustData = crustOptions.find((c) => c.id === selectedCrust);

  // Determine how many flavors user must pick based on item name
  const flavorCount = getFlavorCount(item.name);

  const canAdd = selectedFlavor !== "" && selectedCrust !== "";

  const totalPrice = (selectedFlavorData?.price ?? item.price) + (selectedCrustData?.extraPrice ?? 0);

  const handleAdd = () => {
    if (!canAdd) return;

    const flavorName = selectedFlavorData?.name ?? "";
    const crustName = selectedCrustData?.name ?? "";

    addItem({
      id: `${item.id}-${selectedFlavor}-${selectedCrust}`,
      name: `${item.name} - ${flavorName}`,
      price: totalPrice,
      category: item.category,
      details: `${crustName}`,
    });

    toast.success("Adicionado ao carrinho!", {
      description: `${flavorName} • ${crustName}`,
      duration: 2500,
    });

    // Reset and close
    setSelectedFlavor("");
    setSelectedCrust("");
    onClose();
  };

  const handleClose = () => {
    setSelectedFlavor("");
    setSelectedCrust("");
    onClose();
  };

  return (
    <Sheet open={open} onOpenChange={(v) => !v && handleClose()}>
      <SheetContent side="bottom" className="h-[90vh] sm:h-[85vh] rounded-t-2xl p-0 flex flex-col">
        <SheetHeader className="p-4 border-b shrink-0">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0" onClick={handleClose}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="min-w-0">
              <SheetTitle className="text-left text-base">{item.name}</SheetTitle>
              <SheetDescription className="text-left text-xs">
                {item.category} • {item.priceFormatted}
              </SheetDescription>
            </div>
          </div>
        </SheetHeader>

        {/* Warning about multi-flavor pricing */}
        {flavorCount > 1 && (
          <div className="mx-4 mt-3 p-3 bg-muted rounded-lg text-sm text-muted-foreground">
            <strong>Importante:</strong> A pizza de mais de 1 sabor será cobrada pelo preço cheio do sabor mais caro.
          </div>
        )}

        <ScrollArea className="flex-1">
          <div className="p-4 space-y-6">
            {/* Flavor selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-foreground">Escolha um sabor</h3>
                <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
                  OBRIGATÓRIO
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">Escolha 1 opção.</p>

              <RadioGroup value={selectedFlavor} onValueChange={setSelectedFlavor} className="space-y-1">
                {flavors.map((flavor) => (
                  <label
                    key={flavor.id}
                    htmlFor={`flavor-${flavor.id}`}
                    className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                      selectedFlavor === flavor.id
                        ? "border-primary bg-primary/5"
                        : "border-border hover:bg-muted/50"
                    }`}
                  >
                    <RadioGroupItem value={flavor.id} id={`flavor-${flavor.id}`} className="mt-1 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start gap-2">
                        <span className="font-medium text-sm text-foreground">{flavor.name}</span>
                        <span className="text-sm font-semibold text-primary whitespace-nowrap">
                          + {flavor.priceFormatted}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{flavor.description}</p>
                    </div>
                  </label>
                ))}
              </RadioGroup>
            </div>

            <Separator />

            {/* Crust selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-foreground">Escolha a sua Preferência</h3>
                <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
                  OBRIGATÓRIO
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">Escolha 1 opção.</p>

              <RadioGroup value={selectedCrust} onValueChange={setSelectedCrust} className="space-y-1">
                {crustOptions.map((crust) => (
                  <label
                    key={crust.id}
                    htmlFor={`crust-${crust.id}`}
                    className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                      selectedCrust === crust.id
                        ? "border-primary bg-primary/5"
                        : "border-border hover:bg-muted/50"
                    }`}
                  >
                    <RadioGroupItem value={crust.id} id={`crust-${crust.id}`} className="shrink-0" />
                    <div className="flex-1 flex justify-between items-center gap-2">
                      <span className="text-sm text-foreground">{crust.name}</span>
                      {crust.extraPrice > 0 && (
                        <span className="text-sm font-semibold text-primary whitespace-nowrap">
                          {crust.extraPriceFormatted}
                        </span>
                      )}
                    </div>
                  </label>
                ))}
              </RadioGroup>
            </div>
          </div>
        </ScrollArea>

        {/* Footer */}
        <div className="border-t p-4 shrink-0">
          <Button
            className="w-full h-12 text-base whatsapp-button"
            onClick={handleAdd}
            disabled={!canAdd}
          >
            <Check className="h-5 w-5 mr-2" />
            Adicionar • {formatPrice(totalPrice)}
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

function getFlavorCount(name: string): number {
  if (name.includes("4 Sabores")) return 4;
  if (name.includes("3 Sabores")) return 3;
  if (name.includes("2 Sabores")) return 2;
  return 1;
}

function formatPrice(price: number): string {
  return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export default FlavorSelectionModal;
