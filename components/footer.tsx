import { SocialLinks } from "@/components/navigation";

export function Footer() {
  return <footer><div className="shell footer"><span>© {new Date().getFullYear()} Mario Dagrada</span><SocialLinks /></div></footer>;
}
