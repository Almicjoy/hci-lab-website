'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { site } from '@/data/site';
const links = [{href:'/about',label:'About'},{href:'/research',label:'Research'},{href:'/people',label:'People'},{href:'/publications',label:'Publications'},{href:'/contact',label:'Contact'}];
export function Header() {
  const pathname = usePathname();
  const [open,setOpen] = useState(false);
  return <header className="site-header"><div className="container nav-wrap">
    <Link href="/" className="brand" onClick={()=>setOpen(false)} aria-label="Lab homepage"><span className="brand-mark">H<span>·</span>C</span><span className="brand-copy"><strong>{site.name}</strong><small>{site.university}</small></span></Link>
    <nav className="desktop-nav" aria-label="Main navigation">{links.map(l=><Link key={l.href} className={pathname===l.href?'active':''} href={l.href}>{l.label}</Link>)}{site.withYouUrl&&<a className="nav-external" href={site.withYouUrl} target="_blank" rel="noopener noreferrer">WithYou <ArrowUpRight size={14}/></a>}</nav>
    <button className="menu-toggle" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} aria-controls="mobile-nav" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
  </div>{open&&<nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">{links.map(l=><Link key={l.href} href={l.href} onClick={()=>setOpen(false)}>{l.label}</Link>)}{site.withYouUrl&&<a href={site.withYouUrl} target="_blank" rel="noopener noreferrer" onClick={()=>setOpen(false)}>WithYou ↗</a>}</nav>}</header>;
}
