interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function BlogPagination({ currentPage, totalPages, onPageChange }: BlogPaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="flex items-center gap-3">
      {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
        <button
          type="button"
          key={page}
          onClick={() => onPageChange(page)}
          className={`min-w-10 rounded-full border px-4 py-2 text-sm transition-colors ${
            currentPage === page
              ? 'border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-bg-primary)]'
              : 'border-[var(--color-border)] text-[var(--color-text-secondary)]'
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
}
