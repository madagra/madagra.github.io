import Link from "next/link";
export default function NotFound() { return <section className="shell page-section"><p className="eyebrow">404</p><h1>Page not found</h1><p className="lede">The page you are looking for does not exist.</p><Link className="button" href="/">Back home</Link></section>; }
