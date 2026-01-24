import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface OrderFormProps {
  pizzaName: string;
  children: React.ReactNode;
}

const OrderForm = ({ pizzaName, children }: OrderFormProps) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const whatsappNumber = "5511981627116";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `🍕 *NOVO PEDIDO - Chame Pizza*

👤 *Nome:* ${name.trim()}
📍 *Endereço:* ${address.trim()}
📱 *Telefone:* ${phone.trim()}
🍕 *Pedido:* ${pizzaName}

Aguardo confirmação! 🙏`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappLink, "_blank");
    
    // Reset form
    setName("");
    setAddress("");
    setPhone("");
    setOpen(false);
  };

  const isFormValid = name.trim() && address.trim() && phone.trim();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-card border-primary/20">
        <DialogHeader>
          <DialogTitle className="text-xl text-center">
            🍕 Fazer Pedido
          </DialogTitle>
        </DialogHeader>
        
        <div className="bg-primary/10 rounded-lg p-3 text-center mb-4">
          <span className="font-semibold text-primary">{pizzaName}</span>
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
              onChange={(e) => setPhone(e.target.value)}
              maxLength={20}
              required
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
            disabled={!isFormValid}
          >
            <span className="mr-2">📲</span>
            Enviar Pedido no WhatsApp
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default OrderForm;
