import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/site-data";
import { SectionHeading } from "@/components/SectionHeading";

export function Testimonials() {
  return (
    <section className="bg-sand py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Depoimentos"
          title="Quem regularizou com a Solo Regular"
          description="Histórias de clientes que transformaram documentação travada em patrimônio seguro."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={testimonial.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden rounded-lg"
            >
              <video
                className="aspect-video w-full bg-black object-contain"
                controls
                playsInline
                preload="metadata"
                poster={testimonial.poster}
                aria-label={`Depoimento em vídeo ${i + 1}`}
              >
                <source src={testimonial.src} type="video/mp4" />
              </video>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
