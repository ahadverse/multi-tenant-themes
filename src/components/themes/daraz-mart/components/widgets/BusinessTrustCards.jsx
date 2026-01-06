import React from "react";
import { FiTruck, FiShield, FiRotateCcw, FiHeadphones } from "react-icons/fi";

const BusinessTrustCards = ({ data }) => {
  const { theme_config } = data;

  const features = [
    {
      id: 1,
      icon: <FiTruck />,
      title: "Free Delivery",
      desc: "On orders over Rs. 1000",
    },
    {
      id: 2,
      icon: <FiShield />,
      title: "Secure Payment",
      desc: "100% secure transactions",
    },
    {
      id: 3,
      icon: <FiRotateCcw />,
      title: "Easy Returns",
      desc: "7-day return policy",
    },
    {
      id: 4,
      icon: <FiHeadphones />,
      title: "24/7 Support",
      desc: "We're here to help",
    },
  ];

  return (
    <section className='bg-white border-t border-slate-100 py-10'>
      <div className='container mx-auto max-w-[1200px] px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
          {features.map((item) => (
            <div key={item.id} className='flex items-center gap-4 group'>
              <div
                className='w-14 h-14 rounded-full border flex items-center justify-center text-2xl transition-colors group-hover:bg-orange-50'
                style={{
                  borderColor: `${theme_config.primary_color}20`,
                  color: theme_config.primary_color,
                }}
              >
                {item.icon}
              </div>
              <div>
                <h4 className='text-sm font-bold text-slate-800'>
                  {item.title}
                </h4>
                <p className='text-xs text-slate-500 mt-0.5'>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessTrustCards;
