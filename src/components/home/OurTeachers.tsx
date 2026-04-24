import SectionBadge from '../ui/SectionBadge'

const teacherItems = [
  {
    name: 'Rohan Verma',
    role: 'Full Stack Mentor',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Priya Mehta',
    role: 'Data Science Trainer',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Arjun Singh',
    role: 'UI/UX Faculty',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80',
  },
]

const OurTeachers = () => {
  return (
    <section id='our-teachers' className='bg-slate-50 py-16 sm:py-20'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6'>
        <div className='mx-auto max-w-3xl text-center'>
          <SectionBadge>Our teachers</SectionBadge>
          <h2 className='mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl'>Learn From Expert Mentors</h2>
          <p className='mt-4 text-slate-600'>Experienced trainers with practical industry background.</p>
        </div>

        <div className='mt-10 grid gap-6 md:grid-cols-3'>
          {teacherItems.map((teacher) => (
            <article key={teacher.name} className='overflow-hidden rounded-2xl bg-white shadow-sm'>
              <img src={teacher.image} alt={teacher.name} className='h-64 w-full object-cover' loading='lazy' />
              <div className='p-5'>
                <h3 className='text-xl font-semibold text-slate-900'>{teacher.name}</h3>
                <p className='mt-1 text-slate-600'>{teacher.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurTeachers
