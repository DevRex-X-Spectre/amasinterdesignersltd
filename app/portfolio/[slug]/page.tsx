import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  getProject,
  getRelatedProjects,
  projects,
} from "@/data/projects";
import { getService } from "@/data/services";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";
import { ImageCard } from "@/components/shared/ImageCard";
import { FinalCTA } from "@/components/home/FinalCTA";
import { site, whatsappHref } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  const projectUrl = new URL(`/portfolio/${project.slug}`, site.url).toString();
  const projectDescription = `${project.title}, ${project.category} by AMAS Inter Designers Ltd. Request pricing for a similar project and view the selected sample.`;
  return {
    title: project.title,
    description: projectDescription,
    openGraph: {
      title: `Request pricing: ${project.title}`,
      description: projectDescription,
      url: projectUrl,
      siteName: site.name,
      locale: site.locale,
      type: "website",
      images: [
        {
          url: new URL(project.image, site.url).toString(),
          width: 1200,
          height: 800,
          alt: `${project.title} sample by AMAS Inter Designers Ltd.`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Request pricing: ${project.title}`,
      description: projectDescription,
      images: [new URL(project.image, site.url).toString()],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const related = getRelatedProjects(project.slug);

  return (
    <>
      <section className="relative flex h-[75vh] min-h-[480px] items-end overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          className="object-cover opacity-60"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <Container className="relative z-10 pb-16">
          <span className="mb-3 block text-sm font-medium tracking-widest text-accent uppercase">
            {project.category}
          </span>
          <h1 className="font-display max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
            {project.title}
          </h1>
          <p className="mt-4 text-sm text-muted">Client: {project.client}</p>
        </Container>
      </section>
      <section className="bg-background py-24">
        <Container className="grid grid-cols-1 gap-16 md:grid-cols-3">
          <div className="md:col-span-2 space-y-10">
            <div>
              <h2 className="font-display mb-3 text-2xl font-semibold">Overview</h2>
              <p className="text-sm leading-relaxed font-light text-muted">
                {project.overview}
              </p>
            </div>
            <div>
              <h2 className="font-display mb-3 text-2xl font-semibold">Challenge</h2>
              <p className="text-sm leading-relaxed font-light text-muted">
                {project.challenge}
              </p>
            </div>
            <div>
              <h2 className="font-display mb-3 text-2xl font-semibold">Solution</h2>
              <p className="text-sm leading-relaxed font-light text-muted">
                {project.solution}
              </p>
            </div>
          </div>
          <aside className="h-fit rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display mb-4 text-sm tracking-wider uppercase">
              Work completed
            </h3>
            <ul className="space-y-3 text-sm text-muted">
              {project.serviceSlugs.map((serviceSlug) => {
                const service = getService(serviceSlug);
                return <li key={serviceSlug}>{service?.title ?? serviceSlug}</li>;
              })}
            </ul>
            <Button
              href={whatsappHref(
                `Good day, AMAS Inter Designers. I am interested in a product similar to ${project.title}. Please provide the available pricing and specifications. Selected sample: ${new URL(`/portfolio/${project.slug}`, site.url).toString()}`,
              )}
              external
              className="mt-8 w-full"
            >
              Request Similar Pricing
            </Button>
          </aside>
        </Container>
      </section>
      <section className="border-t border-border bg-background py-24">
        <Container>
          <h2 className="font-display mb-10 text-3xl font-semibold tracking-tight">
            Gallery
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {project.images.map((src) => (
              <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image src={src} alt={project.title} fill className="object-cover" sizes="50vw" />
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section className="border-t border-border bg-surface py-24">
        <Container>
          <h2 className="font-display mb-10 text-3xl font-semibold tracking-tight">
            Related projects
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {related.map((item) => (
              <ImageCard
                key={item.slug}
                href={`/portfolio/${item.slug}`}
                image={item.image}
                alt={item.title}
                title={item.title}
                category={item.category}
              />
            ))}
          </div>
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
