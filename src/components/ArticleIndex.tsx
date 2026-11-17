import type { Article } from '../data/articles';
import ArticleCard from './ArticleCard';

export default function ArticleIndex({ articles }: { articles: readonly Article[] }) {
  return (
    <section className="article-index" aria-labelledby="page-title">
      <h1 className="page-title" id="page-title">Latest Articles</h1>
      <div className="article-grid">
        {articles.map((article) => <ArticleCard key={article.slug} {...article} />)}
      </div>
    </section>
  );
}
