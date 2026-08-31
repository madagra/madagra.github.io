"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [{ href: "/#home", label: "Home" }, { href: "/#focus-career", label: "Career" }, { href: "/projects", label: "Projects" }, { href: "/writing", label: "Writing" }];
const substackLink = { href: "https://madagra.substack.com/" };
const SUBSTACK_ICON_PATH = "M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z";
const socialLinks = [
  { href: "https://github.com/madagra", label: "GitHub", icon: "ci-github", darkIcon: "ci-github-light" },
  { href: "https://www.linkedin.com/in/mariodagrada", label: "LinkedIn", icon: "ci-linkedin" },
  { href: "https://x.com/MarioDagrada", label: "X", icon: "ci-x", darkIcon: "ci-x-light" },
  { href: substackLink.href, label: "Substack", svg: SUBSTACK_ICON_PATH },
  { href: "https://scholar.google.com/citations?user=7hnOB34AAAAJ&hl=en", label: "Google Scholar", image: "/assets/images/google-scholar.png" },
];

export function SubstackLink() {
  return <a className="substack-link" href={substackLink.href}><svg viewBox="0 0 24 24" aria-hidden="true"><path d={SUBSTACK_ICON_PATH} /></svg><span>Substack</span></a>;
}

export function SocialLinks() {
  return <div className="social-links">{socialLinks.map((link) => <a key={link.label} href={link.href} aria-label={link.label} title={link.label}>{link.image ? <Image className="scholar-icon" src={link.image} alt="" width={24} height={24} /> : link.svg ? <svg viewBox="0 0 24 24" aria-hidden="true"><path d={link.svg} /></svg> : link.darkIcon ? <><i className={"ci " + link.icon + " ci-xl theme-icon-light"} aria-hidden="true" /><i className={"ci " + link.darkIcon + " ci-xl theme-icon-dark"} aria-hidden="true" /></> : <i className={"ci " + link.icon + " ci-xl"} aria-hidden="true" />}</a>)}</div>;
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light";

    const savedTheme = window.localStorage.getItem("theme");
    if (savedTheme === "dark" || savedTheme === "light") return savedTheme;

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);

  };
  return (
    <header className="site-header">
      <nav className="shell nav" aria-label="Main navigation">
        <div className="identity">
          <Link className="wordmark" href="/" onClick={closeMenu}>Mario Dagrada<span>.</span></Link>
          <a className="nav-quote" href="https://web.archive.org/web/20210624221231/https://www.therightproductions.nl/hogeraadvanadel/index.php?id=109&wapen=1080">“Per aspera ad astra” <span>— Gouda</span></a>
        </div>
        <div id="mobile-navigation" className={"nav-right" + (isOpen ? " is-open" : "")}>
          <div className="primary-links">
            {links.map((link) => <Link key={link.href} href={link.href} onClick={closeMenu}>{link.label}</Link>)}
          </div>
          <SocialLinks />
        </div>
        <div className="nav-utility">
          <button className="theme-toggle" type="button" suppressHydrationWarning aria-label={"Switch to " + (theme === "dark" ? "light" : "dark") + " mode"} onClick={toggleTheme}>
            <span aria-hidden="true">{theme === "dark" ? "☼" : "☾"}</span>
            <span className="sr-only">Switch to {theme === "dark" ? "light" : "dark"} mode</span>
          </button>
          <button className="nav-mobile-toggle" type="button" aria-expanded={isOpen} aria-controls="mobile-navigation" onClick={() => setIsOpen((open) => !open)}>
            <span className="sr-only">{isOpen ? "Close navigation" : "Open navigation"}</span>
            <span className="menu-icon" aria-hidden="true"><span /><span /><span /></span>
          </button>
        </div>
      </nav>
    </header>
  );
}
