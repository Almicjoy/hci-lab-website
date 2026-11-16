
import type { Metadata } from "next";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";

import { site, type Locale } from "@/data/site";
import { PageIntro } from "@/components/ui";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "Contact",
  });

  return {
    title: t("metadataTitle"),
    description: t("introDescription"),
  };
}

export default async function Contact() {
  const t = await getTranslations("Contact");
  const locale = (await getLocale()) as Locale;

  return (
    <>
      {/* Page Introduction */}
      <PageIntro
        eyebrow={t("introEyebrow")}
        title={t("introTitle")}
        description={t("introDescription")}
      />

      {/* Contact Information */}
      <section className="section container">
        <div className="contact-grid">
          {/* Email Contact */}
          <div className="contact-panel">
            <Mail />

            <h2>{t("getInTouch")}</h2>

            <p>{t("contactDescription")}</p>

            {site.email ? (
              <a
                className="text-link"
                href={`mailto:${site.email}`}
              >
                {site.email}
                <ArrowUpRight size={17} />
              </a>
            ) : (
              <p className="muted small">
                {t("emailPending")}
              </p>
            )}
          </div>

          {/* University Location */}
          <div className="contact-panel">
            <MapPin />

            <h2>{site.university[locale]}</h2>

            <p>{t("location")}</p>

            <p className="muted small">
              {t("addressPending")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
