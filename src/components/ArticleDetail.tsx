import type { Article } from '../data/articles';

export default function ArticleDetail({ article }: { article: Article }) {
  return (
    <div className="post-page">
      <article className="post-panel" aria-labelledby="page-title">
        <h1 className="page-title" id="page-title">{article.title}</h1>
        <div className="post-content">
          <h2>{article.content.heading}</h2>
          <ul>
            {article.content.points.map((point) => <li key={point}>{point}</li>)}
          </ul>
          {article.content.closing && <p>{article.content.closing}</p>}
        </div>
      </article>
    </div>
  );
}
