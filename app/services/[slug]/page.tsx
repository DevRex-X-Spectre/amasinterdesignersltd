import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getRelatedServices,
  getService,
  services,
} from "@/data/services";
import { getProjectsByService } from "@/data/projects";
import { faqs } from "@/data/faqs";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";
import { CheckList } from "@/components/shared/CheckList";
import { ImageCard } from "@/components/shared/ImageCard";
import { FaqList } from "@/components/shared/FaqList";
import { FinalCTA } from "@/components/home/FinalCTA";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service" };
  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = getRelatedServices(service.slug);
  const relatedProjects = getProjectsByService(service.slug);

  return (
    <>
      <section className="relative flex h-[70vh] min-h-[420px] items-end overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          priority
          className="object-cover opacity-50"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/20" />
        <Container className="relative z-10 pb-16">
          <span className="mb-3 block text-sm font-medium tracking-widest text-accent uppercase">
            {service.group}
          </span>
          <h1 className="font-display max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            {service.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base font-light text-muted">
            {service.description}
          </p>
        </Container>
      </section>
      <section className="bg-background py-24">
        <Container className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <div>
            <h2 className="font-display mb-6 text-3xl font-semibold tracking-tight">
              What this usually includes
            </h2>
            <CheckList items={service.includes} columns={1} />
            <Button href="/quote" className="mt-10">
              Request a Quote
            </Button>
          </div>
          <Image
            src={service.image}
            alt=""
            width={900}
            height={700}
            className="h-[420px] w-full rounded-2xl object-cover"
          />
        </Container>
      </section>
      {relatedProjects.length > 0 ? (
        <section className="border-t border-border bg-background py-24">
          <Container>
            <h2 className="font-display mb-10 text-3xl font-semibold tracking-tight">
              Related projects
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {relatedProjects.map((project) => (
                <ImageCard
                  key={project.slug}
                  href={`/portfolio/${project.slug}`}
                  image={project.image}
                  alt={project.title}
                  title={project.title}
                  category={project.category}
                />
              ))}
            </div>
          </Container>
        </section>
      ) : null}
      <section className="border-t border-border bg-surface py-24">
        <Container>
          <h2 className="font-display mb-10 text-3xl font-semibold tracking-tight">
            Related services
          </h2>
          <div className="flex flex-wrap gap-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-white hover:text-white"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-background py-24">
        <Container className="max-w-3xl">
          <h2 className="font-display mb-10 text-3xl font-semibold tracking-tight">
            Questions
          </h2>
          <FaqList items={faqs.slice(0, 4)} />
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
