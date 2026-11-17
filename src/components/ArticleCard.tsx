import { articlePath, type Article } from '../data/articles';

export type ArticleCardProps = Pick<Article, 'slug' | 'title' | 'excerpt' | 'publishedAt'>;

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  dateStyle: 'long',
  timeZone: 'UTC',
});

export default function ArticleCard({ slug, title, excerpt, publishedAt }: ArticleCardProps) {
  const headingId = `title-${slug}`;

  return (
    <article className="article-card">
      <a className="article-card__link" href={articlePath(slug)} aria-labelledby={headingId}>
        <h2 id={headingId}>{title}</h2>
        <p>{excerpt}</p>
        <div className="article-card__meta">
          <time dateTime={publishedAt}>{dateFormatter.format(new Date(publishedAt))}</time>
          <span className="article-card__action">READ MORE</span>
        </div>
      </a>
    </article>
  );
}
