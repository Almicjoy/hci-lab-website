import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

import Image from "next/image";


export function Eyebrow({ children }: { children: ReactNode }) {
  return <span className="eyebrow">{children}</span>;
}

export function PageIntro({
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="container">
    </section>
  );
}

export function TextLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  return external ? (
    <a
      className="text-link"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <ArrowUpRight size={17} />
    </a>
  ) : (
    <Link className="text-link" href={href}>
      {children}
      <ArrowRight size={17} />
    </Link>
  );
}


type ImageSlotProps = {
  src?: string | null;
  alt: string;
  label?: string;
  sizes?: string;
  className?: string;
};

export function ImageSlot({
  src,
  alt,
  label = "Image placeholder",
  sizes = "100vw",
  className = "",
}: ImageSlotProps) {
  return (
    <div className={`slot ${className}`}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          style={{ objectFit: "cover" }}
        />
      ) : (
        <span className="slot-label">{label}</span>
      )}
    </div>
  );
}
