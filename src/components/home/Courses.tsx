const courseItems = [
  {
    title: 'Certificate in Tally Essential Level 1 (S-TEL1-6700)',
    label: 'Tally',
    discount: '15% Off',
    category: 'In TALLY Courses',
  },
  {
    title: 'Certificate in Tally Essential Level 1 (S-TEL1-6700)',
    label: 'Tally',
    discount: '19% Off',
    category: 'In TALLY Courses',
  },
  {
    title: 'Certificate in Tally Essential Level 1 (S-TEL1-6700)',
    label: 'Tally',
    discount: '38% Off',
    category: 'In TALLY Courses',
  },
]

const Courses = () => {
  return (
    <section id="courses" className='bg-slate-50 py-16'>
      <div className='mx-auto max-w-7xl px-6'>
        <div className='mx-auto mb-12 max-w-3xl text-center'>
          <p className='mb-3 inline-block rounded-full bg-violet-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-violet-700'>Top popular course</p>
          <h2 className='text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl'>Consolidated Courses</h2>
          <p className='mt-4 text-base leading-7 text-slate-600'>Explore top course categories that change yourself.</p>
        </div>

        <div className='grid gap-6 md:grid-cols-3'>
          {courseItems.map((course, index) => (
            <article key={index} className='overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm'>
              <div className='flex items-start justify-between gap-4'>
                <div>
                  <p className='text-xs font-semibold uppercase tracking-[0.24em] text-slate-500'>Power of simplicity</p>
                  <h3 className='mt-3 text-base font-semibold text-slate-900'>{course.title}</h3>
                </div>
                <span className='rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700'>{course.discount}</span>
              </div>

              <div className='mt-6 space-y-3'>
                <p className='text-sm font-semibold uppercase tracking-[0.2em] text-slate-500'>{course.category}</p>
                <p className='text-sm text-slate-600'>Learn more about this course and how it can help you build practical skills in accounting and business software.</p>
              </div>

              <a href='#' className='mt-6 inline-flex items-center text-sm font-semibold text-violet-700 transition hover:text-violet-900'>
                Learn More
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Courses
