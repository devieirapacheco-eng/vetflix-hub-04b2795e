import { Play } from "lucide-react";

interface VideoCardProps {
  title: string;
  description: string;
  videoId: string;
  onClick: () => void;
}

const VideoCard = ({ title, description, videoId, onClick }: VideoCardProps) => {
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer flex-shrink-0 w-80"
    >
      <div className="relative rounded-lg overflow-hidden bg-card glow-effect">
        <img
          src={thumbnailUrl}
          alt={title}
          className="w-full h-44 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-primary/90 rounded-full p-4">
            <Play className="w-8 h-8 text-primary-foreground fill-current" />
          </div>
        </div>
      </div>
      <div className="mt-3 space-y-1">
        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
