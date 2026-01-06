import { FiGithub, FiInstagram, FiTwitter } from "react-icons/fi";

const Footer = () => (
  <footer className='bg-white px-8 py-20 border-b-[10px] border-primary'>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-16'>
      <div>
        <h4 className='text-3xl font-black uppercase mb-6 italic'>VIBESTORE</h4>
        <p className='font-bold uppercase text-sm leading-relaxed opacity-60'>
          Curated aesthetics for the 2026 digital era. <br />
          Built with raw power and zero compromise.
        </p>
      </div>
      <div className='grid grid-cols-2 gap-8'>
        <div>
          <h5 className='font-black uppercase mb-4 text-primary'>Info</h5>
          <ul className='space-y-2 font-black uppercase text-xs'>
            <li>
              <a href='#'>Shipping</a>
            </li>
            <li>
              <a href='#'>Privacy</a>
            </li>
            <li>
              <a href='#'>Terms</a>
            </li>
          </ul>
        </div>
        <div className='flex flex-col gap-4'>
          <h5 className='font-black uppercase text-primary'>Social</h5>
          <div className='flex gap-4 text-2xl'>
            <FiInstagram />
            <FiGithub />
            <FiTwitter />
          </div>
        </div>
      </div>
      <div className='border-[3px] border-black p-6 bg-yellow-50'>
        <p className='font-black uppercase text-xs'>Open Source Lab // 2026</p>
      </div>
    </div>
  </footer>
);
export default Footer;
