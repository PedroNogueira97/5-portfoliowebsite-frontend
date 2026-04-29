export type BlogContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'image'; src: string; alt: string }
  | { type: 'video'; src: string };

export type BlogArticleContent = {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  coverImage?: string;
  content: BlogContentBlock[];
};

export type BlogArticleLocale = 'en' | 'pt';

export const blogCategories = [
  'development',
  'backend',
  'frontend',
  'devops',
  'ai',
  'career',
  'projects',
  'tutorials',
] as const;

export const blogArticleSlugs = ['ai-jail'] as const;
