interface BlogArticleRendererProps {
  content: Array<
    | { type: 'paragraph'; text: string }
    | { type: 'image'; src: string; alt: string }
    | { type: 'video'; src: string }
  >;
}

export default function BlogArticleRenderer({ content }: BlogArticleRendererProps) {
  return (
    <div className="space-y-8">
      {content.map((block, index) => {
        if (block.type === 'paragraph') {
          return (
            <p key={index} className="text-[var(--color-text-secondary)] leading-8">
              {block.text}
            </p>
          );
        }

        if (block.type === 'image') {
          return (
            <figure key={index} className="space-y-3">
              <img src={block.src} alt={block.alt} className="w-full rounded-2xl border border-[var(--color-border)]" />
              <figcaption className="text-sm text-[var(--color-text-secondary)]">{block.alt}</figcaption>
            </figure>
          );
        }

        return (
          <div key={index} className="overflow-hidden rounded-2xl border border-[var(--color-border)]">
            <iframe
              src={block.src}
              title="Embedded video"
              className="aspect-video w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        );
      })}
    </div>
  );
}
