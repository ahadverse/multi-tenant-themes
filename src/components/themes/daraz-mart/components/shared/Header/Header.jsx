import React from "react";
import { FiSearch, FiShoppingCart, FiUser, FiMapPin } from "react-icons/fi";

const Header = ({ data }) => {
  const { theme_config, business_name, top_bar } = data;

  return (
    <header className='w-full bg-white shadow-sm font-sans'>
      {/* Top Utility Bar */}
      <div className='bg-[#f4f4f4] text-[12px] py-1.5 border-b'>
        <div className='container mx-auto max-w-[1200px] px-4 flex justify-between items-center text-slate-600'>
          <div className='flex items-center gap-1'>
            <FiMapPin style={{ color: theme_config.primary_color }} />
            <span>{top_bar?.location || "Deliver to: Location"}</span>
          </div>
          <div className='flex gap-6'>
            {top_bar?.links?.map((link) => (
              <span
                key={link}
                className='hover:text-[#f57224] cursor-pointer transition-colors'
              >
                {link}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Search Area */}
      <div className='container mx-auto max-w-[1200px] px-4 py-4 flex items-center gap-10'>
        <div
          className='text-3xl font-bold tracking-tighter shrink-0'
          style={{ color: theme_config.primary_color }}
        >
          {business_name}
        </div>

        <div className='flex-1 flex'>
          <input
            type='text'
            placeholder={`Search in ${business_name}`}
            className='w-full bg-[#eff0f5] px-4 py-2.5 outline-none text-sm rounded-l-sm border-none focus:ring-1 focus:ring-orange-300'
          />
          <button
            className='p-3 text-white rounded-r-sm transition-colors'
            style={{ backgroundColor: theme_config.primary_color }}
          >
            <FiSearch size={18} />
          </button>
        </div>

        <div className='flex items-center gap-8 shrink-0'>
          <div className='flex items-center gap-2 cursor-pointer group'>
            <FiUser size={22} className='group-hover:text-orange-500' />
            <span className='text-sm font-medium'>Account</span>
          </div>
          <div className='relative cursor-pointer group'>
            <FiShoppingCart size={22} className='group-hover:text-orange-500' />
            <span
              className='absolute -top-2 -right-2 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white'
              style={{ backgroundColor: theme_config.primary_color }}
            >
              3
            </span>
            {/* <span className='ml-6 text-sm font-medium'>Cart</span> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
