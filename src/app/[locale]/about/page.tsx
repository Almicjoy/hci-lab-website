
import { getTranslations } from "next-intl/server";
import { PageIntro } from "@/components/ui";

export default async function AboutPage() {
  const t = await getTranslations("About");

  return (
    <main className="page-main academic-about-page">
      <PageIntro
        eyebrow={t("introEyebrow")}
        title={t("introTitle")}
        description={t("introDescription")}
      />

      <div className="container academic-about-content">
        {/* Mission */}
        <section
          className="academic-about-section"
          aria-labelledby="mission-heading"
        >
          <h2
            className="academic-section-banner"
            id="mission-heading"
          >
            {t("missionTitle")}
          </h2>

          <div className="academic-section-body">
            <h3 className="academic-subheading">
              {t("missionSubtitle")}
            </h3>

            <p>{t("missionDescription")}</p>
            <p>{t("missionDetail")}</p>
          </div>
        </section>

        {/* Research Approach */}
        <section
          className="academic-about-section"
          aria-labelledby="approach-heading"
        >
          <h2
            className="academic-section-banner"
            id="approach-heading"
          >
            {t("approachTitle")}
          </h2>

          <div className="academic-section-body">
            <h3 className="academic-subheading">
              {t("approachSubtitle")}
            </h3>

            <p>{t("approachDescription")}</p>
            <p>{t("approachDetail")}</p>
          </div>
        </section>

        {/* Research Themes */}
        <section
          className="academic-about-section"
          aria-labelledby="themes-heading"
        >
          <h2
            className="academic-section-banner"
            id="themes-heading"
          >
            {t("themesTitle")}
          </h2>

          <div className="academic-section-body">
            <div className="academic-research-theme">
              <h3 className="academic-subheading">
                {t("humanLinkTitle")}
              </h3>

              <p>{t("humanLinkDescription")}</p>
            </div>

            <div className="academic-research-theme">
              <h3 className="academic-subheading">
                {t("roleMobilityTitle")}
              </h3>

              <p>{t("roleMobilityDescription")}</p>
            </div>

            <div className="academic-research-theme">
              <h3 className="academic-subheading">
                {t("serviceInnovationTitle")}
              </h3>

              <p>{t("serviceInnovationDescription")}</p>
            </div>
          </div>
        </section>

        {/* Application */}
        <section
          className="academic-about-section"
          aria-labelledby="application-heading"
        >
          <h2
            className="academic-section-banner"
            id="application-heading"
          >
            {t("applicationTitle")}
          </h2>

          <div className="academic-section-body">
            <h3 className="academic-subheading">
              {t("withYouTitle")}
            </h3>

            <p>{t("withYouDescription")}</p>
            <p>{t("withYouDetail")}</p>
          </div>
        </section>
      </div>
    </main>
  );
}
