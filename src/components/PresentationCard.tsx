import { ExternalLink, GraduationCap, Presentation, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const PresentationCard = () => {
  return (
    <section className="px-4 md:px-8 py-8 flex justify-center">
      <a
        href="https://www.canva.com/design/DAG43p_myyA/_e1D2hQoeRh6PG8UnepJWw/view?utm_content=DAG43p_myyA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h9808e641a0f"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button 
          size="lg"
          className="h-auto py-6 px-8 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-[length:200%_200%] animate-tech-gradient hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:shadow-[0_0_50px_rgba(34,197,94,0.5)] group relative overflow-hidden"
        >
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <GraduationCap className="h-6 w-6 animate-bounce" style={{ animationDelay: '0s' }} />
              <Presentation className="h-6 w-6 animate-bounce" style={{ animationDelay: '0.2s' }} />
              <Sparkles className="h-6 w-6 animate-bounce" style={{ animationDelay: '0.4s' }} />
            </div>
            <div className="flex flex-col items-start gap-1">
              <span className="text-lg font-bold text-white">Apresentação Completa</span>
              <span className="text-sm text-white/90 flex items-center gap-1">
                Clique para acessar os slides
                <ExternalLink className="h-3 w-3" />
              </span>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        </Button>
      </a>
    </section>
  );
};

export default PresentationCard;
