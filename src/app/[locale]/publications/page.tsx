
import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { publications } from "@/data/site";
import { PageIntro } from "@/components/ui";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "Publications",
  });

  return {
    title: t("metadataTitle"),
    description: t("introDescription"),
  };
}

export default async function Publications() {
  const t = await getTranslations("Publications");

  return (
    <>
      {/* Page Introduction */}
      <PageIntro
        eyebrow={t("introEyebrow")}
        title={t("introTitle")}
        description={t("introDescription")}
      />

      {/* Publications Section */}
      <section className="section container">
        <div className="publication-list">
          {publications.length === 0 ? (
            /* Empty State */
            <div className="empty-state">
              <h2>{t("emptyTitle")}</h2>

              <p>
                {t.rich("emptyDescription", {
                  code: (chunks) => <code>{chunks}</code>,
                })}
              </p>
            </div>
          ) : (
            /* Publication List */
            publications.map((p, i) => (
              <article className="publication" key={i}>
                <span className="card-kicker">
                  {p.year} · {p.venue}
                </span>

                <h2>{p.title}</h2>

                <p>{p.authors}</p>

                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("viewPublication")}
                    <ExternalLink size={15} />
                  </a>
                )}
              </article>
            ))
          )}
        </div>
      </section>
    </>
  );
}
