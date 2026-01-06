import { FiSearch, FiShoppingCart, FiMenu } from "react-icons/fi";
import { RiFlashlightFill } from "react-icons/ri";

const Header = () => (
  <nav className='sticky top-0 z-50 bg-white border-b-[3px] border-black px-8 py-5 flex justify-between items-center'>
    <div className='flex items-center gap-2 text-2xl font-black italic uppercase tracking-tighter'>
      <RiFlashlightFill className='text-primary rotate-12' />
      VIBE<span className='text-primary'>STORE</span>
    </div>

    <div className='hidden lg:flex gap-10 font-black uppercase text-sm'>
      <a
        href='#'
        className='hover:text-primary underline decoration-4 decoration-yellow-400'
      >
        Drops
      </a>
      <a
        href='#'
        className='hover:text-primary underline decoration-4 underline-offset-4'
      >
        Collections
      </a>
      <a href='#' className='hover:text-primary'>
        Archive
      </a>
    </div>

    <div className='flex items-center gap-6'>
      <div className='hidden md:flex bg-slate-100 border-2 border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'>
        <input
          type='text'
          placeholder='Find Gear...'
          className='bg-transparent outline-none text-xs font-bold uppercase'
        />
        <FiSearch />
      </div>
      <div className='relative cursor-pointer bg-yellow-400 border-2 border-black p-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all'>
        <FiShoppingCart className='text-xl' />
        <span className='absolute -top-2 -right-2 bg-black text-white text-[10px] w-5 h-5 flex items-center justify-center font-bold border-2 border-white'>
          2
        </span>
      </div>
      <FiMenu className='lg:hidden text-2xl' />
    </div>
  </nav>
);

export default Header;
