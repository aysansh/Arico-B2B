import React from "react";
import Paragraph from "../paragraph/Paragraph";
import CardPrice from "../cardPrice/CardPrice";
import ArTable from "../aricoTable/ArTable";

const ArPricingSection = () => {
  return (
    <div id="pricing" className="max-w-[70%] w-full mx-auto  scroll-mt-20">
      <div className="relative p-16">
        <img
          src="./flying-bee.webp"
          className="absolute top-[-142px] right-[0px]"
          alt=""
        />
        <h3 className="text-3xl font-bold mb-4">Our pricing</h3>
        <div className="mb-2">
          <Paragraph
            title={"Permanent membership"}
            text={
              "Our membership fees should be affordable for every company to permanently gather as many active users as possible on Arico B2B. The larger the network, the greater the benefit for each company."
            }
          />
        </div>
        <div className="mb-2">
          <Paragraph
            title={"Flexible pricing"}
            text={
              "The extra ad function gives you the opportunity to adapt your ad spaces to your current needs on a monthly basis."
            }
          />
        </div>
      </div>
      <ul className="grid grid-cols-4  gap-2 justify-center py-10">
        <CardPrice
          offerTitle={"free"}
          price={"0.00"}
          text={
            "Our free version is ideal for testing Arico B2B. You receive two free ads for six months and can use the standard functions of the platform permanently to get an initial overview. Thanks to the category notifications, you won't miss any of the most recent relevant offers or requests."
          }
          bgColor={"bg-[#16A34A]"}
          textColor={"text-[#22C55E]"}
        />
        <CardPrice
          offerTitle={"BUSINESS"}
          price={"19.99"}
          text={
            "Ideal for all companies that need limited ad space for their services or products. In addition, companies that want to place ads on Arico B2B on a temporary or capacity-oriented basis have the flexibility they need thanks to the shortened term of the subscription. From this plan, you can choose to receive a B2B-optimized website based on your profile."
          }
          perminetPrice={"99.99"}
          period={"2 weeks"}
          subs={"6 Month"}
          bgColor={"bg-[#2563EB]"}
          textColor={"text-[#3B82F6]"}
        />
        <CardPrice
          offerTitle={"PREMIUM"}
          price={"39.99"}
          text={
            "In addition to all the other benefits, you can visit our trade fair and take part in Arico deals. The Premium plan is particularly suitable for retailers and producers with a large product range due to the very low price per extra ad per month. Optimize your ad structure and internal processes with additional contact persons that you can also introduce on your user profile."
          }
          perminetPrice={"399.99"}
          period={"One month"}
          subs={"Annual subscription"}
          bgColor={"bg-[#CA8A04]"}
          textColor={"text-[#EAB308]"}
        />
        <CardPrice
          offerTitle={"VIP"}
          price={"299.99"}
          text={
            "Get the maximum performance out of your Arico B2B account and place ads for all your products, services and demands. With the VIP plan, you get all the features and pay the least for 'extra ads'. With our VIP support, we take over a large part of the tasks involved and offer exclusive advertising opportunities."
          }
          perminetPrice={"3,300.00"}
          period={"One month"}
          subs={"Annual subscription"}
          bgColor={"bg-black"}
          textColor={"text-black"}
        />
      </ul>

      <ArTable />
    </div>
  );
};

export default ArPricingSection;
