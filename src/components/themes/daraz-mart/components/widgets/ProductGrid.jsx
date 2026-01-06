import React from "react";
import { FiStar } from "react-icons/fi";

const ProductGrid = ({ data, sectionType }) => {
  const products = data[sectionType]?.products || [];
  const { theme_config } = data;

  return (
    <section className='py-8'>
      <div className='container mx-auto max-w-[1200px] px-4'>
        <div className='flex justify-between items-end mb-4 border-b pb-2'>
          <h2 className='text-xl font-medium text-slate-800 uppercase tracking-tight'>
            {sectionType.replace("_", " ")}
          </h2>
          <button
            style={{ color: theme_config.primary_color }}
            className='text-sm font-bold hover:underline'
          >
            See All &gt;
          </button>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3'>
          {products.map((product, i) => (
            <div
              key={i}
              className='bg-white hover:shadow-xl transition-all p-2 group cursor-pointer border border-transparent hover:border-slate-100'
            >
              <div className='relative aspect-square bg-slate-50 mb-3 overflow-hidden'>
                <img
                  src={product.image}
                  alt={product.name}
                  className='w-full h-full object-contain group-hover:scale-105 transition-transform'
                />
                {product.discount_label && (
                  <div
                    className='absolute top-0 left-0 text-white text-[10px] font-bold px-1.5 py-0.5'
                    style={{ backgroundColor: theme_config.primary_color }}
                  >
                    -{product.discount_label}%
                  </div>
                )}
              </div>
              <div className='px-1 pb-2'>
                <h3 className='text-sm text-slate-800 line-clamp-2 leading-tight h-9 mb-2'>
                  {product.name}
                </h3>
                <div
                  className='text-lg font-medium'
                  style={{ color: theme_config.primary_color }}
                >
                  Rs. {product.price.toLocaleString()}
                </div>
                <div className='flex items-center gap-1 mt-1'>
                  <div className='flex text-[#faca51] text-[10px]'>
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        fill={
                          i < Math.floor(product.rating)
                            ? "currentColor"
                            : "none"
                        }
                      />
                    ))}
                  </div>
                  <span className='text-[10px] text-slate-400'>
                    ({product.reviews_count})
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
