const milestones = [
  { period: "Mar 2026 — now", role: "Scientific Product Lead", company: "GroundIQ (part of Fugro)", detail: "Turn scientific expertise into modern AI-driven products in the geotech engineering domain. Tech leadership for 2 teams (15 engineers)." },
  { period: "Nov 2024 — now", role: "Fractional AI Engineer", company: "Dagrada Consulting Services", detail: "Design LLM infrastructure, agent pipelines, and evaluation systems for SaaS, R&D, and insurance clients. More details available upon request." },
  { period: "Feb 2024 — Sep 2025", role: "Chief Technology Officer", company: "Friday Energy", detail: "Led the engineering team in a period of high grow (2 to 10 people, 5 to 80 clients), developing algorithms to control renewable energy assets (batteries, solar panels)." },
  { period: "Sep 2020 — Feb 2024", role: "Head of Scientific Software", company: "PASQAL", detail: "Started and grew a 15-person engineering organisation building tools for 40+ scientists across multiple departments." },
  { period: "Apr 2018 — Sep 2020", role: "Senior R&D Software Engineer", company: "Forescout Technologies", detail: "Led the product innovation roadmap for eyeInspect, an application to protect critical infrastructures from cyberthreats." },
  { period: "Aug 2016 — Apr 2018", role: "R&D Software Engineer", company: "Atos Bull", detail: "Straight after PhD, worked on HPC interconnect network protocols and performance optimization of scientific applications." },
];

export function CareerTimeline() {
  return (
    <section className="shell career-section" aria-labelledby="career-heading">
      <div className="section-heading"><div><p className="eyebrow"></p><h2 id="career-heading">Career at a glance</h2></div><a className="text-link" href="/assets/files/CV_Dagrada_Aug2026.pdf">Download CV</a></div>
      <ol className="timeline">
        {milestones.map((milestone) => <li key={milestone.period}><p className="timeline-period">{milestone.period}</p><div className="timeline-dot" /><article><p className="timeline-company">{milestone.company}</p><h3>{milestone.role}</h3><p>{milestone.detail}</p></article></li>)}
      </ol>
    </section>
  );
}
