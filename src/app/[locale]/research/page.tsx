
import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";

import { projects, site, type Locale } from "@/data/site";
import { PageIntro, TextLink } from "@/components/ui";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "Research",
  });

  return {
    title: t("metadataTitle"),
    description: t("introDescription"),
  };
}

export default async function Research() {
  const t = await getTranslations("Research");
  const locale = (await getLocale()) as Locale;

  return (
    <>
      {/* Page Introduction */}
      <PageIntro
        eyebrow={t("introEyebrow")}
        title={t("introTitle")}
        description={t("introDescription")}
      />

      {/* Research Projects */}
      <section className="section container">
        <div className="research-list">
          {projects.map((p, i) => (
            <article className="research-item" key={p.title}>
              {/* Project Visual */}
              <div className={`research-thumb visual-${i % 3}`}>
                <span>0{i + 1}</span>
              </div>

              {/* Project Information */}
              <div>
                <span className="card-kicker">
                  {p.category[locale]}
                </span>

                <h2>{p.title}</h2>

                <p>{p.description[locale]}</p>

                {/* Project Links */}
                {p.title === "WithYou" && site.withYouUrl ? (
                  <TextLink href={site.withYouUrl} external>
                    {t("visitProject")}
                  </TextLink>
                ) : p.href ? (
                  <TextLink
                    href={p.href}
                    external={p.external}
                  >
                    {t("projectDetails")}
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
      </section>
    </>
  );
}
