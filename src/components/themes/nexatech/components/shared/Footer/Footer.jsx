import {
  FiCalendar,
  FiMail,
  FiTwitter,
  FiLinkedin,
  FiGithub,
} from "react-icons/fi";

const Footer = ({ data }) => (
  <footer className='bg-[#020617] pt-20'>
    <div className='container mx-auto px-6'>
      {/* CTA Box */}
      <div className='p-12 md:p-20 rounded-[3rem] bg-gradient-to-b from-slate-900/50 to-transparent border border-white/5 text-center'>
        <h4 className='text-blue-500 font-bold text-xs tracking-widest uppercase mb-6'>
          GET STARTED
        </h4>
        <h2 className='text-4xl md:text-6xl font-bold text-white mb-8'>
          Ready to Build Something <br />{" "}
          <span className='text-blue-500 font-black italic'>Amazing?</span>
        </h2>
        <p className='text-slate-400 max-w-xl mx-auto mb-12'>
          {data.footer.cta_subtitle}
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
          <button className='w-full sm:w-auto px-10 py-4 rounded-2xl bg-blue-600 text-white font-bold flex items-center justify-center gap-3 hover:bg-blue-700 transition-all'>
            <FiCalendar size={20} /> Schedule a Call
          </button>
          <button className='w-full sm:w-auto px-10 py-4 rounded-2xl bg-slate-900 border border-slate-800 text-white font-bold flex items-center justify-center gap-3 hover:bg-slate-800 transition-all'>
            <FiMail size={20} /> Send a Message
          </button>
        </div>
        <p className='mt-8 text-xs text-slate-500 italic'>
          No commitment required • Response within 24 hours
        </p>
      </div>

      {/* Bottom Footer */}
      <div className='mt-20 py-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6'>
        <div className='flex items-center gap-2'>
          <div className='w-6 h-6 rounded-full bg-blue-600' />
          <span className='font-bold text-white'>{data.business_name}</span>
        </div>
        <p className='text-slate-500 text-sm'>{data.footer.copyright}</p>
        <div className='flex gap-6 text-slate-400'>
          <FiTwitter className='hover:text-white cursor-pointer' />
          <FiLinkedin className='hover:text-white cursor-pointer' />
          <FiGithub className='hover:text-white cursor-pointer' />
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;
