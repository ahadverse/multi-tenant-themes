import { FiShoppingCart } from "react-icons/fi";

const ProductGrid = ({ title, count, config }) => {
  return (
    <section className='py-20 px-8'>
      <div className='mb-12 flex justify-between items-end border-b-[5px] border-black pb-4'>
        <h2 className='text-5xl font-black uppercase italic tracking-tighter'>
          {title}
        </h2>
        <button className='font-black uppercase underline decoration-primary decoration-4'>
          View All
        </button>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8'>
        {[...Array(count)].map((_, i) => (
          <div
            key={i}
            className='group bg-white border-[3px] border-black shadow-[8px_8px_0px_0px_var(--shadow-primary)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-200'
            style={{ "--shadow-primary": config.theme_config?.primary_color }}
          >
            <div className='aspect-square bg-slate-200 border-b-[3px] border-black relative overflow-hidden'>
              <img
                src={`https://picsum.photos/seed/product${i}/600/600`}
                className='w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition-all'
              />
            </div>
            <div className='p-5'>
              <h4 className='font-black uppercase text-lg truncate'>
                Pro-Series V.{i + 1}
              </h4>
              <div className='flex justify-between items-center mt-4'>
                <span className='bg-yellow-400 border-2 border-black px-2 py-1 font-black'>
                  $199.00
                </span>
                <button className='bg-black text-white p-2 border-2 border-black'>
                  <FiShoppingCart />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
