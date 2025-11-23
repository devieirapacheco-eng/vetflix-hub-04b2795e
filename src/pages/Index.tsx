import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PresentationCard from "@/components/PresentationCard";
import VideoSection from "@/components/VideoSection";
import ArticlesSection from "@/components/ArticlesSection";
import { videoCategories } from "@/data/videos";
import { articles } from "@/data/articles";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Header Spacer */}
      <div className="h-[70px]" />

      {/* Hero Banner */}
      <Hero />

      {/* Presentation Card */}
      <main className="container mx-auto">
        <PresentationCard />

        {/* Video Categories */}
        {videoCategories.map((category) => (
          <VideoSection
            key={category.id}
            title={category.title}
            videos={category.videos}
          />
        ))}

        {/* Articles Section */}
        <ArticlesSection articles={articles} />
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16 py-8 text-center text-muted-foreground">
        <p className="text-sm">
          GEFlix © 2025 - Medicina Veterinária Unisul
        </p>
      </footer>
    </div>
  );
};

export default Index;
