import { FiArrowRight, FiExternalLink } from "react-icons/fi";
import { RiDoubleQuotesL, RiFlashlightFill } from "react-icons/ri";

const BusinessBanner = () => {
  return (
    <section className='relative w-full bg-white py-16 px-4 md:px-8 overflow-hidden'>
      {/* Background Ticker / Decorative Text */}
      <div className='absolute top-0 left-0 w-full bg-black py-2 overflow-hidden whitespace-nowrap border-y-[3px] border-black rotate-[-1deg] z-10'>
        <div className='flex animate-marquee font-black uppercase text-yellow-400 text-xs tracking-[0.3em]'>
          {[...Array(10)].map((_, i) => (
            <span key={i} className='mx-8'>
              Limited 2026 Collection // No Restocks // Global Shipping //{" "}
            </span>
          ))}
        </div>
      </div>

      <div className='max-w-7xl mx-auto mt-10 grid grid-cols-1 lg:grid-cols-12 gap-0 border-[4px] border-black shadow-[12px_12px_0px_0px_rgba(79,70,229,1)] bg-indigo-50'>
        {/* Left Side: Brand Image/Manifesto */}
        <div className='lg:col-span-5 relative min-h-[400px] border-b-[4px] lg:border-b-0 lg:border-r-[4px] border-black overflow-hidden bg-white'>
          <img
            src='https://picsum.photos/seed/factory/800/800'
            className='w-full h-full object-cover grayscale contrast-150 mix-blend-multiply opacity-80'
            alt='Brand Vision'
          />
          <div className='absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent'>
            <RiDoubleQuotesL className='text-yellow-400 text-6xl mb-4' />
            <p className='text-white font-black uppercase text-2xl leading-tight italic'>
              "Raw materials. <br /> Unfiltered design. <br /> Zero compromise."
            </p>
          </div>
        </div>

        {/* Right Side: Action & Details */}
        <div className='lg:col-span-7 p-8 md:p-12 flex flex-col justify-center bg-white'>
          <div className='flex items-center gap-3 mb-6'>
            <div className='p-3 bg-primary border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'>
              <RiFlashlightFill className='text-white text-2xl' />
            </div>
            <span className='font-black uppercase tracking-widest text-primary'>
              The 2026 Vision
            </span>
          </div>

          <h2 className='text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-6'>
            Empowering the <br />
            <span className='bg-yellow-400 px-2 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'>
              Digital Rebel
            </span>
          </h2>

          <p className='text-lg font-bold uppercase leading-relaxed text-slate-600 mb-8 max-w-xl'>
            Vibestore isn't just a shop. It's an open-source movement for better
            gear, fairer manufacturing, and bolder aesthetics. Join the lab and
            shape the future.
          </p>

          <div className='flex flex-wrap gap-4'>
            <button className='flex items-center gap-3 bg-primary text-white border-[3px] border-black px-8 py-4 font-black uppercase shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all'>
              Our Manifesto <FiArrowRight className='text-xl' />
            </button>
            <button className='flex items-center gap-3 bg-white text-black border-[3px] border-black px-8 py-4 font-black uppercase shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all'>
              Sourcing <FiExternalLink />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BusinessBanner;
