interface BlogCategoryFilterProps {
  categories: string[];
  activeCategory: string;
  allLabel: string;
  onChange: (category: string) => void;
}

export default function BlogCategoryFilter({
  categories,
  activeCategory,
  allLabel,
  onChange,
}: BlogCategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3">
      <button
        type="button"
        onClick={() => onChange('all')}
        className={`rounded-full border px-4 py-2 text-sm transition-colors ${
          activeCategory === 'all'
            ? 'border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-bg-primary)]'
            : 'border-[var(--color-border)] text-[var(--color-text-secondary)]'
        }`}
      >
        {allLabel}
      </button>
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onChange(category)}
          className={`rounded-full border px-4 py-2 text-sm capitalize transition-colors ${
            activeCategory === category
              ? 'border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-bg-primary)]'
              : 'border-[var(--color-border)] text-[var(--color-text-secondary)]'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
