import Link from "next/link";

const links = [{ href: "/", label: "Home" }, { href: "/projects", label: "Projects" }, { href: "/writing", label: "Writing" }];
export function Navigation() { return <header className="site-header"><nav className="shell nav"><Link className="wordmark" href="/">Mario Dagrada<span>.</span></Link><div>{links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}</div></nav></header>; }
