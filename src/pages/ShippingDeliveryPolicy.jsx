import ShippingDeliveryContent from "@/components/shippingAndDelivery/ShippingDeliveryContent";
import ShippingDeliveryHeader from "@/components/shippingAndDelivery/ShippingDeliveryHeader";
import React from "react";


const ShippingDeliveryPolicy = () => {
  return (
    <main className="min-h-screen bg-[#f5ebda]">
      <ShippingDeliveryHeader />
      <ShippingDeliveryContent />
    </main>
  );
};

export default ShippingDeliveryPolicy;