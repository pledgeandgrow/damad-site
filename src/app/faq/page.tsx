import type { Metadata } from "next";
import FAQ from "@/components/faq/FAQ";

export const metadata: Metadata = {
  title: "FAQ - Questions fréquentes | DAMAD",
  description: "Trouvez des réponses aux questions fréquentes concernant nos services d'ascenseurs, maintenance, dépannage et installation.",
  keywords: ["FAQ", "questions fréquentes", "ascenseurs", "maintenance", "dépannage", "DAMAD"],
};

export default function FAQPage() {
  return (
    <>
      <FAQ />
    </>
  );
}
