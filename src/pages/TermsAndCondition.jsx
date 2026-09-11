import TermsContent from "@/components/termsAndContition/TermsContent";
import TermsHeader from "@/components/termsAndContition/TermsHeader";
import React from "react";


const TermsAndConditions = () => {
  return (
    <main className="min-h-screen bg-[#f5ebda]">
      <TermsHeader />
      <TermsContent />
    </main>
  );
};

export default TermsAndConditions;