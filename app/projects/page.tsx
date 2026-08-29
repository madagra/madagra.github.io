import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/content/projects";

export const metadata: Metadata = { title: "Projects", description: "Scientific software, security, AI, cloud, quantum-computing, and personal-product projects." };

export default function ProjectsPage() {
  const orderedProjects = [...projects].sort((a, b) => b.year - a.year);
  return <section className="shell page-section"><p className="eyebrow">Selected work</p><h1>Projects</h1><p className="lede narrow">A selection of projects I can publicly share, spanning scientific software, network security, machine learning, cloud infrastructure, quantum computing, and personal products.</p><div className="project-grid all-projects">{orderedProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div></section>;
}
