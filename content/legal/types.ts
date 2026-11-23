export type LegalBlock = { type: "p"; text: string } | { type: "ul"; items: string[] };

export type LegalSection = {
  id: string;
  number: string;
  heading: string;
  level: 2 | 3;
  blocks: LegalBlock[];
};

export type LegalDoc = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  intro: LegalBlock[];
  sections: LegalSection[];
};
