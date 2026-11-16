import type { Metadata } from 'next';
import { Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { site } from '@/data/site';
import { PageIntro } from '@/components/ui';
export const metadata:Metadata={title:'Contact'};
export default function Contact(){return <><PageIntro eyebrow="Contact & collaboration" title="Let's connect." description="Interested in our research, collaboration, or learning more about the laboratory?"/><section className="section container"><div className="contact-grid"><div className="contact-panel"><Mail/><h2>Get in touch</h2><p>For research inquiries, potential partnerships, or general questions, contact the laboratory through its approved institutional address.</p>{site.email?<a className="text-link" href={`mailto:${site.email}`}>{site.email}<ArrowUpRight size={17}/></a>:<p className="muted small">Public contact email to be confirmed.</p>}</div><div className="contact-panel"><MapPin/><h2>Kyoto University</h2><p>Kyoto, Japan</p><p className="muted small">Add the approved campus, building, and postal address before publication.</p></div></div></section></>}
