import { FiMail } from "react-icons/fi";

const Newsletter = ({ radius }) => (
  <section className='bg-slate-50 py-20 px-6'>
    <div className='max-w-xl mx-auto text-center'>
      <FiMail className='text-4xl mx-auto mb-6 opacity-20' />
      <h3 className='text-2xl font-bold uppercase text-primary mb-4'>
        Join the Brewhouse
      </h3>
      <p className='text-sm opacity-60 mb-8'>
        Weekly brew tips and 10% off your first bag.
      </p>
      <div className='flex gap-2'>
        <input
          type='text'
          placeholder='Email Address'
          className='flex-1 bg-white border border-gray-200 px-6 text-sm'
        />
        <button className='bg-black text-white px-8 py-3 font-bold uppercase text-[10px] tracking-widest'>
          Join
        </button>
      </div>
    </div>
  </section>
);

export default Newsletter;
