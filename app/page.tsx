import Image from "next/image";
import Link from "next/link";
import { CareerTimeline } from "@/components/career-timeline";
import { MediumLink } from "@/components/navigation";
import { ProjectCard } from "@/components/project-card";
import { selectDaily } from "@/content/daily-selection";
import { projects } from "@/content/projects";
import { selectedWriting } from "@/content/writing";

export const dynamic = "force-dynamic";

export default function HomePage() {
  const dailyProjects = selectDaily(projects, 3, "projects");
  const dailyWriting = selectDaily(selectedWriting, 3, "writing");

  return (
    <>
      <section id="home" className="hero shell">
        <div className="hero-copy">
          <h3>Bringing scientific SW products from 0 to 1</h3>
          <p className="lede">I am Mario Dagrada, an engineering leader with 10+ years of experience in scientific and
            AI-powered software products. 
            <br/>
            <br/>
            I speak both the engineering and science languages and love building, 
            especially if it involves translating difficult scientific workflows into revenue-generating applications.</p>
          <div className="actions"><Link className="button" href="#career-heading">Career</Link><Link className="button button-secondary" href="#projects">Selected Projects</Link><Link className="button button-secondary" href="#writing">Selected Writing</Link></div>
        </div>
        <div className="hero-photo"><div className="hero-image"><Image src="/assets/images/bio-photo.jpg" alt="Mario Dagrada" width={600} height={600} priority /></div></div>
      </section>

      <section id="focus-career" className="focus-career">
        <div className="shell focus-section">
          <p className="eyebrow">Focus areas</p>
          <div className="three-up">
          <article>
            <h2>Engineering Leadership</h2>
            <p>Grow engineering and research teams with a building-oriented culture and strong alignment with business goals.</p>
          </article>
          <article>
            <h2>Product Engineering</h2>
            <p>Translate complex scientific workflows (mostly ML-based) into delightful and usable software products.</p>
          </article>
          <article>
            <h2>AI infrastructure</h2>
            <p>Focus on HPC, distributed training systems, and LLM agentic pipelines.</p>
          </article>
        </div>
        </div>
        <CareerTimeline />
      </section>

      <section id="projects" className="shell section projects-preview">
        <div className="section-heading"><div><p className="eyebrow">Selected work</p><h2>Projects</h2></div><Link className="text-link" href="/projects">View all projects →</Link></div>
        <div className="project-grid">{dailyProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
      </section>

      <section id="writing" className="writing-preview">
        <div className="shell section">
          <div className="section-heading"><div><p className="eyebrow">Selected writing</p><h2>Writing</h2></div><Link className="text-link" href="/writing">View all writing →</Link></div>
          <div className="selected-writing-grid">{dailyWriting.map((item, index) => <a className="writing-card" key={item.title} href={item.href}><span className="writing-index">0{index + 1}</span><div><h3>{item.title}</h3><p>{item.description}</p></div><b>↗</b></a>)}</div>
        </div>
      </section>
    </>
  );
}
