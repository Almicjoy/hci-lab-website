
import type { ReactNode } from "react";

type RichTextProps = {
  text?: string | null;
};

export default function RichText({ text }: RichTextProps): ReactNode {
  if (!text) return null;

  const groups: ReactNode[][] = [[]];
  const tags: string[] = [];

  const parts = text.split(/(<\/?(?:bold|italic|underline)>)/g);

  parts.forEach((part, index) => {
    const opening = part.match(/^<(bold|italic|underline)>$/);
    const closing = part.match(/^<\/(bold|italic|underline)>$/);

    if (opening) {
      tags.push(opening[1]);
      groups.push([]);
    } else if (closing) {
      const tag = tags.pop();
      const content = groups.pop();

      if (!tag || !content) return;

      let element: ReactNode;

      switch (tag) {
        case "bold":
          element = <strong key={index}>{content}</strong>;
          break;

        case "italic":
          element = <em key={index}>{content}</em>;
          break;

        case "underline":
          element = <u key={index}>{content}</u>;
          break;

        default:
          element = content;
      }

      groups[groups.length - 1].push(element);
    } else if (part) {
      groups[groups.length - 1].push(part);
    }
  });

  return <>{groups[0]}</>;
}
