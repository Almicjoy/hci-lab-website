# Human-Centered Innovation Laboratory — Website Starter

A responsive institutional website boilerplate for a laboratory affiliated with Kyoto University. **All people, descriptions, project URLs, and institutional details are placeholders and must be reviewed before publication.** This starter is not an official university site.

## Stack
- Next.js 15 App Router, React 19, TypeScript
- Tailwind CSS 4 + custom CSS design tokens
- Lucide icons
- Static, file-based content; no database or authentication

## Getting started

Requires Node.js 20 or later.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

For production:

```bash
npm run lint
npm run build
npm run start
```

## Update content
1. **`src/data/site.ts`**: laboratory name, description, production URL, approved email, WithYou URL, member profiles, projects, and publications.
2. **`src/app/page.tsx`**: homepage sections.
3. **`src/app/about/page.tsx`**: approved laboratory mission and guiding principles.
4. **`src/app/globals.css`**: design colors and responsive styles.
5. Add member photographs under `public/members/` and set `image: '/members/photo.jpg'`.
6. Add real URLs for team members in the `links` arrays, e.g. `{ label: 'LinkedIn', url: 'https://www.linkedin.com/in/...' }`.

The WithYou link is deliberately hidden until `withYouUrl` is set; its featured project card remains visible as placeholder content.

## Deploy to Vercel
1. Create a GitHub repository and push this folder.
2. Import the repository into Vercel; it should detect Next.js automatically.
3. Configure a lab-owned domain or an approved university subdomain.
4. Update `site.url`, metadata, and contact information before public release.
5. Verify mobile layouts, links, content approvals, and deployment plan terms.

## Project structure

```
src/
  app/
    layout.tsx            # Shared header, footer, metadata
    page.tsx              # Home
    globals.css           # Design system
    about/page.tsx
    research/page.tsx
    people/page.tsx
    publications/page.tsx
    contact/page.tsx
  components/
    header.tsx
    footer.tsx
    ui.tsx
  data/site.ts            # Editable lab content
```

## Before publishing
- Confirm official lab name, faculty details, photo permissions, university branding, and affiliation statements.
- Replace placeholder content and domain, add real publications and research descriptions.
- Add a privacy policy if you later use analytics, tracking, or a contact form.
- Add bilingual content and an editing CMS only if needed.
