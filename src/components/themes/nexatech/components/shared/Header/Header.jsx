import { FiMoon } from "react-icons/fi";

const Header = ({ data }) => (
  <nav className='fixed top-0 w-full z-50 bg-[#020617]/80 backdrop-blur-xl border-b border-white/5'>
    <div className='container mx-auto px-6 h-20 flex items-center justify-between'>
      <div className='flex items-center gap-2'>
        <div className='w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center'>
          <div className='w-3 h-3 bg-white rounded-full shadow-lg' />
        </div>
        <span className='text-xl font-bold text-white tracking-tight'>
          {data.business_name}
        </span>
      </div>

      <div className='hidden md:flex items-center gap-8 text-sm font-medium text-slate-400'>
        {data.navigation.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className='hover:text-blue-400 transition-colors'
          >
            {item}
          </a>
        ))}
      </div>

      <div className='flex items-center gap-5'>
        <FiMoon
          className='text-slate-400 cursor-pointer hover:text-white'
          size={20}
        />
        <button className='bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-blue-900/20'>
          Get Started
        </button>
      </div>
    </div>
  </nav>
);
export default Header;
