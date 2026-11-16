/**
 * Laboratory website data.
 * Replace all placeholder copy, names, and URLs before publication.
 */

export type Locale = "en" | "ja";

export type LocalizedText = {
  en: string;
  ja: string;
};

/* ----------------------------------------
   Laboratory Information
---------------------------------------- */

export const site = {
  name: {
    en: "Human-Centered Innovation Laboratory",
    ja: "人間中心イノベーション研究室",
  },

  university: {
    en: "Kyoto University",
    ja: "京都大学",
  },

  shortName: "HCI Lab",

  description: {
    en: "Researching people-centered approaches to technology, collaboration, and social innovation.",
    ja: "テクノロジー、協働、社会イノベーションにおける人間中心のアプローチを研究しています。",
  },

  email: "", // Set an approved public lab email address.

  url: "https://example.com", // Replace with production domain.

  withYouUrl: "", // Add the approved WithYou website URL.
};

/* ----------------------------------------
   Laboratory Members
---------------------------------------- */

export type Member = {
  name: string;

  role: LocalizedText;

  bio: LocalizedText;

  image?: string;

  links?: {
    label: string;
    url: string;
  }[];
};

export const members: Member[] = [
  {
    name: "Faculty Member",

    role: {
      en: "Principal Investigator",
      ja: "研究代表者",
    },

    bio: {
      en: "Add the faculty member's approved biography and research interests.",
      ja: "教員の承認済みの経歴および研究分野を記載してください。",
    },

    links: [],
  },

  {
    name: "Research Member",

    role: {
      en: "Researcher",
      ja: "研究員",
    },

    bio: {
      en: "Add the researcher's approved biography and research interests.",
      ja: "研究員の承認済みの経歴および研究分野を記載してください。",
    },

    links: [],
  },

  {
    name: "Student Member",

    role: {
      en: "Student Researcher",
      ja: "学生研究員",
    },

    bio: {
      en: "Add the student's approved biography and research interests.",
      ja: "学生の承認済みの経歴および研究分野を記載してください。",
    },

    links: [],
  },
];

/* ----------------------------------------
   Research Projects
---------------------------------------- */

export type Project = {
  title: string;

  category: LocalizedText;

  description: LocalizedText;

  href?: string;

  external?: boolean;
};

export const projects: Project[] = [
  {
    title: "WithYou",

    category: {
      en: "Featured initiative",
      ja: "注目のプロジェクト",
    },

    description: {
      en: "Introduce the WithYou project, its goals, and its connection to the laboratory here.",
      ja: "WithYouプロジェクトの概要、目的、および研究室との関係について記載してください。",
    },

    external: true,
  },

  {
    title: "Research Initiative",

    category: {
      en: "Research",
      ja: "研究",
    },

    description: {
      en: "Add an approved summary of another current or planned laboratory initiative.",
      ja: "現在進行中または計画中の研究プロジェクトについて、承認済みの概要を記載してください。",
    },
  },
];

/* ----------------------------------------
   Publications
---------------------------------------- */

export type Publication = {
  title: string;

  authors: string;

  venue: string;

  year: string;

  url?: string;

  description?: LocalizedText;
};

export const publications: Publication[] = [];
