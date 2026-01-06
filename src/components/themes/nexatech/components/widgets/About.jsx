import { FiCheckCircle } from "react-icons/fi";

export const About = ({ data }) => (
  <section className='py-24 bg-[#020617]' id='about'>
    <div className='container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center'>
      {/* Left Content */}
      <div>
        <h4 className='text-blue-500 font-bold text-xs tracking-widest uppercase mb-4'>
          ABOUT US
        </h4>
        <h2 className='text-4xl md:text-5xl font-bold text-white leading-tight mb-8'>
          We're <span className='text-blue-500'>IT Experts</span> Who <br />{" "}
          Deliver Results
        </h2>
        <p className='text-slate-400 text-lg mb-10 leading-relaxed'>
          {data.about.desc}
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8'>
          {data.about.features.map((feature, idx) => (
            <div key={idx} className='flex items-center gap-3 text-slate-300'>
              <FiCheckCircle className='text-blue-500 shrink-0' size={20} />
              <span className='font-medium'>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Content: Philosophy Code Editor */}
      <div className='relative group'>
        <div className='absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-10 group-hover:opacity-20 transition duration-1000'></div>
        <div className='relative bg-[#0b1120] border border-slate-800 rounded-2xl p-8 font-mono text-sm sm:text-base shadow-2xl overflow-hidden'>
          {/* Editor Header Decor */}
          <div className='flex gap-1.5 mb-6'>
            <div className='w-3 h-3 rounded-full bg-red-500/20' />
            <div className='w-3 h-3 rounded-full bg-yellow-500/20' />
            <div className='w-3 h-3 rounded-full bg-green-500/20' />
            <span className='ml-4 text-slate-600 text-xs'>
              // Our philosophy
            </span>
          </div>

          <div className='space-y-1 text-slate-300'>
            <p>
              <span className='text-purple-400 font-bold'>const</span> approach
              = {"{"}
            </p>
            <p className='pl-6'>
              quality: <span className='text-green-400'>"excellence"</span>,
            </p>
            <p className='pl-6'>
              focus: <span className='text-green-400'>"user-first"</span>,
            </p>
            <p className='pl-6'>
              delivery: <span className='text-green-400'>"on-time"</span>,
            </p>
            <p className='pl-6'>
              partnership: <span className='text-blue-400'>true</span>
            </p>
            <p>{"};"}</p>
          </div>

          {/* Decorative syntax glow */}
          <div className='absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/10 blur-3xl rounded-full' />
        </div>
      </div>
    </div>
  </section>
);
