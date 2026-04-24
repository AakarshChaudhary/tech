const About = () => {
  return (
    <section id='about-us' className='bg-[#f2f2f2] py-16 sm:py-20'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6'>
        <div className='grid gap-6 sm:gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-start'>
          <div className='border-l border-slate-500 pl-4 sm:pl-7'>
            <h2 className='font-serif text-3xl font-medium uppercase tracking-wide text-slate-900 sm:text-5xl'>
              Who We Are
            </h2>

            <p className='mt-4 max-w-xl text-base leading-8 text-slate-700 sm:text-lg sm:leading-9'>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
              there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
              the Semantics, a large language ocean.
            </p>

            <ol className='mt-10 space-y-6 text-base leading-8 text-slate-800 sm:text-lg sm:leading-9'>
              <li>
                <span className='font-semibold'>1.&nbsp; Flexible Classes:</span> It is a long established
                fact that a reader will be distracted by this on readable content of when looking at its
                layout.
              </li>
              <li>
                <span className='font-semibold'>2.&nbsp; Learn From Anywhere:</span> Sed distinctio repudiandae
                eos recusandae laborum eaque non eius iure suscipit laborum eaque non eius iure suscipit.
              </li>
            </ol>

            <button className='mt-10 w-full rounded-xl bg-[#22123d] px-8 py-3 text-base font-semibold text-white hover:bg-[#140a29] sm:w-auto sm:text-lg'>
              More About Us →
            </button>
          </div>

          <div className='grid gap-3 sm:grid-cols-[190px_1fr]'>
            <div className='grid grid-cols-3 gap-3 sm:grid-cols-1 sm:grid-rows-3'>
              <img
                src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80'
                alt='Team member'
                className='h-28 w-full object-cover sm:h-[152px]'
              />
              <img
                src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80'
                alt='Team member'
                className='h-28 w-full object-cover sm:h-[152px]'
              />
              <img
                src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80'
                alt='Team member'
                className='h-28 w-full object-cover sm:h-[152px]'
              />
            </div>

            <img
              src='https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=80'
              alt='Student studying in library'
              className='h-full min-h-[260px] w-full object-cover sm:min-h-[468px]'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
