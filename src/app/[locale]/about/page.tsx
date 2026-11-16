
import type { Metadata } from "next";
import { Compass, Lightbulb, Users } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { PageIntro, Eyebrow } from "@/components/ui";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "About",
  });

  return {
    title: t("metadataTitle"),
    description: t("introDescription"),
  };
}

export default async function About() {
  const t = await getTranslations("About");

  return (
    <>
      {/* Page Introduction */}
      <PageIntro
        eyebrow={t("introEyebrow")}
        title={t("introTitle")}
        description={t("introDescription")}
      />

      {/* Mission Section */}
      <section className="section container split-section">
        <div>
          <Eyebrow>{t("missionEyebrow")}</Eyebrow>

          <h2>{t("missionTitle")}</h2>
        </div>

        <div>
          <p className="large-copy">
            {t("missionDescription")}
          </p>

          <p className="muted">
            {t("missionDetail")}
          </p>
        </div>
      </section>

      {/* Guiding Principles Section */}
      <section className="section section-tinted">
        <div className="container">
          <Eyebrow>{t("approachEyebrow")}</Eyebrow>

          <h2>{t("approachTitle")}</h2>

          <div className="feature-grid">
            {/* Human-Centered */}
            <article>
              <Users />

              <h3>{t("humanCenteredTitle")}</h3>

              <p>{t("humanCenteredDescription")}</p>
            </article>

            {/* Interdisciplinary */}
            <article>
              <Compass />

              <h3>{t("interdisciplinaryTitle")}</h3>

              <p>{t("interdisciplinaryDescription")}</p>
            </article>

            {/* Impact-Oriented */}
            <article>
              <Lightbulb />

              <h3>{t("impactTitle")}</h3>

              <p>{t("impactDescription")}</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
