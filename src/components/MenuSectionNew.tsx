import ProductCard from "./ProductCard";
import { MenuItem } from "@/data/menuData";

interface MenuSectionNewProps {
  title: string;
  emoji: string;
  items: MenuItem[];
}

const MenuSectionNew = ({ title, emoji, items }: MenuSectionNewProps) => {
  return (
    <section className="mb-10">
      <h2 className="section-title">
        <span className="text-3xl">{emoji}</span>
        {title}
      </h2>
      
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default MenuSectionNew;
