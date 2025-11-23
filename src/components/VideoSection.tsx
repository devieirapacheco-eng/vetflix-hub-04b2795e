import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import VideoCard from "./VideoCard";
import VideoModal from "./VideoModal";
import { Button } from "./ui/button";

interface Video {
  id: string;
  title: string;
  description: string;
  videoId: string;
}

interface VideoSectionProps {
  title: string;
  videos: Video[];
}

const VideoSection = ({ title, videos }: VideoSectionProps) => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const targetScroll =
        direction === "left"
          ? currentScroll - scrollAmount
          : currentScroll + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <section className="py-8">
        <h2 className="text-2xl md:text-3xl font-display font-bold mb-6 px-4 md:px-8">
          {title}
        </h2>
        <div className="relative group">
          {/* Left Arrow */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scroll("left")}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-opacity duration-300 border border-border"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="px-4 md:px-8 overflow-x-auto scrollbar-hide scroll-smooth"
          >
            <div className="flex gap-4 pb-4">
              {videos.map((video) => (
                <VideoCard
                  key={video.id}
                  title={video.title}
                  description={video.description}
                  videoId={video.videoId}
                  onClick={() => setSelectedVideo(video)}
                />
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scroll("right")}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-opacity duration-300 border border-border"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </section>

      {selectedVideo && (
        <VideoModal
          isOpen={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
          videoId={selectedVideo.videoId}
          title={selectedVideo.title}
        />
      )}
    </>
  );
};

export default VideoSection;
