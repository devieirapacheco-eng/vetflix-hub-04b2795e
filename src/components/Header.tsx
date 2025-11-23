import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-4 py-3 flex items-center gap-4">
        <img src={logo} alt="GEFlix Logo" className="h-14 w-14 md:h-16 md:w-16 flex-shrink-0 object-contain" />
        <div>
          <h1 className="text-xl md:text-2xl font-display font-bold text-primary">
            GEFlix
          </h1>
          <p className="text-xs md:text-sm text-muted-foreground">
            Medicina Veterinária Unisul
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
