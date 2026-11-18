
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import {
  publications,
  type Publication,
  type PublicationType,
} from "@/data/site";
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

function PublicationEntry({
  publication,
  typeLabel,
}: {
  publication: Publication;
  typeLabel: string;
}) {
  const details = [
    publication.venue,
    publication.volume
      ? `Vol. ${publication.volume}`
      : null,
    publication.issue
      ? `No. ${publication.issue}`
      : null,
    publication.pages
      ? `pp. ${publication.pages}`
      : null,
  ].filter(Boolean);

  return (
    <article className="publication-entry">
      <div className="publication-entry-main">
        <span className="publication-type">
          {typeLabel}
        </span>

        <h3>{publication.title}</h3>

        <p className="publication-authors">
          {publication.authors.join(", ")}
        </p>

        {details.length > 0 && (
          <p className="publication-venue">
            {details.join(", ")}
          </p>
        )}

        <div className="publication-links">
          {publication.doi && (
            <a
              href={`https://doi.org/${publication.doi}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              DOI
            </a>
          )}

          {publication.url && (
            <a
              href={publication.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </a>
          )}

          {publication.pdf && (
            <a
              href={publication.pdf}
              target="_blank"
              rel="noopener noreferrer"
            >
              PDF
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default async function PublicationsPage() {
  const t = await getTranslations("Publications");

  const sorted = [...publications].sort(
    (a, b) => b.year - a.year
  );

  const years = [...new Set(sorted.map((p) => p.year))];

  return (
    <>
      <PageIntro
        eyebrow={t("introEyebrow")}
        title={t("introTitle")}
        description={t("introDescription")}
      />

      <section className="container publications-directory">
        {years.length === 0 ? (
          <p className="publications-empty">
            {t("empty")}
          </p>
        ) : (
          years.map((year) => (
            <section
              key={year}
              className="publication-year-group"
            >
              <h2 className="publication-year">
                {year}
              </h2>

              <div className="publication-year-list">
                {sorted
                  .filter((p) => p.year === year)
                  .map((publication) => (
                    <PublicationEntry
                      key={publication.id}
                      publication={publication}
                      typeLabel={t(
                        `types.${publication.type}` as
                          `types.${PublicationType}`
                      )}
                    />
                  ))}
              </div>
            </section>
          ))
        )}
      </section>
    </>
  );
}
