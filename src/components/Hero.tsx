import { GraduationCap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(148,187,32,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(148,187,32,0.1),transparent_50%)]" />
      </div>
      
      {/* Decorative grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,187,32,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,187,32,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <GraduationCap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Plataforma Educacional</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
            Conteúdos para melhorar o{" "}
            <span className="text-primary">entendimento</span> sobre{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              bloqueadores neuromusculares
            </span>
          </h1>
          
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Criado por <span className="text-foreground font-semibold">Elder e Gislane</span>, do curso de Medicina Veterinária - Unisul Tubarão
          </p>
          
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-2 pt-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
            <div className="h-1 w-1 rounded-full bg-primary" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
