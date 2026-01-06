export const Process = ({ data }) => (
  <section className='py-24 bg-[#020617]' id='process'>
    <div className='container mx-auto px-6'>
      <div className='text-center mb-20'>
        <h4 className='text-blue-500 font-bold tracking-widest text-xs uppercase mb-4'>
          OUR PROCESS
        </h4>
        <h2 className='text-4xl md:text-5xl font-bold text-white'>
          From Idea to <span className='text-blue-500'>Launch</span>
        </h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-4 gap-4 relative'>
        {/* Connection Line (Desktop only) */}
        <div className='hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent -z-0' />

        {data.process.steps.map((step) => (
          <div
            key={step.id}
            className='relative z-10 p-8 rounded-[2rem] bg-slate-900/40 border border-slate-800/50 hover:bg-slate-900 transition-colors group'
          >
            <div className='text-5xl font-black text-blue-600/20 mb-6 group-hover:text-blue-600/40 transition-colors'>
              {step.id}
            </div>
            <h3 className='text-xl font-bold text-white mb-4'>{step.title}</h3>
            <p className='text-slate-400 text-sm leading-relaxed'>
              {step.desc}
            </p>
            {/* Connector Dot */}
            <div className='hidden md:block absolute top-1/2 -right-2 w-4 h-4 rounded-full bg-[#020617] border-4 border-blue-600/40' />
          </div>
        ))}
      </div>
    </div>
  </section>
);
