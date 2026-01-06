import { RiFlashlightFill } from "react-icons/ri";

const CategoryGrid = () => (
  <section className='p-8 grid grid-cols-2 md:grid-cols-4 gap-6 bg-yellow-50'>
    {[
      "Audio",
      "Visual",
      "Wear",
      "Home",
      "Cyber",
      "Analog",
      "Motion",
      "Static",
    ].map((name, i) => (
      <div
        key={i}
        className='bg-white border-[3px] border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all cursor-pointer'
      >
        <div className='w-12 h-12 bg-indigo-100 border-2 border-black flex items-center justify-center mb-4'>
          <RiFlashlightFill className='text-xl text-primary' />
        </div>
        <h3 className='font-black uppercase italic text-xl'>{name}</h3>
      </div>
    ))}
  </section>
);

export default CategoryGrid;
