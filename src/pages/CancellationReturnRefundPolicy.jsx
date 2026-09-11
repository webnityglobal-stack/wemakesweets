import CancellationReturnRefundContent from "@/components/cancellationReturnRefund/CancellationReturnRefundContent";
import CancellationReturnRefundHeader from "@/components/cancellationReturnRefund/CancellationReturnRefundHeader";
import React from "react";


const CancellationReturnRefundPolicy = () => {
  return (
    <main className="min-h-screen bg-[#f5ebda]">
      <CancellationReturnRefundHeader />
      <CancellationReturnRefundContent />
    </main>
  );
};

export default CancellationReturnRefundPolicy;