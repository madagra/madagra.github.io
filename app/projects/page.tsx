import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/content/projects";

export const metadata: Metadata = { title: "Projects", description: "Selected scientific software, AI, cloud, and quantum-computing projects." };

export default function ProjectsPage() {
  return <section className="shell page-section"><p className="eyebrow">Selected work</p><h1>Projects</h1><p className="lede narrow">A selection of projects I can publicly share, spanning scientific software, machine learning, cloud infrastructure, and quantum computing.</p><div className="project-grid all-projects">{projects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div></section>;
}
