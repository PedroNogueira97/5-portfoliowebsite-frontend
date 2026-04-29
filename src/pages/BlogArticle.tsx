import { Navigate, Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { blogArticleSlugs, blogCategories } from '@/data/blog';
import BlogArticleRenderer from '@/components/blog/BlogArticleRenderer';

export default function BlogArticle() {
  const { slug } = useParams();
  const { t } = useTranslation();

  if (!slug || !blogArticleSlugs.includes(slug as any)) {
    return <Navigate to="/blog" replace />;
  }

  const article = t(`blog.items.${slug}`, { returnObjects: true }) as any;

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <section className="py-24">
      <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_280px]">
        <article className="space-y-8">
          <Link to="/blog" className="text-sm text-[var(--color-accent)] hover:underline">
            {t('blog.page.backToBlog')}
          </Link>
          <header className="space-y-4">
            <p className="mono text-sm text-[var(--color-text-secondary)]">
              {article.publishedAt} · {article.category}
            </p>
            <h1 className="text-4xl font-bold text-[var(--color-text-primary)]">{article.title}</h1>
            <p className="max-w-3xl text-[var(--color-text-secondary)]">{article.description}</p>
          </header>

          {article.coverImage ? (
            <img src={article.coverImage} alt={article.title} className="w-full rounded-2xl border border-[var(--color-border)]" />
          ) : null}

          <BlogArticleRenderer content={article.content ?? []} />
        </article>

        <aside className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6">
          <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">{t('blog.page.categories')}</h2>
          <div className="mt-4 space-y-2">
            {blogCategories.map((category) => (
              <p key={category} className="capitalize text-[var(--color-text-secondary)]">
                {t(`blog.categories.${category}`)}
              </p>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
