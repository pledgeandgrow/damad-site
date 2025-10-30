import type { Metadata } from "next";
import FAQ from "@/components/faq/FAQ";

export const metadata: Metadata = {
  title: "FAQ - Questions fréquentes | DMD Ascenseur",
  description: "Trouvez des réponses aux questions fréquentes concernant nos services d'ascenseurs, maintenance, dépannage et installation.",
  keywords: ["FAQ", "questions fréquentes", "ascenseurs", "maintenance", "dépannage", "DMD Ascenseur"],
};

export default function FAQPage() {
  return (
    <>
      <FAQ />
    </>
  );
}
