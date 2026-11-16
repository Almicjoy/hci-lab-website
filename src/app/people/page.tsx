
import type { Metadata } from "next";
import Image from "next/image";
import { UserRound, ExternalLink } from "lucide-react";

import { members } from "@/data/site";
import { PageIntro } from "@/components/ui";

export const metadata: Metadata = {
  title: "People",
};

export default function People() {
  return (
    <>
      <PageIntro
        eyebrow="Our people"
        title="The people behind the research."
        description="Meet the faculty, researchers, and students contributing to the laboratory."
      />

      <section className="section container">
        <div className="people-grid">
          {members.map((m, i) => (
            <article className="person-card" key={i}>
              <div className="person-photo">
                {m.image ? (
                  <Image
                    src={m.image}
                    alt={`Portrait of ${m.name}`}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <UserRound size={55} strokeWidth={1} />
                )}
              </div>

              <div className="person-body">
                <span className="card-kicker">{m.role}</span>

                <h2>{m.name}</h2>

                <p>{m.bio}</p>

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
