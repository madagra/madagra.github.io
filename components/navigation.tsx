import Link from "next/link";

const links = [{ href: "/", label: "Home" }, { href: "/projects", label: "Projects" }, { href: "/writing", label: "Writing" }];
const socialLinks = [
  { href: "https://github.com/madagra", label: "GitHub", path: "M12 2.8a9.2 9.2 0 0 0-2.9 17.9c.46.09.63-.2.63-.44v-1.78c-2.57.56-3.11-1.1-3.11-1.1-.42-1.07-1.03-1.36-1.03-1.36-.84-.58.07-.57.07-.57.93.06 1.42.96 1.42.96.83 1.42 2.17 1.01 2.7.77.08-.6.32-1.01.59-1.24-2.05-.23-4.2-1.03-4.2-4.56 0-1.01.36-1.84.96-2.49-.1-.23-.42-1.18.09-2.46 0 0 .78-.25 2.53.95A8.8 8.8 0 0 1 12 7.1c.77 0 1.55.1 2.28.3 1.75-1.2 2.53-.95 2.53-.95.51 1.28.19 2.23.09 2.46.6.65.96 1.48.96 2.49 0 3.54-2.15 4.32-4.2 4.55.33.28.62.83.62 1.67v2.48c0 .24.17.53.64.44A9.2 9.2 0 0 0 12 2.8Z" },
  { href: "https://www.linkedin.com/in/mariodagrada", label: "LinkedIn", path: "M5.2 8.4H2.1V21h3.1V8.4ZM3.65 3.4a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6ZM21.9 13.77c0-3.8-2.03-5.56-4.74-5.56-2.19 0-3.17 1.2-3.72 2.05v-1.76h-3.1V21h3.1v-6.24c0-1.64.31-3.23 2.34-3.23 2 0 2.03 1.87 2.03 3.34V21h3.1v-7.23Z" },
  { href: "https://medium.com/@mariodagrada", label: "Medium", path: "M2.2 5.7a.8.8 0 0 0-.27-.68L.2 2.95V2.5h5.38l4.16 9.12L13.4 2.5h5.12v.45l-1.48 1.42a.45.45 0 0 0-.17.43v10.43c-.03.16.04.32.17.43l1.45 1.42v.45h-7.3v-.45l1.5-1.45c.15-.15.15-.2.15-.43V6.37l-4.17 10.7h-.56L3.26 6.37v7.1c-.04.3.06.6.27.82l1.95 2.36v.45H.2v-.45l1.95-2.36c.2-.22.3-.52.27-.82V5.7Z" },
  { href: "https://scholar.google.com/citations?user=7hnOB34AAAAJ&hl=en", label: "Google Scholar", path: "m12 3-10 5.2L12 13l8.2-4.27V15H22V8.2L12 3Zm-6.7 8.7V16c0 1.68 3 3.04 6.7 3.04s6.7-1.36 6.7-3.04v-4.3L12 15.2l-6.7-3.5Z" },
];

export function SocialLinks() { return <div className="social-links">{socialLinks.map((link) => <a key={link.label} href={link.href} aria-label={link.label} title={link.label}><svg viewBox="0 0 24 24" aria-hidden="true"><path d={link.path} /></svg></a>)}</div>; }

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
        </div>
      </nav>
    </header>
  );
}
