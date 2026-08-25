import { Icon } from "@/components/icons/Icon";
import Link from "next/link";
import { featuredProjects } from "@/data/projects";
import { Container } from "@/components/shared/Container";
import { ImageCard } from "@/components/shared/ImageCard";
import { Reveal } from "@/components/motion/Reveal";

export function FeaturedProjects() {
  return (
    <section className="bg-background py-32">
      <Container>
        <Reveal className="mb-16 flex items-end justify-between">
          <div>
            <span className="mb-2 block text-sm font-medium tracking-widest text-accent uppercase">
              Portfolio
            </span>
            <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
              Work already on the wall
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="hidden items-center border-b border-transparent pb-2 text-sm text-muted transition-colors hover:border-white hover:text-white md:flex"
          >
            Explore Our Portfolio
            <Icon icon="solar:arrow-right-linear" className="ml-1" />
          </Link>
        </Reveal>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProjects.slice(0, 8).map((project, index) => (
            <Reveal key={project.slug} delay={(index % 4) * 0.07}>
              <ImageCard
                href={`/portfolio/${project.slug}`}
                image={project.image}
                alt={project.title}
                title={project.title}
                category={project.category}
              />
            </Reveal>
          ))}
        </div>
        <Link
          href="/portfolio"
          className="mt-8 flex items-center text-sm text-muted md:hidden"
        >
          Explore Our Portfolio
          <Icon icon="solar:arrow-right-linear" className="ml-1" />
        </Link>
      </Container>
    </section>
  );
}
