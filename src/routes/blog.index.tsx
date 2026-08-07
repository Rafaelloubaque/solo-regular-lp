import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import {
  fetchPublishedBlogPosts,
  getBlogPostDate,
  getBlogPostDescription,
  getBlogPostImage,
  getBlogPostTitle,
  resolveBlogImageUrl,
  type PublicBlogPost,
} from "@/lib/blog-api";
import { ArrowUpRight, CalendarDays, Clock } from "lucide-react";

export const Route = createFileRoute("/blog/")({
  loader: async () => {
    try {
      return { posts: await fetchPublishedBlogPosts() };
    } catch (error) {
      return {
        posts: [] as PublicBlogPost[],
        error:
          error instanceof Error ? error.message : "Não foi possível carregar os artigos agora.",
      };
    }
  },
  head: () => ({
    meta: [
      { title: "Blog — Regularização Imobiliária, REURB e Usucapião | Solo Regular" },
      {
        name: "description",
        content:
          "Conteúdo especializado sobre regularização imobiliária, regularização fundiária, REURB, usucapião, cartórios, patrimônio familiar e desenvolvimento urbano.",
      },
      { property: "og:title", content: "Blog Solo Regular" },
      {
        property: "og:description",
        content: "Conhecimento que protege e valoriza o seu patrimônio.",
      },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function BlogPage() {
  const { posts, error } = Route.useLoaderData();

  return (
    <>
      <PageHero
        eyebrow="Conteúdo"
        title="Conhecimento que protege seu patrimônio"
        description="Artigos sobre regularização imobiliária, REURB, usucapião, cartórios e desenvolvimento urbano."
        breadcrumb={[{ label: "Início", to: "/" }, { label: "Blog" }]}
      />

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {error ? (
            <div className="mb-8 rounded-2xl border border-border bg-card px-5 py-4 text-sm text-muted-foreground">
              {error}
            </div>
          ) : null}

          {posts.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, i) => (
                <Reveal key={post.slug} delay={(i % 3) * 80}>
                  <Link
                    to="/blog/$slug"
                    params={{ slug: post.slug }}
                    className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                  >
                    {getBlogPostImage(post) ? (
                      <div className="-mx-6 -mt-6 mb-5 aspect-[16/9] overflow-hidden rounded-t-2xl bg-muted">
                        <img
                          src={resolveBlogImageUrl(getBlogPostImage(post))}
                          alt={post.imageAlt ?? ""}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    ) : null}
                    <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                      Blog
                    </span>
                    <h2 className="mt-3 font-serif text-lg leading-snug text-deep">
                      {getBlogPostTitle(post)}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {getBlogPostDescription(post)}
                    </p>
                    <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <CalendarDays className="size-3.5" />
                        {formatDate(getBlogPostDate(post))}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="size-3.5" />
                        {post.readingTime || "Leitura rápida"}
                      </span>
                    </div>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                      Ler artigo
                      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-border bg-card px-6 py-10 text-center text-muted-foreground">
              Nenhum artigo publicado no momento.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
