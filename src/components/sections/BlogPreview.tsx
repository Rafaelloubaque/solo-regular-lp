import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useManagedBlogPosts } from "@/hooks/use-managed-blog-posts";
import { BLOG_CATEGORIES } from "@/lib/site-data";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowUpRight } from "lucide-react";

export function BlogPreview() {
  const posts = useManagedBlogPosts().slice(0, 3);
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Conteúdo"
          title="Conhecimento que protege seu patrimônio"
          description="Artigos sobre regularização imobiliária, REURB, usucapião e desenvolvimento urbano."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {BLOG_CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              to="/blog"
              className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-foreground/80 transition-colors hover:border-primary/40 hover:text-primary"
            >
              {c.name}
            </Link>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-elegant"
              >
                {post.image ? (
                  <div className="aspect-[16/9] overflow-hidden bg-muted">
                    <img
                      src={post.image}
                      alt={post.imageAlt ?? ""}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ) : null}
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                    {post.category}
                  </span>
                  <h3 className="mt-3 font-serif text-lg leading-snug text-deep">{post.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Ler artigo
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            Ver todos os artigos
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
