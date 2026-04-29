import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import BlogCard from '@/components/blog/BlogCard';
import { blogArticleSlugs } from '@/data/blog';

export default function BlogSection() {
  const { t } = useTranslation();
  const article = t(`blog.items.${blogArticleSlugs[0]}`, { returnObjects: true }) as any;

  return (
    <section className="py-24 bg-[var(--color-bg-secondary)]">
      <div className="container space-y-10">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="mono text-sm text-[var(--color-accent)]">05.</p>
            <h2 className="section-title">{t('blog.home.title')}</h2>
          </div>
          <Link to="/blog" className="text-sm text-[var(--color-accent)] hover:underline">
            {t('blog.home.viewAll')}
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <BlogCard
            slug={article.slug}
            title={article.title}
            description={article.description}
            category={article.category}
            publishedAt={article.publishedAt}
            coverImage={article.coverImage}
            linkLabel={t('blog.home.readMore')}
          />
        </div>
      </div>
    </section>
  );
}
