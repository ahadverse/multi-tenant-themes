const ProductGrid = ({ title, count }) => (
  <section className='py-16 px-6 max-w-7xl mx-auto border-t border-gray-100'>
    <h2 className='text-2xl font-bold mb-10 text-center uppercase'>{title}</h2>
    <div className='grid grid-cols-2 lg:grid-cols-5 gap-6'>
      {[...Array(count)].map((_, i) => (
        <div key={i} className='group cursor-pointer'>
          <div className='aspect-[3/4] bg-gray-100 mb-4 overflow-hidden'>
            <img
              src={`https://picsum.photos/seed/${i + 20}/400/500`}
              className='w-full h-full object-cover group-hover:scale-105 transition duration-500'
            />
          </div>
          <h4 className='font-bold text-sm uppercase'>
            Signature Roast {i + 1}
          </h4>
          <p
            className='text-sm opacity-60'
            style={{ color: "var(--text-secondary)" }}
          >
            $18.00
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default ProductGrid;
