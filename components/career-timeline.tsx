const milestones = [
  { period: "Mar 2026 — now", role: "Scientific Product Lead", company: "GroundIQ · Fugro", detail: "Leading two product teams, GPU-based geophysical algorithms, and scientific platforms used by 50+ engineers." },
  { period: "Nov 2024 — now", role: "Fractional AI Engineer", company: "Independent consulting", detail: "Designing LLM infrastructure, agent pipelines, and evaluation systems for SaaS, R&D, and insurance clients." },
  { period: "Feb 2024 — Sep 2025", role: "Chief Technology Officer", company: "Friday Energy", detail: "Grew engineering from 2 to 10 people and scaled a reliable energy platform to around 80 clients." },
  { period: "Sep 2020 — Feb 2024", role: "Head of Scientific Software", company: "PASQAL", detail: "Built and led a 14-person scientific software organisation for quantum computing products." },
  { period: "Apr 2018 — Sep 2020", role: "Senior R&D Software Engineer", company: "Forescout Technologies", detail: "Led the innovation roadmap for an operational-technology security product and developed an ML-based cyber-threat detection system." },
  { period: "Aug 2016 — Apr 2018", role: "R&D / Software Engineer", company: "Atos Bull", detail: "Optimised parallel scientific libraries, developed HPC interconnect software, and contributed to Open MPI for an internal interconnect project." },
];

export function CareerTimeline() {
  return (
    <section className="shell career-section" aria-labelledby="career-heading">
      <div className="section-heading"><div><p className="eyebrow">Career at a glance</p><h2 id="career-heading">Career so far</h2></div><a className="button" href="/assets/files/CV_Dagrada_Aug2026.pdf">Download CV</a></div>
      <ol className="timeline">
        {milestones.map((milestone) => <li key={milestone.period}><p className="timeline-period">{milestone.period}</p><div className="timeline-dot" /><article><p className="timeline-company">{milestone.company}</p><h3>{milestone.role}</h3><p>{milestone.detail}</p></article></li>)}
      </ol>
    </section>
  );
}
