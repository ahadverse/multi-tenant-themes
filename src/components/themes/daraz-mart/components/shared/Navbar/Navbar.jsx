import React from "react";

const Navbar = ({ data }) => {
  const { theme_config, categories } = data;

  return (
    <nav className='bg-white border-b border-slate-100 hidden md:block'>
      <div className='container mx-auto max-w-[1200px] px-4'>
        <div className='flex items-center gap-8 py-3 overflow-x-auto no-scrollbar'>
          {categories?.map((cat, idx) => (
            <div
              key={idx}
              className='text-[13px] font-medium text-slate-700 hover:text-[#f57224] whitespace-nowrap cursor-pointer transition-colors'
              style={{ "--hover-color": theme_config.primary_color }}
            >
              {cat.label}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
