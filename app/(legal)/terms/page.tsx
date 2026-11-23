import type { Metadata } from "next";
import { terms } from "@/content/legal/terms";
import { LegalDocument } from "@/components/legal/LegalDocument";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: terms.summary,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return <LegalDocument doc={terms} />;
}
