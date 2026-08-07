import type { BlogContentBlock } from "@/lib/site-data";

export type PublicBlogPost = {
  id?: number;
  slug: string;
  name?: string;
  title?: string;
  description?: string;
  excerpt?: string;
  content?: BlogContentBlock[];
  imageUrl?: string | null;
  image?: string | null;
  imageAlt?: string | null;
  ctaLabel?: string | null;
  ctaUrl?: string | null;
  status?: "draft" | "published" | string;
  publishedAt?: string | null;
  date?: string | null;
  readingTime?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

const configuredEndpoint =
  import.meta.env.VITE_CRM_BLOG_ENDPOINT?.trim() ||
  import.meta.env.VITE_BLOG_ENDPOINT?.trim() ||
  "https://api.soloregular.com/api/public/blog";

export const BLOG_PUBLIC_ENDPOINT = configuredEndpoint.replace(/\/+$/, "");

async function fetchBlogJson<T>(url: string): Promise<T> {
  const response = await fetch(url, {
    headers: { Accept: "application/json" },
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(data?.error || "Não foi possível carregar o blog.");
  }

  return data as T;
}

export async function fetchPublishedBlogPosts(limit?: number): Promise<PublicBlogPost[]> {
  const searchParams = new URLSearchParams();

  if (limit) {
    searchParams.set("limit", String(limit));
  }

  const query = searchParams.toString();

  return fetchBlogJson<PublicBlogPost[]>(
    query ? `${BLOG_PUBLIC_ENDPOINT}?${query}` : BLOG_PUBLIC_ENDPOINT,
  );
}

export async function fetchPublishedBlogPost(slug: string): Promise<PublicBlogPost> {
  return fetchBlogJson<PublicBlogPost>(`${BLOG_PUBLIC_ENDPOINT}/${encodeURIComponent(slug)}`);
}

export function getBlogPostTitle(post: PublicBlogPost): string {
  return post.name || post.title || "Artigo";
}

export function getBlogPostDescription(post: PublicBlogPost): string {
  return post.description || post.excerpt || "";
}

export function getBlogPostDate(post: PublicBlogPost): string {
  return post.publishedAt || post.date || post.createdAt || new Date().toISOString();
}

export function getBlogPostImage(post: PublicBlogPost): string | null {
  return post.imageUrl || post.image || null;
}

export function resolveBlogImageUrl(imageUrl?: string | null): string {
  if (!imageUrl) return "";

  if (/^(data:|https?:\/\/)/i.test(imageUrl)) {
    return imageUrl;
  }

  if (!imageUrl.startsWith("/")) {
    return imageUrl;
  }

  try {
    const apiOrigin = new URL(BLOG_PUBLIC_ENDPOINT).origin;
    return `${apiOrigin}${imageUrl}`;
  } catch {
    return imageUrl;
  }
}
