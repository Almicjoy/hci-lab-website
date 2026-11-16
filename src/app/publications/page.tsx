import type { Metadata } from 'next';
import { ExternalLink } from 'lucide-react';
import { publications } from '@/data/site';
import { PageIntro } from '@/components/ui';
export const metadata:Metadata={title:'Publications'};
export default function Publications(){return <><PageIntro eyebrow="Publications" title="Research outputs & publications." description="Selected publications, presentations, and other research outputs from the laboratory."/><section className="section container"><div className="publication-list">{publications.length===0?<div className="empty-state"><h2>Publications will appear here.</h2><p>Add approved entries to <code>src/data/site.ts</code> to populate this page.</p></div>:publications.map((p,i)=><article className="publication" key={i}><span className="card-kicker">{p.year} · {p.venue}</span><h2>{p.title}</h2><p>{p.authors}</p>{p.url&&<a href={p.url} target="_blank" rel="noopener noreferrer">View publication <ExternalLink size={15}/></a>}</article>)}</div></section></>}
