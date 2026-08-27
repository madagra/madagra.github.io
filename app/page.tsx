import Image from "next/image";
import Link from "next/link";
import { CareerTimeline } from "@/components/career-timeline";
import { MediumLink, SocialLinks } from "@/components/navigation";
import { ProjectCard } from "@/components/project-card";
import { featuredProjects } from "@/content/projects";

export default function HomePage() {
  return (
    <>
      <section className="hero shell">
        <div className="hero-copy">
          <MediumLink />
          <h1>Scientific software products from 0 to 1</h1>
          <p className="lede">I am Mario Dagrada, an engineering leader, developer, and technology passionate living in the Netherlands.</p>
          <div className="actions"><Link className="button" href="/projects">Explore projects</Link><a className="text-link" href="/assets/files/CV_Dagrada_Aug2026.pdf">Download CV</a></div>
        </div>
        <div className="hero-photo"><div className="hero-social"><SocialLinks /></div><div className="hero-image"><Image src="/assets/images/bio-photo.jpg" alt="Mario Dagrada" width={600} height={600} priority /></div></div>
      </section>

      <section className="shell section">
        <p className="eyebrow">Focus areas</p>
        <div className="three-up"><article><h2>Scientific software</h2><p>From high-performance computing and quantum computing to dependable tools for researchers.</p></article><article><h2>Engineering leadership</h2><p>Growing capable teams, shaping product direction, and turning ambitious technical work into durable systems.</p></article><article><h2>AI infrastructure</h2><p>Practical LLM systems, evaluation pipelines, agent capabilities, and cloud foundations that teams can build on.</p></article></div>
      </section>

      <CareerTimeline />

      <section className="shell section projects-preview">
        <div className="section-heading"><div><p className="eyebrow">Selected work</p><h2>Projects</h2></div><Link className="text-link" href="/projects">View all projects →</Link></div>
        <div className="project-grid">{featuredProjects.slice(0, 3).map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
      </section>
    </>
  );
}
