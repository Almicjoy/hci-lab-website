import { getLocale, getTranslations } from "next-intl/server";
import type { Locale } from "@/data/site";

import { Link } from "@/i18n/navigation";
import { site } from "@/data/site";

export async function Footer() {
  const t = await getTranslations("Footer");
  const locale = (await getLocale()) as Locale;

  return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* Laboratory Information */}
        <div>
          <div className="footer-brand">
            {site.name[locale]}
          </div>

          <p>{site.university[locale]}</p>

          <p className="footer-note">
            {t("description")}
          </p>
        </div>

        {/* Explore Links */}
        <div>
          <strong>{t("explore")}</strong>

          <Link href="/research">
            {t("researchProjects")}
          </Link>

          <Link href="/people">
            {t("ourPeople")}
          </Link>

          <Link href="/publications">
            {t("publications")}
          </Link>
        </div>

        {/* Contact Links */}
        <div>
          <strong>{t("connect")}</strong>

          <Link href="/contact">
            {t("contact")}
          </Link>

          {site.withYouUrl && (
            <a
              href={site.withYouUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              WithYou ↗
            </a>
          )}
        </div>
      </div>

      {/* Copyright */}
      <div className="container footer-bottom">
        © {new Date().getFullYear()} {site.name[locale]}.{" "}
        {t("copyrightNotice")}
      </div>
    </footer>
  );
}
