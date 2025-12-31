export default function Hero({ data }) {
  return (
    <section className='py-20 text-center bg-gray-50'>
      <h1 className='text-6xl font-[family-name:var(--font-family)] text-primary font-bold'>
        {data.hero_title}
      </h1>
      <p className='mt-4 text-secondary text-xl'>
        This is a pure JavaScript Multi-tenant Engine 22222222222222222222.
      </p>
      <button className='mt-8 bg-primary text-white px-8 py-3 rounded-lg hover:opacity-90'>
        Get Started
      </button>
    </section>
  );
}
