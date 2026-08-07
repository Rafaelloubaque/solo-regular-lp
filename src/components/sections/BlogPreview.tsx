import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import {
  fetchPublishedBlogPosts,
  getBlogPostDescription,
  getBlogPostImage,
  getBlogPostTitle,
  resolveBlogImageUrl,
  type PublicBlogPost,
} from "@/lib/blog-api";
import { ArrowUpRight } from "lucide-react";

export function BlogPreview() {
  const [posts, setPosts] = useState<PublicBlogPost[]>([]);

  useEffect(() => {
    let isMounted = true;

    fetchPublishedBlogPosts(3)
      .then((nextPosts) => {
        if (isMounted) {
          setPosts(nextPosts);
        }
      })
      .catch(() => {
        if (isMounted) {
          setPosts([]);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Conteúdo"
          title="Conhecimento que protege seu patrimônio"
          description="Artigos sobre regularização imobiliária, REURB, usucapião e desenvolvimento urbano."
        />

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
                {getBlogPostImage(post) ? (
                  <div className="aspect-[16/9] overflow-hidden bg-muted">
                    <img
                      src={resolveBlogImageUrl(getBlogPostImage(post))}
                      alt={post.imageAlt ?? ""}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ) : null}
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Blog
                  </span>
                  <h3 className="mt-3 font-serif text-lg leading-snug text-deep">
                    {getBlogPostTitle(post)}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {getBlogPostDescription(post)}
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
