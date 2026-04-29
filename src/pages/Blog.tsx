import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import BlogCard from '@/components/blog/BlogCard';
import BlogCategoryFilter from '@/components/blog/BlogCategoryFilter';
import BlogPagination from '@/components/blog/BlogPagination';
import { blogCategories, blogArticleSlugs } from '@/data/blog';

export default function Blog() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  const articles = useMemo(
    () =>
      blogArticleSlugs.map((slug) => t(`blog.items.${slug}`, { returnObjects: true }) as any),
    [t],
  );

  const filteredArticles = activeCategory === 'all'
    ? articles
    : articles.filter((article) => article.category === activeCategory);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
  const paginatedArticles = filteredArticles.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className="py-24">
      <div className="container space-y-10">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-[var(--color-text-primary)]">{t('blog.page.title')}</h1>
          <p className="max-w-3xl text-[var(--color-text-secondary)]">{t('blog.page.description')}</p>
        </div>

        <BlogCategoryFilter
          categories={blogCategories as unknown as string[]}
          activeCategory={activeCategory}
          allLabel={t('blog.page.allCategories')}
          onChange={handleCategoryChange}
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {paginatedArticles.map((article: any) => (
            <BlogCard
              key={article.slug}
              slug={article.slug}
              title={article.title}
              description={article.description}
              category={article.category}
              publishedAt={article.publishedAt}
              coverImage={article.coverImage}
              linkLabel={t('blog.page.readMore')}
            />
          ))}
        </div>

        <BlogPagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
    </section>
  );
}
