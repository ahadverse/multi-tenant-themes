import React from "react";
import * as LuIcons from "react-icons/lu";

const ShopByCategory = ({ data }) => {
  const { categories, theme_config } = data;

  // Background colors mapped to match the screenshot visuals
  const bgColors = [
    "bg-blue-50",
    "bg-pink-50",
    "bg-orange-50",
    "bg-purple-50",
    "bg-green-50",
    "bg-orange-100",
    "bg-red-50",
    "bg-slate-50",
  ];

  return (
    <section className='bg-white py-8 mb-4'>
      <div className='container mx-auto max-w-[1200px] px-4'>
        <h2 className='text-xl font-bold mb-6 text-slate-900'>
          Shop by Category
        </h2>
        <div className='grid grid-cols-4 md:grid-cols-8 gap-4'>
          {categories?.map((cat, idx) => {
            const Icon = LuIcons[cat.icon] || LuIcons.LuPackage;
            return (
              <div
                key={idx}
                className='flex flex-col items-center cursor-pointer group'
              >
                <div
                  className={`w-16 h-16 rounded-full ${
                    bgColors[idx % bgColors.length]
                  } flex items-center justify-center text-2xl transition-transform group-hover:scale-110 shadow-sm`}
                >
                  <Icon style={{ color: theme_config.primary_color }} />
                </div>
                <span className='mt-3 text-xs font-medium text-slate-700'>
                  {cat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
