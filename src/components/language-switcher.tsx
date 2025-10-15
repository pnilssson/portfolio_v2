"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  
  // Extract current locale from pathname
  const currentLocale = pathname.startsWith("/sv") ? "sv" : "en";
  
  // Get path without locale prefix
  const pathWithoutLocale = pathname.replace(/^\/(en|sv)/, "") || "/";

  return (
    <div className="flex items-center h-4">
      <Link href={`/sv${pathWithoutLocale}`}>
        <Button
          variant="link"
          size="sm"
          className={`cursor-pointer ${
            currentLocale === "sv"
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          SV
        </Button>
      </Link>
      <Separator orientation="vertical" />
      <Link href={`/en${pathWithoutLocale}`}>
        <Button
          variant="link"
          size="sm"
          className={`cursor-pointer ${
            currentLocale === "en"
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          EN
        </Button>
      </Link>
    </div>
  );
}

