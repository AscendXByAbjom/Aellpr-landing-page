import type { Metadata } from "next";
import { privacy } from "@/content/legal/privacy";
import { LegalDocument } from "@/components/legal/LegalDocument";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: privacy.summary,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return <LegalDocument doc={privacy} />;
}
