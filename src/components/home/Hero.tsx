import heroImg from '../../assets/hero.png'

const Hero = () => {
  return (
    <section className='relative flex min-h-[calc(100vh-72px)] items-center overflow-hidden sm:min-h-[calc(100vh-80px)]'>
      <div className="pointer-events-none absolute left-1/2 top-14 w-fit -translate-x-1/2 -translate-y-1/2 select-none font-serif text-[90px] font-bold leading-none tracking-[0.08em] text-[#dad9db] sm:top-40 sm:text-[150px] lg:text-[330px]" aria-hidden="true">
        <span className="relative block">
          STECH
          <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/80 to-transparent" style={{ WebkitMaskImage: 'linear-gradient(to top, black 60%, transparent 100%)', maskImage: 'linear-gradient(to top, black 60%, transparent 100%)' }} />
        </span>
      </div>

      <div className='relative mx-auto mt-20 grid w-full max-w-7xl gap-8 px-4 py-8 sm:mt-5 sm:gap-10 sm:px-6 sm:py-10 lg:grid-cols-[1fr_1.2fr] lg:items-center'>
        <div className='relative z-10 animate-fade-in-up '>
          <h1 className='flex flex-col gap-2 text-3xl font-semibold text-slate-900 sm:text-4xl lg:text-5xl'>
            <span>
              Build Your <span className='rounded-md bg-violet-200/80 px-2'>Career</span>
            </span>
            <span>
              with Industry Ready
            </span>
            <span>
              Computer <span className='rounded-md bg-violet-200/80 px-2'>Courses</span>
            </span>
          </h1>

          <p className='mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg'>
            Premium computer education focused on full stack, data science, and AI to help you
            launch a confident tech career.
          </p>

          <div className='mt-8 flex flex-wrap gap-4'>
            <a href='#courses' className='rounded-xl bg-[#22123d] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#140a29] sm:px-6 sm:text-base'>
              Explore Courses
            </a>
          </div>
        </div>

        <div className='relative z-10 mt-2 flex justify-center animate-fade-in-up-delayed sm:mt-0 lg:ml-10 lg:justify-end'>
          <div className='relative overflow-hidden rounded-[32px]'>
            <img src={heroImg} alt='Student holding laptop' className='w-full max-w-[520px] object-cover sm:max-w-[650px]' />
            <div className='pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-white to-transparent' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero