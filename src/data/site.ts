/** Replace all placeholder copy, names, and URLs before publication. */
export const site = {
  name: 'Human-Centered Innovation Laboratory',
  university: 'Kyoto University',
  shortName: 'HCI Lab',
  description: 'Researching people-centered approaches to technology, collaboration, and social innovation.',
  email: '', // Set an approved public lab email address.
  url: 'https://example.com', // Replace with your production domain.
  withYouUrl: '', // Add the approved WithYou website URL.
};

export type Member = {
  name: string;
  role: string;
  bio: string;
  image?: string;
  links?: { label: string; url: string }[];
};
export const members: Member[] = [
  { name: 'Faculty Member', role: 'Principal Investigator', bio: 'Add the faculty member’s approved biography and research interests.', links: [] },
  { name: 'Research Member', role: 'Researcher', bio: 'Add the researcher’s approved biography and research interests.', links: [] },
  { name: 'Student Member', role: 'Student Researcher', bio: 'Add the student’s approved biography and research interests.', links: [] },
];

export type Project = { title: string; category: string; description: string; href?: string; external?: boolean };
export const projects: Project[] = [
  { title: 'WithYou', category: 'Featured initiative', description: 'Introduce the WithYou project, its goals, and its connection to the laboratory here.', external: true },
  { title: 'Research Initiative', category: 'Research', description: 'Add an approved summary of another current or planned laboratory initiative.' },
];

export const publications: { title: string; authors: string; venue: string; year: string; url?: string }[] = [];
