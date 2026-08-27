import Image from "next/image";
import Link from "next/link";

const links = [{ href: "#home", label: "Home" }, { href: "#focus-career", label: "Focus & career" }, { href: "#projects", label: "Projects" }, { href: "/writing", label: "Writing" }];
const mediumLink = { href: "https://medium.com/@mariodagrada", icon: "ci-medium" };
const socialLinks = [
  { href: "https://github.com/madagra", label: "GitHub", icon: "ci-github" },
  { href: "https://www.linkedin.com/in/mariodagrada", label: "LinkedIn", icon: "ci-linkedin" },
  { href: "https://x.com/MarioDagrada", label: "X", icon: "ci-x" },
  { href: "https://scholar.google.com/citations?user=7hnOB34AAAAJ&hl=en", label: "Google Scholar", image: "/assets/images/google-scholar.png" },
];

export function MediumLink() { return <a className="medium-link" href={mediumLink.href}><i className={"ci " + mediumLink.icon + " ci-lg"} aria-hidden="true" /><span>Medium</span></a>; }

export function SocialLinks() { return <div className="social-links">{socialLinks.map((link) => <a key={link.label} href={link.href} aria-label={link.label} title={link.label}>{link.image ? <Image className="scholar-icon" src={link.image} alt="" width={24} height={24} /> : <i className={"ci " + link.icon + " ci-xl"} aria-hidden="true" />}</a>)}</div>; }

export function Navigation() {
  return (
    <header className="site-header">
      <nav className="shell nav">
        <div className="identity">
          <Link className="wordmark" href="/">Mario Dagrada<span>.</span></Link>
          <a className="nav-quote" href={"https://web.archive.org/web/20210624221231/https://www.therightproductions.nl/hogeraadvanadel/index.php?id=109&wapen=1080"}>“Per aspera ad astra” <span>— Gouda</span></a>
        </div>
        <div className="nav-right">
          <div className="primary-links">
            {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
          </div>
          <SocialLinks />
        </div>
      </nav>
    </header>
  );
}
