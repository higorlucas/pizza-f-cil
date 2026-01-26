import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCart } from "@/contexts/CartContext";

interface CheckoutFormProps {
  onBack: () => void;
}

// Formatar telefone automaticamente
const formatPhone = (value: string): string => {
  const numbers = value.replace(/\D/g, "");
  
  if (numbers.length <= 2) {
    return numbers;
  } else if (numbers.length <= 7) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
  } else if (numbers.length <= 11) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
  }
  return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
};

const CheckoutForm = ({ onBack }: CheckoutFormProps) => {
  const { items, total, clearCart } = useCart();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const whatsappNumber = "5511981627116";

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setPhone(formatted);
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Montar lista de itens
    const itemsList = items
      .map((item) => `• ${item.quantity}x ${item.name} - ${formatPrice(item.price * item.quantity)}`)
      .join("\n");

    const message = `🍕 *NOVO PEDIDO - Chame Pizza*

👤 *Nome:* ${name.trim()}
📍 *Endereço:* ${address.trim()}
📱 *Telefone:* ${phone.trim()}

📋 *Itens do Pedido:*
${itemsList}

💰 *Total:* ${formatPrice(total)}

Aguardo confirmação! 🙏`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappLink, "_blank");
    
    clearCart();
    setName("");
    setAddress("");
    setPhone("");
  };

  const isFormValid = name.trim() && address.trim() && phone.replace(/\D/g, "").length >= 10;

  return (
    <div className="flex-1 flex flex-col">
      <div className="p-4">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={onBack}
          className="mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar ao carrinho
        </Button>

        {/* Resumo do pedido */}
        <div className="bg-muted/50 rounded-lg p-4 mb-6">
          <h3 className="font-semibold mb-3">📋 Resumo do Pedido</h3>
          <div className="space-y-2 text-sm">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span>{item.quantity}x {item.name}</span>
                <span className="font-medium">{formatPrice(item.price * item.quantity)}</span>
              </div>
            ))}
            <div className="border-t pt-2 mt-2 flex justify-between font-bold">
              <span>Total</span>
              <span className="text-primary">{formatPrice(total)}</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Seu Nome *</Label>
            <Input
              id="name"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={100}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Endereço Completo *</Label>
            <Input
              id="address"
              placeholder="Rua, número, bairro, complemento"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              maxLength={200}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Seu Telefone *</Label>
            <Input
              id="phone"
              placeholder="(11) 99999-9999"
              value={phone}
              onChange={handlePhoneChange}
              maxLength={16}
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full h-12 text-base bg-accent hover:bg-accent/90"
            disabled={!isFormValid}
          >
            <span className="mr-2">📲</span>
            Enviar Pedido no WhatsApp
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
