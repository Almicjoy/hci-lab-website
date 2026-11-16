
import type { Metadata } from "next";
import Image from "next/image";
import { UserRound, ExternalLink } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";

import { members, type Locale } from "@/data/site";
import { PageIntro } from "@/components/ui";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "People",
  });

  return {
    title: t("metadataTitle"),
    description: t("introDescription"),
  };
}

export default async function People() {
  const t = await getTranslations("People");
  const locale = (await getLocale()) as Locale;

  return (
    <>
      {/* Page Introduction */}
      <PageIntro
        eyebrow={t("introEyebrow")}
        title={t("introTitle")}
        description={t("introDescription")}
      />

      {/* Laboratory Members */}
      <section className="section container">
        <div className="people-grid">
          {members.map((m, i) => (
            <article className="person-card" key={i}>
              {/* Member Photo */}
              <div className="person-photo">
                {m.image ? (
                  <Image
                    src={m.image}
                    alt={t("portraitAlt", { name: m.name })}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <UserRound size={55} strokeWidth={1} />
                )}
              </div>

              {/* Member Information */}
              <div className="person-body">
                <span className="card-kicker">
                  {m.role[locale]}
                </span>

                <h2>{m.name}</h2>

                <p>{m.bio[locale]}</p>

                {/* External Links */}
                <div className="social-links">
                  {m.links?.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                      <ExternalLink size={13} />
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
