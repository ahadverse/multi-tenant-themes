import * as Icons from "react-icons/lu";

export const Services = ({ data }) => (
  <section className='py-24 bg-[#020617]' id='services'>
    <div className='container mx-auto px-6'>
      <div className='text-center mb-16'>
        <h4 className='text-blue-500 font-bold tracking-widest text-xs uppercase mb-4'>
          SERVICES
        </h4>
        <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
          Everything You Need to{" "}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600'>
            Succeed
          </span>
        </h2>
        <p className='text-slate-400 max-w-2xl mx-auto'>
          We offer comprehensive software development services tailored to your
          unique business needs.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {data.services.items.map((service, idx) => {
          // Dynamic icon loader (matches icon name from JSON)
          const IconComponent = Icons[service.icon] || Icons.LuCode;
          return (
            <div
              key={idx}
              className='p-10 rounded-[2.5rem] bg-slate-900/30 border border-slate-800/50 hover:border-blue-500/40 transition-all group'
            >
              <div className='w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500 text-2xl mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all'>
                <IconComponent />
              </div>
              <h3 className='text-xl font-bold text-white mb-4 tracking-tight'>
                {service.title}
              </h3>
              <p className='text-slate-400 leading-relaxed text-sm'>
                {service.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
