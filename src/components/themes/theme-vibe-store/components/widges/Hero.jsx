import { FiArrowRight } from "react-icons/fi";

const Hero = () => (
  <section className='relative h-[80vh] bg-primary border-b-[3px] border-black flex items-center overflow-hidden'>
    <div className='absolute right-0 top-0 w-1/2 h-full hidden lg:block border-l-[3px] border-black'>
      <img
        src='https://picsum.photos/seed/tech/800/1000'
        className='w-full h-full object-cover grayscale contrast-125'
        alt='Hero'
      />
      <div className='absolute inset-0 bg-primary/20 mix-blend-multiply' />
    </div>

    <div className='relative z-10 px-8 lg:px-20 max-w-3xl'>
      <span className='bg-yellow-400 border-2 border-black px-4 py-1 font-black uppercase text-sm mb-6 inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'>
        New Drop 2026
      </span>
      <h1 className='text-6xl md:text-8xl font-black text-white uppercase leading-[0.85] mb-8'>
        GEAR UP <br /> FOR THE <br />{" "}
        <span className='text-yellow-400'>UNSEEN.</span>
      </h1>
      <button className='group flex items-center gap-4 bg-white border-[3px] border-black px-10 py-5 text-xl font-black uppercase shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all'>
        Shop Collection{" "}
        <FiArrowRight className='group-hover:translate-x-2 transition-transform' />
      </button>
    </div>
  </section>
);
export default Hero;
