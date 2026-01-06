import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdCreditCard, MdSmartphone } from "react-icons/md";

const Footer = ({ data }) => {
  const { business_name, theme_config, footer_sections } = data;

  return (
    <footer className='bg-[#0f1322] text-white pt-12 pb-8 font-sans'>
      <div className='container mx-auto max-w-[1200px] px-4'>
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12'>
          {footer_sections?.map((section, idx) => (
            <div key={idx}>
              <h4 className='text-[16px] font-bold mb-6 text-white whitespace-nowrap'>
                {section.title}
              </h4>
              <ul className='space-y-3'>
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a
                      href='#'
                      className='text-[14px] text-slate-300 hover:text-white hover:underline transition-all'
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Payment & Social Section */}
          <div className='space-y-10'>
            <div>
              <h4 className='text-[16px] font-bold mb-6 text-white uppercase tracking-tight'>
                Payment Methods
              </h4>
              <div className='flex items-center gap-3'>
                <div className='bg-[#1e2337] p-2 rounded flex items-center justify-center border border-slate-700'>
                  <MdCreditCard className='text-xl text-slate-300' />
                </div>
                <div className='bg-[#1e2337] p-2 rounded flex items-center justify-center border border-slate-700'>
                  <MdSmartphone className='text-xl text-slate-300' />
                </div>
                <div className='bg-[#1e2337] px-3 py-2 rounded border border-slate-700 text-[11px] font-bold text-slate-300 uppercase'>
                  COD
                </div>
              </div>
            </div>

            <div>
              <h4 className='text-[16px] font-bold mb-6 text-white uppercase tracking-tight'>
                Follow Us
              </h4>
              <div className='flex items-center gap-3'>
                {[
                  { icon: <FaFacebookF />, key: "facebook" },
                  { icon: <FaInstagram />, key: "instagram" },
                  { icon: <FaTwitter />, key: "twitter" },
                  { icon: <FaYoutube />, key: "youtube" },
                ].map((item) => (
                  <a
                    key={item.key}
                    href='#'
                    className='w-9 h-9 rounded-full bg-[#1e2337] border border-slate-700 flex items-center justify-center text-slate-300 hover:bg-white hover:text-[#0f1322] transition-all'
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4'>
          <div
            className='text-2xl font-black italic tracking-tighter'
            style={{ color: "#ffffff" }}
          >
            {business_name}
          </div>
          <div className='text-[13px] text-slate-400'>
            © 2026 {business_name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
