import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";
export function ProjectCard({ project }: { project: Project }) { return <Link className="project-card" href={`/projects/${project.slug}`}><div className="card-image"><Image src={project.image} alt="" fill sizes="(max-width: 700px) 100vw, 33vw" /></div><div><p className="eyebrow">{project.category}</p><h3>{project.title}</h3><p>{project.summary}</p><span>Read project →</span></div></Link>; }
