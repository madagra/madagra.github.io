import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/content/projects";

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => { const project = getProject(slug); return project ? { title: project.title, description: project.summary } : {}; });
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  return <article><section className="project-hero"><Image src={project.image} alt="" fill priority sizes="100vw" /><div className="project-hero-overlay" /><div className="shell project-hero-content"><p className="eyebrow">{project.category}</p><h1>{project.title}</h1><p>{project.summary}</p></div></section><section className="shell detail"><aside><p className="eyebrow">Stack</p><ul>{project.stack.map((item) => <li key={item}>{item}</li>)}</ul></aside><div>{project.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{project.link && <a className="text-link" href={project.link.href}>{project.link.label} →</a>}</div></section></article>;
}
