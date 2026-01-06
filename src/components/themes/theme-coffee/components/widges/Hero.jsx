const Banner = ({ data }) => {
  const content = data.homepage_content.banner;
  const headings = data.homepage_content.headings;
  const theme = data.theme_config;

  return (
    <section
      className='relative flex items-center justify-center px-6 overflow-hidden'
      style={{ height: content.height, backgroundColor: theme.primary_color }}
    >
      <div className={`relative z-10 text-${headings.alignment} max-w-4xl`}>
        <h1
          className={`text-5xl md:text-7xl font-black mb-4 ${headings.transform}`}
          style={{ color: content.text_color }}
        >
          {headings.hero_title}
        </h1>
        <p
          className='text-lg md:text-xl opacity-80 mb-8'
          style={{ color: content.text_color }}
        >
          {headings.hero_subtitle}
        </p>
        <button className='px-10 py-4 border-2 font-bold uppercase tracking-widest transition-all text-primary bg-white cursor-pointer'>
          Explore Blends
        </button>
      </div>
    </section>
  );
};
export default Banner;
