const Newsletter = () => (
  <section className='bg-primary border-y-[3px] border-black py-20 px-8 text-center'>
    <h2 className='text-4xl md:text-6xl font-black text-white uppercase mb-8'>
      No Spam. <br /> Just Heat.
    </h2>
    <div className='flex flex-col md:flex-row max-w-2xl mx-auto gap-4'>
      <input
        type='email'
        placeholder='YOUR@EMAIL.COM'
        className='flex-1 border-[3px] border-black px-6 py-4 font-black uppercase focus:outline-none shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]'
      />
      <button className='bg-yellow-400 border-[3px] border-black px-10 py-4 font-black uppercase shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1'>
        Join Now
      </button>
    </div>
  </section>
);

export default Newsletter;
