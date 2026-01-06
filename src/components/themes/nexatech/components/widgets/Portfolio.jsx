import { FiArrowUpRight } from "react-icons/fi";

export const Portfolio = ({ data }) => (
  <section className='py-24 bg-[#020617]' id='portfolio'>
    <div className='container mx-auto px-6'>
      <div className='text-center mb-12'>
        <h4 className='text-blue-500 font-bold tracking-[0.2em] text-xs uppercase mb-4'>
          PORTFOLIO
        </h4>
        <h2 className='text-4xl md:text-5xl font-bold text-white'>
          Featured <span className='text-blue-500'>Projects</span>
        </h2>
        <p className='mt-4 text-slate-400 max-w-2xl mx-auto'>
          Explore our latest work and see how we've helped businesses transform
          their digital presence.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className='flex flex-wrap justify-center gap-3 mb-12'>
        {data.portfolio.filters.map((filter, i) => (
          <button
            key={filter}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              i === 0
                ? "bg-blue-600 text-white"
                : "bg-slate-900 text-slate-400 hover:bg-slate-800"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {data.portfolio.projects.map((project, idx) => (
          <div
            key={idx}
            className='group rounded-[2rem] bg-slate-900/40 border border-slate-800/50 overflow-hidden hover:border-blue-500/30 transition-all'
          >
            <div className='aspect-video bg-slate-800 relative overflow-hidden'>
              <div className='absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent' />
              {/* Image Placeholder */}
              <div className='w-full h-full flex items-center justify-center text-slate-700 font-bold uppercase tracking-tighter text-4xl italic'>
                {project.name.split(" ")[0]}
              </div>
            </div>
            <div className='p-8'>
              <div className='flex justify-between items-start mb-4'>
                <h3 className='text-xl font-bold text-white'>{project.name}</h3>
                <span className='px-3 py-1 bg-blue-500/10 text-blue-400 rounded-md text-[10px] font-bold uppercase tracking-wider border border-blue-500/20'>
                  {project.category}
                </span>
              </div>
              <p className='text-slate-400 text-sm mb-6 leading-relaxed'>
                {project.desc}
              </p>
              <div className='flex flex-wrap gap-2 mb-6'>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className='text-[11px] text-slate-500 font-medium'
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <button className='flex items-center gap-2 text-sm font-bold text-blue-400 group-hover:text-blue-300 transition-colors uppercase tracking-widest'>
                View Case Study <FiArrowUpRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
