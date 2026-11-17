
import { Link } from "@/i18n/navigation";
import Image from "next/image";

import { ArrowRight, ArrowUpRight, Users } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";

import { Eyebrow, TextLink } from "@/components/ui";
import { members, projects, site } from "@/data/site";

export default async function Home() {
  const locale = (await getLocale()) as "en" | "ja";
  const t = await getTranslations("Home");

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-grid">
          <div>

            <h1>
              {t("heroTitle")} <em>{t("heroHighlight")}</em>
            </h1>

            <p className="hero-lede">{t("heroDescription")}</p>

            <div className="hero-actions">
              <Link
                className="button button-light"
                href="/research"
              >
                {t("exploreResearch")}
                <ArrowRight size={18} />
              </Link>

              <Link
                className="button button-outline"
                href="/people"
              >
                {t("meetTeam")}
              </Link>
            </div>
          </div>

        <div className="hero-illustration">
          <Image
            src="/images/kyoto-people-white-transparent.png"
            alt="Illustration of people collaborating, with Kyoto's skyline and landscape"
            width={1100}
            height={500}
            priority
            className="hero-illustration-image"
          />
        </div>
        </div>

      </section>

      {/* Purpose Section */}
      <section className="section container split-section">
        <div>
          <Eyebrow>{t("purposeEyebrow")}</Eyebrow>
          <h2>{t("purposeTitle")}</h2>
        </div>

        <div>
          <p className="large-copy">
            {t("purposeDescription")}
          </p>

          <p className="muted">
            {t("purposeDetail")}
          </p>

          <TextLink href="/about">
            {t("moreAbout")}
          </TextLink>
        </div>
      </section>

      {/* Research & Projects Section */}
      <section className="section section-tinted">
        <div className="container">
          <div className="section-heading">
            <div>
              <Eyebrow>{t("projectsEyebrow")}</Eyebrow>
              <h2>{t("projectsTitle")}</h2>
            </div>

            <TextLink href="/research">
              {t("allProjects")}
            </TextLink>
          </div>

          <div className="cards">
            {projects.map((p, i) => (
              <article className="project-card" key={p.title}>
                <div className={`project-visual visual-${i % 3}`}>
                  <span className="visual-number">
                    0{i + 1}
                  </span>

                  <span className="visual-shape" />
                </div>

                <div className="project-content">
                  <span className="card-kicker">
                    {p.category[locale]}
                  </span>

                  <h3>{p.title}</h3>
                  <p>{p.description[locale]}</p>

                  {p.title === "WithYou" && site.withYouUrl ? (
                    <TextLink href={site.withYouUrl} external>
                      {t("visitWithYou")}
                    </TextLink>
                  ) : p.href ? (
                    <TextLink
                      href={p.href}
                      external={p.external}
                    >
                      {t("learnMore")}
                    </TextLink>
                  ) : (
                    <span className="muted small">
                      {t("comingSoon")}
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section container">
        <div className="section-heading">
          <div>
            <Eyebrow>{t("peopleEyebrow")}</Eyebrow>
            <h2>{t("peopleTitle")}</h2>
          </div>

          <TextLink href="/people">
            {t("fullTeam")}
          </TextLink>
        </div>

        <div className="member-grid">
          {members.slice(0, 3).map((m, i) => (
            <article className="member-card" key={i}>
              <div className="member-avatar" aria-hidden="true">
                <Users size={38} strokeWidth={1} />
              </div>

              <h3>{m.name}</h3>

              <p className="member-role">
                {m.role[locale]}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="section cta-band">
        <div className="container cta-inner">
          <div>
            <Eyebrow>{t("collaborateEyebrow")}</Eyebrow>

            <h2>{t("collaborateTitle")}</h2>
          </div>

          <Link
            className="button button-light"
            href="/contact"
          >
            {t("getInTouch")}
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
