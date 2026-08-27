const milestones = [
  { period: "2026 — now", role: "Scientific Product Lead", company: "GroundIQ · Fugro", detail: "Leading two product teams, GPU-based geophysical algorithms, and scientific platforms used by 50+ engineers." },
  { period: "2024 — now", role: "Fractional AI Engineer", company: "Independent consulting", detail: "Designing LLM infrastructure, agent pipelines, and evaluation systems for SaaS, R&D, and insurance clients." },
  { period: "2024 — 2025", role: "Chief Technology Officer", company: "Friday Energy", detail: "Grew engineering from 2 to 10 people and scaled a reliable energy platform to around 80 clients." },
  { period: "2020 — 2024", role: "Head of Scientific Software", company: "PASQAL", detail: "Built and led a 14-person scientific software organisation for quantum computing products." },
];

export function CareerTimeline() {
  return (
    <section className="shell career-section" aria-labelledby="career-heading">
      <div className="section-heading"><div><p className="eyebrow">Career at a glance</p><h2 id="career-heading">From research to products</h2></div><p className="career-summary">Turning complex science into products teams and customers can rely on.</p></div>
      <ol className="timeline">
        {milestones.map((milestone) => <li key={milestone.period}><p className="timeline-period">{milestone.period}</p><div className="timeline-dot" /><article><p className="timeline-company">{milestone.company}</p><h3>{milestone.role}</h3><p>{milestone.detail}</p></article></li>)}
      </ol>
    </section>
  );
}
