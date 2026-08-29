import type { Metadata } from "next";
import { articles, publications } from "@/content/writing";

export const metadata: Metadata = { title: "Writing & research", description: "Articles, publications, and patents." };

export default function WritingPage() { return <section className="shell page-section"><p className="eyebrow">Ideas in public</p><h1>Writing & research</h1><p className="lede narrow">Essays on engineering, machine learning, cloud infrastructure, and scientific computing.</p><div className="article-list">{articles.map((article) => <a key={article.title} href={article.href}><span>{article.year}</span><div><h2>{article.title}</h2><p>{article.description}</p></div><b>↗</b></a>)}</div><section className="publications"><p className="eyebrow">Research record</p><h2>Publications & patents</h2><div className="article-list">{publications.map((publication) => <a key={publication.title} href={publication.href}><span>{publication.year}</span><div><h3>{publication.title}</h3><p>{publication.citation}</p></div><b>↗</b></a>)}</div></section></section>; }
