import { ExternalLink } from "lucide-react";

interface ArticleCardProps {
  title: string;
  description: string;
  url: string;
  category: string;
}

const ArticleCard = ({ title, description, url, category }: ArticleCardProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <div className="bg-card hover:bg-card-hover border border-border rounded-lg p-6 h-full transition-all duration-300 glow-effect">
        <div className="flex items-start justify-between gap-4 mb-3">
          <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full">
            {category}
          </span>
          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>
        <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-3">
          {description}
        </p>
      </div>
    </a>
  );
};

export default ArticleCard;
