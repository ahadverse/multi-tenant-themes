const CategoryGrid = ({ theme }) => (
  <section className='py-16 px-6 max-w-7xl mx-auto'>
    <h2 className='text-2xl font-bold mb-8 uppercase tracking-tighter'>
      Browse Categories
    </h2>
    <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
      {[
        "Whole Bean",
        "Ground",
        "Pods",
        "Equipment",
        "Cold Brew",
        "Tea",
        "Merch",
        "Gifts",
      ].map((cat) => (
        <div
          key={cat}
          className='aspect-square bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition'
        >
          <span className='font-bold uppercase text-xs tracking-widest'>
            {cat}
          </span>
        </div>
      ))}
    </div>
  </section>
);
export default CategoryGrid;
