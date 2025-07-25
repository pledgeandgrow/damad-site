import type { Metadata } from "next";
import FAQ from "@/components/faq/FAQ";
import PageHeader from "@/components/common/PageHeader";

export const metadata: Metadata = {
  title: "FAQ - Questions fréquentes | DAMAD",
  description: "Trouvez des réponses aux questions fréquentes concernant nos services d'ascenseurs, maintenance, dépannage et installation.",
  keywords: ["FAQ", "questions fréquentes", "ascenseurs", "maintenance", "dépannage", "DAMAD"],
};

export default function FAQPage() {
  return (
    <>
      <PageHeader 
        title="Foire aux questions" 
        subtitle="Trouvez rapidement des réponses à vos questions"
        className="bg-gradient-to-r from-[#2b3343] to-[#3d4759]"
      />
      <FAQ />
    </>
  );
}
