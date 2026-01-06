import React from "react";

const FlashSale = ({ data }) => {
  const { flash_sale, theme_config } = data;

  return (
    <section className='mt-4'>
      <div className='container mx-auto max-w-[1200px] px-4'>
        <div
          className='relative rounded-sm overflow-hidden h-[320px] p-12 text-white flex flex-col justify-center'
          style={{
            background: `linear-gradient(135deg, ${theme_config.primary_color} 0%, ${theme_config.accent_orange} 100%)`,
          }}
        >
          <div className='absolute right-0 top-0 text-[180px] font-black opacity-10 leading-none select-none'>
            SALE
          </div>

          <div className='relative z-10'>
            <div className='flex items-center gap-2 font-bold mb-4 italic uppercase tracking-wider'>
              <span
                className='bg-white p-1 rounded-sm text-lg'
                style={{ color: theme_config.primary_color }}
              >
                ⚡
              </span>
              {flash_sale.title}
            </div>
            <h2 className='text-5xl font-extrabold mb-2 uppercase italic tracking-tighter'>
              {flash_sale.discount}
            </h2>
            <p className='text-lg opacity-90 mb-8'>
              Limited time offer on bestsellers!
            </p>

            <div className='flex items-center gap-4'>
              <span className='text-sm font-medium uppercase tracking-widest'>
                Ends in:
              </span>
              <div className='flex gap-2 font-mono text-xl'>
                {Object.values(flash_sale.timer).map((time, idx) => (
                  <React.Fragment key={idx}>
                    <span className='bg-black/90 px-3 py-1 rounded'>
                      {time}
                    </span>
                    {idx < 2 && <span className='text-white font-bold'>:</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlashSale;
