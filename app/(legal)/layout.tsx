import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header variant="legal" />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
