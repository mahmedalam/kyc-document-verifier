"use client";

import { navLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { ToggleThemeButton } from "./toggle-theme-button";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="bg-background px-6 py-6 flex items-center justify-between border-b">
      {/* Logo */}
      <Link href="/">
        <div className="flex-center gap-2">
          <Image alt="Logo" src={"/logo.svg"} width={48} height={48} />
          <span className="text-lg text-primary font-bold">
            KYC Document Verifier
          </span>
        </div>
      </Link>
      {/* Navigation Links */}
      <nav>
        <ul className="flex-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.path}>
              <li
                className={cn(
                  "flex-center gap-2 text-foreground/75 hover:text-foreground transition-colors",
                  pathname.includes(link.path) && "text-foreground font-medium",
                )}
              >
                {link.icon}
                {link.label}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
      {/* Actions */}
      <div className="flex-center gap-4">
        <Button variant="secondary">Sign in</Button>
        <ToggleThemeButton />
      </div>
    </header>
  );
}
