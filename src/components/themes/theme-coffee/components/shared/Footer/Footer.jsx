const Footer = ({ config }) => (
  <footer className='bg-white border-t border-gray-200 pt-10 pb-10 px-6'>
    <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16'>
      <div>
        <h4 className='font-black text-primary text-xl mb-6 uppercase tracking-tighter'>
          {config.business_name}
        </h4>
        <p className='text-sm opacity-60 leading-relaxed'>
          Roasting the finest ethically sourced beans since 2010. Your morning
          ritual, perfected.
        </p>
      </div>
      {/* Footer Links (Simplified) */}
      {[1, 2, 3].map((i) => (
        <div key={i}>
          <h5 className='font-bold text-primary text-xs uppercase tracking-widest mb-6'>
            Explore
          </h5>
          <ul className='space-y-4 text-sm opacity-60'>
            <li>Locations</li>
            <li>Brew Guides</li>
            <li>Careers</li>
          </ul>
        </div>
      ))}
    </div>
    <div className='text-center text-[10px] opacity-40 uppercase tracking-widest border-t border-gray-100 pt-10'>
      © 2026 {config.business_name} — Powered by CORE.26
    </div>
  </footer>
);
export default Footer;
