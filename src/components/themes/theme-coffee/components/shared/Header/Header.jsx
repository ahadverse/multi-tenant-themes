import { FiMenu, FiSearch, FiShoppingBag } from "react-icons/fi";
const Header = ({ config }) => (
  <nav
    className='sticky top-0 z-50 bg-white border-b border-gray-100 px-6 py-4 flex justify-between items-center'
    style={{ fontFamily: "var(--theme-font)" }}
  >
    <div className='text-xl text-primary font-bold uppercase tracking-widest'>
      {config.business_name}
    </div>
    <div className='hidden md:flex gap-8 text-sm font-medium'>
      <a href='#' className='hover:opacity-70'>
        Shop
      </a>
      <a href='#' className='hover:opacity-70'>
        Our Story
      </a>
      <a href='#' className='hover:opacity-70'>
        Wholesale
      </a>
    </div>
    <div className='flex items-center gap-5'>
      <FiSearch className='text-xl cursor-pointer hover:text-[var(--text-secondary)]' />
      <div className='relative cursor-pointer'>
        <FiShoppingBag
          className='text-xl'
          style={{ color: "var(--text-secondary)" }}
        />
        <span className='absolute -top-2 -right-2 bg-black text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full'>
          3
        </span>
      </div>
      <FiMenu className='md:hidden text-2xl' />
    </div>
  </nav>
);

export default Header;
