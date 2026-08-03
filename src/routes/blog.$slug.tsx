import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { BLOG_POSTS, type BlogContentBlock } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CalendarDays, Clock } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = BLOG_POSTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    return {
      meta: [
        { title: `${loaderData.title} | Solo Regular` },
        { name: "description", content: loaderData.excerpt },
        { property: "og:title", content: loaderData.title },
        { property: "og:description", content: loaderData.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${loaderData.slug}` },
        ...(loaderData.image ? [{ property: "og:image", content: loaderData.image }] : []),
      ],
      links: [{ rel: "canonical", href: `/blog/${loaderData.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: loaderData.title,
            description: loaderData.excerpt,
            datePublished: loaderData.date,
            articleSection: loaderData.category,
            ...(loaderData.image ? { image: loaderData.image } : {}),
            author: { "@type": "Organization", name: "Solo Regular" },
            publisher: { "@type": "Organization", name: "Solo Regular" },
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <h1 className="font-serif text-3xl text-deep">Artigo não encontrado</h1>
      <p className="mt-3 text-muted-foreground">
        O conteúdo que você procura não existe ou foi movido.
      </p>
      <Button asChild className="mt-6">
        <Link to="/blog">Voltar ao blog</Link>
      </Button>
    </div>
  ),
  errorComponent: () => (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <h1 className="font-serif text-3xl text-deep">Não foi possível carregar o artigo</h1>
      <Button asChild className="mt-6">
        <Link to="/blog">Voltar ao blog</Link>
      </Button>
    </div>
  ),
  component: PostPage,
});

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function BlogContent({ block }: { block: BlogContentBlock }) {
  if (block.type === "heading") {
    return <h2 className="pt-4 font-serif text-2xl leading-tight text-deep">{block.text}</h2>;
  }

  if (block.type === "unorderedList") {
    return (
      <ul className="space-y-3 pl-6 text-base leading-relaxed text-foreground/90 sm:text-lg">
        {block.items.map((item) => (
          <li key={item} className="list-disc pl-1">
            {item}
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "orderedList") {
    return (
      <ol className="space-y-3 pl-6 text-base leading-relaxed text-foreground/90 sm:text-lg">
        {block.items.map((item) => (
          <li key={item} className="list-decimal pl-1">
            {item}
          </li>
        ))}
      </ol>
    );
  }

  if (block.type === "note") {
    return (
      <aside className="rounded-2xl border border-primary/20 bg-secondary p-5 text-base leading-relaxed text-foreground/90">
        {block.text}
      </aside>
    );
  }

  return <p className="text-base leading-relaxed text-foreground/90 sm:text-lg">{block.text}</p>;
}

function PostPage() {
  const post = Route.useLoaderData();

  return (
    <article className="bg-background">
      <header className="relative overflow-hidden border-b border-border bg-sand">
        <div className="absolute inset-0 plan-grid opacity-50" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-20 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            <ArrowLeft className="size-4" />
            Blog
          </Link>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {post.category}
          </p>
          <h1 className="mt-3 font-serif text-3xl leading-tight text-deep sm:text-4xl">
            {post.title}
          </h1>
          <div className="mt-5 flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <CalendarDays className="size-4" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="size-4" />
              {post.readingTime}
            </span>
          </div>
        </div>

        {post.image ? (
          <div className="relative mx-auto max-w-5xl px-4 pb-10 sm:px-6 lg:px-8">
            <div className="aspect-[16/9] overflow-hidden rounded-2xl border border-border bg-muted shadow-elegant">
              <img
                src={post.image}
                alt={post.imageAlt ?? ""}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        ) : null}
      </header>

      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {post.content.map((block, i) => (
            <BlogContent key={i} block={block} />
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-sand p-6 text-center">
          <h2 className="font-serif text-xl text-deep">Tem um caso parecido?</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Solicite uma análise gratuita do seu imóvel com a Solo Regular.
          </p>
          <Button asChild className="mt-5">
            <Link to="/contato">Solicitar Análise Gratuita</Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
