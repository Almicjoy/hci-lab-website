
import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";

import { ImageSlot, TextLink } from "@/components/ui";
import {
  activities,
  heroImages,
  news,
  newsletter,
  projects,
  site,
  type Locale,
} from "@/data/site";

const NEWS_LIMIT = 5;

function dateParts(iso: string, locale: Locale) {
  const d = new Date(`${iso}T00:00:00Z`);

  return {
    month: new Intl.DateTimeFormat(locale, {
      timeZone: "UTC",
      month: "short",
    }).format(d),
    day: String(d.getUTCDate()),
    year: String(d.getUTCFullYear()),
    short: iso.replaceAll("-", "."),
  };
}

export default async function Home() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("Home");

  const latest = [...news]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, NEWS_LIMIT);

  const featured =
    projects.find((p) => p.thumbnail) ?? projects[0];

  const [main, ...side] = heroImages;

  return (
    <main className="editorial-home">
      <h1 className="sr-only">{site.name[locale]}</h1>

      {/* Photographic Mosaic */}
      {main && (
        <section
          className="home-mosaic container"
          aria-label={site.name[locale]}
        >
          <figure className="home-mosaic-main">
            <ImageSlot
              src={main.src}
              alt={main.alt[locale]}
              label={`${t("placeholder")} · 1200 × 675`}
              sizes="(max-width: 860px) 100vw, 720px"
            />
            <figcaption>{main.caption[locale]}</figcaption>
          </figure>

          <div className="home-mosaic-side">
            {side.slice(0, 2).map((img, i) => (
              <figure key={i}>
                <ImageSlot
                  src={img.src}
                  alt={img.alt[locale]}
                  label={`${t("placeholder")} · 800 × 450`}
                  sizes="(max-width: 860px) 50vw, 360px"
                />
                <figcaption>{img.caption[locale]}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* About the Laboratory */}
      <section className="editorial-about">
        <div className="container editorial-about-grid">
          <div className="editorial-about-heading">
            <p className="editorial-kicker">
              {t("aboutPreview.label")}
            </p>
            <h2>{t("aboutPreview.title")}</h2>
          </div>

          <div className="editorial-about-copy">
            <p className="editorial-lead">
              {t("aboutPreview.lead")}
            </p>
            <p>{t("aboutPreview.description")}</p>

            <TextLink href="/about">
              {t("aboutPreview.linkText")}
            </TextLink>
          </div>
        </div>
      </section>

      {/* News and Newsletter */}
      <section className="container editorial-news-columns">
        <div>
          <h2 className="editorial-section-title">
            {t("newsTitle")}
          </h2>

          {latest.length > 0 ? (
            <ul className="editorial-news-list">
              {latest.map((item) => {
                const d = dateParts(item.date, locale);

                return (
                  <li
                    className="editorial-news-item"
                    key={`${item.date}-${item.title.en}`}
                  >
                    <time
                      className="editorial-news-date"
                      dateTime={item.date}
                    >
                      <span>{d.month}</span>
                      <strong>{d.day}</strong>
                      <small>{d.year}</small>
                    </time>

                    <div className="editorial-news-body">
                      <span
                        className={`editorial-tag tone-${
                          item.tone ?? "notice"
                        }`}
                      >
                        {item.category[locale]}
                      </span>

                      <h3>{item.title[locale]}</h3>
                      <p>{item.body[locale]}</p>

                      {item.href && (
                        <TextLink
                          href={item.href}
                          external={/^https?:/.test(item.href)}
                        >
                          {t("readMore")}
                        </TextLink>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="editorial-empty">
              {t("noNews")}
            </p>
          )}
        </div>

        {/* Newsletter */}
        <aside
          className="editorial-paper"
          aria-label={t("newsletterKicker")}
        >
          <div className="editorial-paper-top">
            {/* <span>{t("newsletterKicker")}</span> */}
            <span>{newsletter.issue[locale]}</span>
          </div>

          <h2>{newsletter.title[locale]}</h2>
          <p className="editorial-paper-lead">
            {newsletter.summary[locale]}
          </p>

          <h3>{t("inThisIssue")}</h3>

          <ol>
            {newsletter.topics.map((topic, i) => (
              <li key={i}>{topic[locale]}</li>
            ))}
          </ol>

          {newsletter.href ? (
            <a
              className="editorial-paper-link"
              href={newsletter.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("downloadPdf")} →
            </a>
          ) : (
            <span className="editorial-paper-soon">
              {t("pdfSoon")}
            </span>
          )}
        </aside>
      </section>

      {/* Activities */}
      <section className="container editorial-activities">
        <h2 className="editorial-section-title">
          {t("activitiesTitle")}
        </h2>

        <div className="editorial-activity-grid">
          {activities.map((activity) => {
            const d = dateParts(activity.date, locale);

            return (
              <article
                className="editorial-activity"
                key={`${activity.date}-${activity.title.en}`}
              >
                <div className="editorial-activity-image">
                  <ImageSlot
                    src={activity.image}
                    alt={activity.title[locale]}
                    label={`${t("placeholder")} · 4:3`}
                    sizes="(max-width: 700px) 100vw, (max-width: 950px) 50vw, 350px"
                  />
                </div>

                <div className="editorial-activity-meta">
                  <span
                    className={`editorial-tag tone-${
                      activity.tone ?? "notice"
                    }`}
                  >
                    {activity.category[locale]}
                  </span>
                  <time dateTime={activity.date}>
                    {d.short}
                  </time>
                </div>

                <h3>{activity.title[locale]}</h3>
              </article>
            );
          })}
        </div>
      </section>

      {/* Featured Research */}
      {featured && (
        <section className="editorial-feature">
          <div className="container editorial-feature-grid">
            <div>
              <p className="editorial-kicker">
                {t("featuredTitle")}
              </p>

              <h2>{featured.title}</h2>
              <p>{featured.description[locale]}</p>

              <TextLink href="/research">
                {t("allProjects")}
              </TextLink>
            </div>

            {featured.thumbnail && (
              <figure className="editorial-feature-figure">
                <Image
                  src={featured.thumbnail}
                  alt={`${featured.title} logo`}
                  width={240}
                  height={240}
                />

                <figcaption>
                  {featured.href && (
                    <span>
                      <TextLink
                        href={featured.href}
                        external={featured.external}
                      >
                        {t("visitWithYou")}
                      </TextLink>
                    </span>
                  )}
                </figcaption>
              </figure>
            )}
          </div>
        </section>
      )}
    </main>
  );
}
