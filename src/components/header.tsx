
"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import type { Locale } from "@/data/site";
import { Menu, X, ArrowUpRight } from "lucide-react";

import { Link, usePathname } from "@/i18n/navigation";
import { site } from "@/data/site";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const links = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/research", key: "research" },
  { href: "/people", key: "people" },
  { href: "/publications", key: "publications" },
  { href: "/contact", key: "contact" },
] as const;

export function Header() {
  const pathname = usePathname();
  const t = useTranslations("Navigation");
  const [open, setOpen] = useState(false);
  const locale = useLocale() as Locale;

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        {/* Laboratory Branding */}
        <Link
          href="/"
          className="brand"
          onClick={() => setOpen(false)}
          aria-label="Lab homepage"
        >
          <span className="brand-mark">
            H<span>·</span>C
          </span>

          <span className="brand-copy">
            <strong>{site.name[locale]}</strong>
            <small>{site.university[locale]}</small>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? "active" : ""}
            >
              {t(link.key)}
            </Link>
          ))}

          {site.withYouUrl && (
            <a
              className="nav-external"
              href={site.withYouUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              WithYou
              <ArrowUpRight size={14} />
            </a>
          )}

          {/* Desktop Language Switcher */}
          <LanguageSwitcher />
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <nav
          id="mobile-nav"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {t(link.key)}
            </Link>
          ))}

          {site.withYouUrl && (
            <a
              href={site.withYouUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              WithYou ↗
            </a>
          )}

          {/* Mobile Language Switcher */}
          <LanguageSwitcher />
        </nav>
      )}
    </header>
  );
}
