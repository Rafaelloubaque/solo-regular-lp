import { BLOG_POSTS, type BlogContentBlock, type BlogPost } from "@/lib/site-data";

export const BLOG_POSTS_STORAGE_KEY = "solo-regular-blog-posts-v1";
export const BLOG_POSTS_CHANGE_EVENT = "solo-regular-blog-posts-changed";

export interface BlogPostDraft {
  image: string;
  name: string;
  description: string;
  ctaLabel: string;
  ctaUrl: string;
}

export interface EditableBlogPost extends BlogPostDraft {
  id: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
}

export interface ManagedBlogPost extends BlogPost {
  source: "fixed" | "custom";
  customId?: string;
  ctaLabel?: string;
  ctaUrl?: string;
}

function canUseStorage() {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

function readString(value: unknown) {
  return typeof value === "string" ? value : "";
}

function normalizeStoredPost(value: unknown): EditableBlogPost | null {
  if (!value || typeof value !== "object") return null;

  const record = value as Record<string, unknown>;
  const id = readString(record.id);
  const slug = readString(record.slug);
  const name = readString(record.name);
  const description = readString(record.description);

  if (!id || !slug || !name || !description) return null;

  return {
    id,
    slug,
    image: readString(record.image),
    name,
    description,
    ctaLabel: readString(record.ctaLabel),
    ctaUrl: readString(record.ctaUrl),
    createdAt: readString(record.createdAt) || new Date().toISOString(),
    updatedAt: readString(record.updatedAt) || new Date().toISOString(),
  };
}

function contentFromDescription(description: string): BlogContentBlock[] {
  return description
    .split(/\n{2,}/)
    .map((text) => text.trim())
    .filter(Boolean)
    .map((text): BlogContentBlock => ({ type: "paragraph", text }));
}

function readingTimeFromDescription(description: string) {
  const words = description.trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 180))} min`;
}

function safeDate(value: string) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? new Date().toISOString().slice(0, 10) : value.slice(0, 10);
}

function editableToManaged(post: EditableBlogPost): ManagedBlogPost {
  return {
    slug: post.slug,
    title: post.name,
    category: "Atualizações",
    categorySlug: "atualizacoes",
    excerpt: post.description,
    date: safeDate(post.createdAt),
    readingTime: readingTimeFromDescription(post.description),
    image: post.image,
    imageAlt: post.name,
    content: contentFromDescription(post.description),
    source: "custom",
    customId: post.id,
    ctaLabel: post.ctaLabel || undefined,
    ctaUrl: post.ctaUrl || undefined,
  };
}

function fixedToManaged(post: BlogPost): ManagedBlogPost {
  return { ...post, source: "fixed" };
}

function notifyBlogPostsChanged() {
  if (!canUseStorage()) return;
  window.dispatchEvent(new Event(BLOG_POSTS_CHANGE_EVENT));
}

function makeId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

export function slugifyBlogPost(value: string) {
  const slug = value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 80);

  return slug || "post";
}

export function getStoredBlogPosts() {
  if (!canUseStorage()) return [];

  try {
    const raw = window.localStorage.getItem(BLOG_POSTS_STORAGE_KEY);
    if (!raw) return [];

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    return parsed
      .map(normalizeStoredPost)
      .filter((post): post is EditableBlogPost => Boolean(post));
  } catch {
    return [];
  }
}

function writeStoredBlogPosts(posts: EditableBlogPost[]) {
  if (!canUseStorage()) return;
  window.localStorage.setItem(BLOG_POSTS_STORAGE_KEY, JSON.stringify(posts));
}

function createUniqueSlug(name: string, posts: EditableBlogPost[], currentId?: string) {
  const used = new Set([
    ...BLOG_POSTS.map((post) => post.slug),
    ...posts.filter((post) => post.id !== currentId).map((post) => post.slug),
  ]);

  const baseSlug = slugifyBlogPost(name);
  let slug = baseSlug;
  let index = 2;

  while (used.has(slug)) {
    slug = `${baseSlug}-${index}`;
    index += 1;
  }

  return slug;
}

function normalizeDraft(draft: BlogPostDraft) {
  const normalized = {
    image: draft.image.trim(),
    name: draft.name.trim(),
    description: draft.description.trim(),
    ctaLabel: draft.ctaLabel.trim(),
    ctaUrl: draft.ctaUrl.trim(),
  };

  if (!normalized.image) throw new Error("Informe a imagem do post.");
  if (!normalized.name) throw new Error("Informe o nome do post.");
  if (!normalized.description) throw new Error("Informe a descrição do post.");

  const hasPartialCta = Boolean(normalized.ctaLabel) !== Boolean(normalized.ctaUrl);
  if (hasPartialCta) {
    throw new Error("Informe texto e link do CTA, ou deixe os dois campos vazios.");
  }

  return normalized;
}

export function saveBlogPost(draft: BlogPostDraft, editingId?: string) {
  const normalized = normalizeDraft(draft);
  const posts = getStoredBlogPosts();
  const existingPost = editingId ? posts.find((post) => post.id === editingId) : undefined;
  const now = new Date().toISOString();

  const savedPost: EditableBlogPost = {
    ...normalized,
    id: existingPost?.id ?? makeId(),
    slug: createUniqueSlug(normalized.name, posts, existingPost?.id),
    createdAt: existingPost?.createdAt ?? now,
    updatedAt: now,
  };

  const nextPosts = existingPost
    ? posts.map((post) => (post.id === existingPost.id ? savedPost : post))
    : [savedPost, ...posts];

  writeStoredBlogPosts(nextPosts);
  notifyBlogPostsChanged();

  return editableToManaged(savedPost);
}

export function deleteBlogPost(id: string) {
  const nextPosts = getStoredBlogPosts().filter((post) => post.id !== id);
  writeStoredBlogPosts(nextPosts);
  notifyBlogPostsChanged();
}

export function getManagedBlogPosts() {
  const fixedPosts = BLOG_POSTS.map(fixedToManaged);
  const customPosts = getStoredBlogPosts().map(editableToManaged);

  return [...customPosts, ...fixedPosts].sort((a, b) => {
    const timeA = new Date(a.date).getTime();
    const timeB = new Date(b.date).getTime();
    return (Number.isNaN(timeB) ? 0 : timeB) - (Number.isNaN(timeA) ? 0 : timeA);
  });
}

export function findManagedBlogPost(slug: string) {
  return getManagedBlogPosts().find((post) => post.slug === slug) ?? null;
}

export function getFixedManagedBlogPosts() {
  return BLOG_POSTS.map(fixedToManaged);
}

export function postToDraft(post: ManagedBlogPost): BlogPostDraft {
  return {
    image: post.image ?? "",
    name: post.title,
    description: post.excerpt,
    ctaLabel: post.ctaLabel ?? "",
    ctaUrl: post.ctaUrl ?? "",
  };
}
