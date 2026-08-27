const milestones = [
  { period: "Mar 2026 — now", role: "Scientific Product Lead", company: "GroundIQ · Fugro", detail: "Leading two product teams, GPU-based geophysical algorithms, and scientific platforms used by 50+ engineers." },
  { period: "Nov 2024 — now", role: "Fractional AI Engineer", company: "Independent consulting", detail: "Designing LLM infrastructure, agent pipelines, and evaluation systems for SaaS, R&D, and insurance clients." },
  { period: "Feb 2024 — Sep 2025", role: "Chief Technology Officer", company: "Friday Energy", detail: "Grew engineering from 2 to 10 people and scaled a reliable energy platform to around 80 clients." },
  { period: "Sep 2020 — Feb 2024", role: "Head of Scientific Software", company: "PASQAL", detail: "Built and led a 14-person scientific software organisation for quantum computing products." },
];

export function CareerTimeline() {
  return (
    <section className="shell career-section" aria-labelledby="career-heading">
      <div className="section-heading"><div><p className="eyebrow">Career at a glance</p><h2 id="career-heading">Career so far</h2></div></div>
      <ol className="timeline">
        {milestones.map((milestone) => <li key={milestone.period}><p className="timeline-period">{milestone.period}</p><div className="timeline-dot" /><article><p className="timeline-company">{milestone.company}</p><h3>{milestone.role}</h3><p>{milestone.detail}</p></article></li>)}
      </ol>
    </section>
  );
}
