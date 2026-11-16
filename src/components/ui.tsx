import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';
export function Eyebrow({children}:{children:ReactNode}){return <span className="eyebrow">{children}</span>}
export function PageIntro({eyebrow,title,description}:{eyebrow:string;title:string;description:string}){return <section className="page-intro container"><Eyebrow>{eyebrow}</Eyebrow><h1>{title}</h1><p>{description}</p></section>}
export function TextLink({href,children,external=false}:{href:string;children:ReactNode;external?:boolean}){return external?<a className="text-link" href={href} target="_blank" rel="noopener noreferrer">{children}<ArrowUpRight size={17}/></a>:<Link className="text-link" href={href}>{children}<ArrowRight size={17}/></Link>}
