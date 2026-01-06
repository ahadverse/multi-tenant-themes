import { FiArrowRight, FiPlay } from "react-icons/fi";

const Hero = ({ data }) => (
  <section className='relative pt-32 pb-20 overflow-hidden bg-[#020617]'>
    {/* Background Glow Effect */}
    <div className='absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none' />

    <div className='container mx-auto px-6 text-center relative z-10'>
      <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-semibold mb-10 tracking-wide'>
        <span className='w-2 h-2 rounded-full bg-blue-500 animate-pulse' />
        {data.hero.badge}
      </div>

      <h1 className='text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]'>
        {data.hero.title_white} <br />
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500'>
          {data.hero.title_gradient}
        </span>
      </h1>

      <p className='mt-8 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed'>
        {data.hero.description}
      </p>

      <div className='mt-12 flex flex-col sm:flex-row gap-4 justify-center'>
        <button className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-xl shadow-blue-600/20'>
          {data.hero.cta_primary} <FiArrowRight />
        </button>
        <button className='bg-slate-900/50 border border-slate-800 text-white hover:bg-slate-800 px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all'>
          <FiPlay className='text-blue-500' /> {data.hero.cta_secondary}
        </button>
      </div>

      {/* Stats Row */}
      <div className='grid grid-cols-2 md:grid-cols-3 gap-8 mt-24 pt-12 border-t border-white/5'>
        {data.stats.map((stat, i) => (
          <div key={i} className='text-center'>
            <div className='text-4xl md:text-5xl font-black text-white mb-2'>
              {stat.value}
            </div>
            <div className='text-slate-500 text-xs uppercase tracking-[0.2em] font-bold'>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;
