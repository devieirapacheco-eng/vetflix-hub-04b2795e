import ArticleCard from "./ArticleCard";

interface Article {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
}

interface ArticlesSectionProps {
  articles: Article[];
}

const ArticlesSection = ({ articles }: ArticlesSectionProps) => {
  return (
    <section className="py-12 px-4 md:px-8">
      <h2 className="text-2xl md:text-3xl font-display font-bold mb-8">
        📚 Artigos Científicos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            title={article.title}
            description={article.description}
            url={article.url}
            category={article.category}
          />
        ))}
      </div>
    </section>
  );
};

export default ArticlesSection;
