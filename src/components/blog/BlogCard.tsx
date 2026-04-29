import { Link } from 'react-router-dom';
import { Calendar, Tag } from 'lucide-react';

interface BlogCardProps {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  coverImage?: string;
  linkLabel: string;
}

export default function BlogCard({
  slug,
  title,
  description,
  category,
  publishedAt,
  coverImage,
  linkLabel,
}: BlogCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] transition-transform hover:-translate-y-1">
      <div className="aspect-[16/9] bg-[var(--color-bg-tertiary)]">
        {coverImage ? (
          <img src={coverImage} alt={title} className="h-full w-full object-cover" />
        ) : null}
      </div>
      <div className="p-6 space-y-4">
        <div className="flex flex-wrap items-center gap-4 text-xs mono text-[var(--color-text-secondary)]">
          <span className="inline-flex items-center gap-1">
            <Calendar size={14} />
            {publishedAt}
          </span>
          <span className="inline-flex items-center gap-1 capitalize">
            <Tag size={14} />
            {category}
          </span>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-[var(--color-text-primary)]">{title}</h3>
          <p className="mt-3 text-[var(--color-text-secondary)] leading-relaxed">{description}</p>
        </div>
        <Link
          to={`/blog/${slug}`}
          className="inline-flex text-sm font-medium text-[var(--color-accent)] hover:underline"
        >
          {linkLabel}
        </Link>
      </div>
    </article>
  );
}
