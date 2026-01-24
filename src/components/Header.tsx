const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground py-8 px-4 text-center">
      <div className="max-w-2xl mx-auto">
        <span className="text-5xl mb-3 block">🍕</span>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Chame Pizza
        </h1>
        <p className="text-primary-foreground/80 text-sm md:text-base">
          Delivery • Sabor italiano na sua casa
        </p>
      </div>
    </header>
  );
};

export default Header;
