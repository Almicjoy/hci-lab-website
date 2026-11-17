/**
 * Laboratory website data.
 * Replace all placeholder copy, names, and URLs before publication.
 */

export type Locale = "en" | "ja";

export type LocalizedText = {
  en: string;
  ja: string;
};

export type MemberCategory =
  | "faculty"
  | "postdoc"
  | "phd"
  | "masters"
  | "undergraduate"
  | "staff"
  | "collaborator";



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
  id: string;
  name: string;
  nameJa?: string;
  category: MemberCategory;
  role: LocalizedText;
  affiliation?: LocalizedText;
  bio?: LocalizedText;
  researchInterests?: LocalizedText[];
  image?: string;
  email?: string;
  links?: {
    label: string;
    url: string;
  }[];
};

export const members: Member[] = [
  {
    id: "spring-han",
    name: "Spring H. Han",
    category: "faculty",

    role: {
      en: "Professor",
      ja: "教授",
    },

    affiliation: {
      en: "Graduate School of Management, Kyoto University",
      ja: "京都大学大学院工学研究科",
    },
    researchInterests: [
      {
        en: "Service Marketing",
        ja: "サービスマーケティング",
      },
      {
        en: "Hospitality Management",
        ja: "ホスピタリティ管理",
      },
    ],

    links: [],
  },
  {
    id: "nguyen-van-tung",
    name: "Nguyen Van Tung",
    category: "masters",

    role: {
      en: "Research Assistant",
      ja: "修士2年",
    },

    affiliation: {
      en: "Graduate School of Economics, Kyoto University",
      ja: "京都大学大学院経済学研究科",
    },

    links: [],
  },
  {
    id: "alessa-castillo",
    name: "Alessa Castillo",
    nameJa: "キャスティーオ・アレサ",
    category: "staff",

    role: {
      en: "Technical Assistant",
      ja: "技術補佐員",
    },

    affiliation: {
      en: "Graduate School of Engineering, Kyoto University",
      ja: "京都大学大学院工学研究科",
    },
    researchInterests: [
      {
        en: "Human-Computer Interaction",
        ja: "ヒューマンコンピュータインタラクション",
      },
      {
        en: "Crowding Patterns and Transportation Systems",
        ja: "混雑動態と交通システム",
      },
    ],

    links: [
      {"label": "LinkedIn", "url": "https://www.linkedin.com/in/alessa-castillo-6030a2235/"}
    ],
  },
];

/* ----------------------------------------
   Research Projects
---------------------------------------- */

export type Project = {
  title: string;
  category: LocalizedText;
  description: LocalizedText;
  thumbnail?: string;
  more_info?: LocalizedText;
  href?: string;
  external?: boolean;
};

export const projects: Project[] = [
  {
    title: "Human Link",

    category: {
      en: "Research",
      ja: "研究",
    },

    description: {
      en: "Research on Human Link identified the coexistence of everyday support needs and willingness to help others. These findings informed our role-mobility approach, in which participants take on receiving, helping, and connecting roles.",
      ja: "ヒューマンリンクに関する研究では、日常生活における支援ニーズと他者を助けたいという意欲が共存していることが明らかになりました。これらの知見に基づき、参加者が支援を受ける役割、援助する役割、そして繋がりを築く役割の間を行き来する、役割移動型のアプローチを採用しました。",
    },

    more_info: {
      en: "The web prototype named WithYou is intended to facilitate individual matches, and measure whether a participant further acts in receiving, helping and connecting roles. It acts as an initial proof of concept involving approximately 30 participants provide a starting point for translating this potential into an organized service.",
      ja: "「WithYou」と名付けられたこのウェブ・プロトタイプは、個人間のマッチングを成立させることを目的としており、参加者がその後、受け取る側、支援する側、あるいはつなぎ役としてどのような行動をとるかを測定するものです。約30名の参加者を対象としたこの取り組みは、概念実証（PoC）の第一歩であり、この可能性を体系的なサービスへと発展させていくための出発点となります。"
    },

    thumbnail: "/images/with-you-logo.png",

    href: "https://withyou-worldwide.com/", // Add the approved WithYou website URL.

    external: true,
  },

  // {
  //   title: "Research Initiative",

  //   category: {
  //     en: "Research",
  //     ja: "研究",
  //   },

  //   description: {
  //     en: "Add an approved summary of another current or planned laboratory initiative.",
  //     ja: "現在進行中または計画中の研究プロジェクトについて、承認済みの概要を記載してください。",
  //   },
  // },
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
