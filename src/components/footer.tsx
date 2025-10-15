import { Github, Linkedin, Mail } from "lucide-react";
import { Separator } from "./ui/separator";
import LanguageSwitcher from "./language-switcher";

export default function Footer() {
  return (
    <>
      <Separator />
      <footer className="flex flex-row gap-6 items-center">
        <a href="https://github.com/pnilssson"><Github color="oklch(44.6% 0.03 256.802)" size={18} /></a>
        <a href="https://www.linkedin.com/in/pnilssson/" target="_blank"><Linkedin color="oklch(44.6% 0.03 256.802)" size={18} /></a>
        <a href="mailto:p.nilsson95@hotmail.com"><Mail color="oklch(44.6% 0.03 256.802)" size={18} /></a>
        <div className="ml-auto">
          <LanguageSwitcher />
        </div>
      </footer>
    </>
  );
}
