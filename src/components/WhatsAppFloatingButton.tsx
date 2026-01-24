import { MessageCircle } from "lucide-react";

const WhatsAppFloatingButton = () => {
  const whatsappNumber = "5511981627116";
  const message = encodeURIComponent("Olá! Gostaria de fazer um pedido.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-accent text-accent-foreground 
                 w-14 h-14 rounded-full flex items-center justify-center 
                 shadow-lg hover:scale-110 transition-transform duration-200
                 animate-pulse hover:animate-none"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};

export default WhatsAppFloatingButton;
