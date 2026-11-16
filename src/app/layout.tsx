import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { site } from '@/data/site';
import './globals.css';
export const metadata: Metadata = {
  title: {default:`${site.name} | ${site.university}`,template:`%s | ${site.shortName}`},
  description: site.description,
  robots: {index: true,follow: true},
  openGraph: {type:'website',title:site.name,description:site.description,siteName:site.name},
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/><main id="main-content">{children}</main><Footer/></body></html>}
