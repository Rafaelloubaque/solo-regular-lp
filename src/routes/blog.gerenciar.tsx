import { useEffect, useMemo, useState, type FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  deleteBlogPost,
  getManagedBlogPosts,
  postToDraft,
  saveBlogPost,
  type BlogPostDraft,
  type ManagedBlogPost,
} from "@/lib/blog-store";
import {
  ArrowLeft,
  ExternalLink,
  ImageIcon,
  PencilLine,
  Plus,
  Save,
  Trash2,
  X,
} from "lucide-react";

export const Route = createFileRoute("/blog/gerenciar")({
  head: () => ({
    meta: [
      { title: "Gerenciar Blog | Solo Regular" },
      {
        name: "description",
        content: "Área de gerenciamento dos posts do blog da Solo Regular.",
      },
    ],
    links: [{ rel: "canonical", href: "/blog/gerenciar" }],
  }),
  component: BlogManagePage,
});

const EMPTY_FORM: BlogPostDraft = {
  image: "",
  name: "",
  description: "",
  ctaLabel: "",
  ctaUrl: "",
};

function BlogManagePage() {
  const [posts, setPosts] = useState<ManagedBlogPost[]>(() => getManagedBlogPosts());
  const [form, setForm] = useState<BlogPostDraft>(EMPTY_FORM);
  const [editingId, setEditingId] = useState<string | undefined>();
  const [status, setStatus] = useState("");

  const customPosts = useMemo(() => posts.filter((post) => post.source === "custom"), [posts]);
  const fixedPosts = useMemo(() => posts.filter((post) => post.source === "fixed"), [posts]);
  const isEditing = Boolean(editingId);

  useEffect(() => {
    setPosts(getManagedBlogPosts());
  }, []);

  function refreshPosts() {
    setPosts(getManagedBlogPosts());
  }

  function updateField(field: keyof BlogPostDraft, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function resetForm() {
    setForm(EMPTY_FORM);
    setEditingId(undefined);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      saveBlogPost(form, editingId);
      refreshPosts();
      setStatus(isEditing ? "Post atualizado." : "Post criado.");
      resetForm();
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Não foi possível salvar o post.");
    }
  }

  function handleEdit(post: ManagedBlogPost) {
    if (!post.customId) return;

    setEditingId(post.customId);
    setForm(postToDraft(post));
    setStatus("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleDelete(post: ManagedBlogPost) {
    if (!post.customId) return;

    const confirmed = window.confirm(`Remover o post "${post.title}"?`);
    if (!confirmed) return;

    deleteBlogPost(post.customId);
    refreshPosts();
    if (editingId === post.customId) resetForm();
    setStatus("Post removido.");
  }

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Gerenciar posts"
        description="Posts publicados e novos conteúdos do blog."
        breadcrumb={[
          { label: "Início", to: "/" },
          { label: "Blog", to: "/blog" },
          { label: "Gerenciar" },
        ]}
      />

      <section className="bg-background py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
            <Button asChild variant="outline">
              <Link to="/blog">
                <ArrowLeft className="size-4" />
                Voltar ao blog
              </Link>
            </Button>
            <Button type="button" variant="secondary" onClick={resetForm}>
              <Plus className="size-4" />
              Novo post
            </Button>
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,440px)_1fr]">
            <form
              onSubmit={handleSubmit}
              className="rounded-lg border border-border bg-card p-5 shadow-sm"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="font-serif text-2xl text-deep">
                    {isEditing ? "Editar post" : "Novo post"}
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">Conteúdo do blog</p>
                </div>
                {isEditing ? (
                  <Button type="button" variant="ghost" size="icon" onClick={resetForm}>
                    <X className="size-4" />
                    <span className="sr-only">Cancelar edição</span>
                  </Button>
                ) : null}
              </div>

              <div className="mt-6 space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="blog-image">Imagem</Label>
                  <Input
                    id="blog-image"
                    value={form.image}
                    onChange={(event) => updateField("image", event.target.value)}
                    placeholder="https://..."
                    required
                  />
                  <div className="aspect-[16/9] overflow-hidden rounded-md border border-border bg-muted">
                    {form.image ? (
                      <img src={form.image} alt="" className="h-full w-full object-cover" />
                    ) : (
                      <div className="flex h-full items-center justify-center text-muted-foreground">
                        <ImageIcon className="size-8" />
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="blog-name">Nome</Label>
                  <Input
                    id="blog-name"
                    value={form.name}
                    onChange={(event) => updateField("name", event.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="blog-description">Descrição</Label>
                  <Textarea
                    id="blog-description"
                    value={form.description}
                    onChange={(event) => updateField("description", event.target.value)}
                    rows={7}
                    required
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="blog-cta-label">CTA texto</Label>
                    <Input
                      id="blog-cta-label"
                      value={form.ctaLabel}
                      onChange={(event) => updateField("ctaLabel", event.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="blog-cta-url">CTA link</Label>
                    <Input
                      id="blog-cta-url"
                      value={form.ctaUrl}
                      onChange={(event) => updateField("ctaUrl", event.target.value)}
                      placeholder="/contato"
                    />
                  </div>
                </div>
              </div>

              {status ? (
                <p className="mt-4 text-sm font-medium text-primary" role="status">
                  {status}
                </p>
              ) : null}

              <div className="mt-6 flex flex-wrap gap-3">
                <Button type="submit">
                  <Save className="size-4" />
                  {isEditing ? "Atualizar post" : "Salvar post"}
                </Button>
                {isEditing ? (
                  <Button type="button" variant="outline" onClick={resetForm}>
                    Cancelar
                  </Button>
                ) : null}
              </div>
            </form>

            <div className="space-y-8">
              <section>
                <div className="mb-4 flex items-center justify-between gap-3">
                  <h2 className="font-serif text-2xl text-deep">Posts do CRUD</h2>
                  <Badge variant="secondary">{customPosts.length}</Badge>
                </div>

                {customPosts.length ? (
                  <div className="space-y-4">
                    {customPosts.map((post) => (
                      <PostRow
                        key={post.slug}
                        post={post}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="rounded-lg border border-dashed border-border bg-card p-6 text-sm text-muted-foreground">
                    Nenhum post criado no CRUD.
                  </div>
                )}
              </section>

              <section>
                <div className="mb-4 flex items-center justify-between gap-3">
                  <h2 className="font-serif text-2xl text-deep">Posts preservados</h2>
                  <Badge variant="outline">{fixedPosts.length}</Badge>
                </div>

                <div className="space-y-4">
                  {fixedPosts.map((post) => (
                    <PostRow key={post.slug} post={post} />
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

interface PostRowProps {
  post: ManagedBlogPost;
  onEdit?: (post: ManagedBlogPost) => void;
  onDelete?: (post: ManagedBlogPost) => void;
}

function PostRow({ post, onEdit, onDelete }: PostRowProps) {
  const isCustom = post.source === "custom";

  return (
    <article className="grid gap-4 rounded-lg border border-border bg-card p-4 shadow-sm sm:grid-cols-[132px_1fr] lg:grid-cols-[132px_1fr_auto]">
      <div className="aspect-[16/9] overflow-hidden rounded-md bg-muted">
        {post.image ? (
          <img src={post.image} alt={post.imageAlt ?? ""} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full items-center justify-center text-muted-foreground">
            <ImageIcon className="size-6" />
          </div>
        )}
      </div>

      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant={isCustom ? "default" : "outline"}>{isCustom ? "CRUD" : "Original"}</Badge>
          <span className="text-xs text-muted-foreground">{post.category}</span>
        </div>
        <h3 className="mt-2 font-serif text-lg leading-snug text-deep">{post.title}</h3>
        <p className="mt-2 max-h-20 overflow-hidden text-sm leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 sm:col-start-2 lg:col-start-auto lg:flex-col lg:items-stretch">
        <Button asChild variant="outline" size="sm">
          <Link to="/blog/$slug" params={{ slug: post.slug }}>
            <ExternalLink className="size-4" />
            Abrir
          </Link>
        </Button>

        {isCustom ? (
          <>
            <Button type="button" variant="secondary" size="sm" onClick={() => onEdit?.(post)}>
              <PencilLine className="size-4" />
              Editar
            </Button>
            <Button type="button" variant="destructive" size="sm" onClick={() => onDelete?.(post)}>
              <Trash2 className="size-4" />
              Remover
            </Button>
          </>
        ) : null}
      </div>
    </article>
  );
}
