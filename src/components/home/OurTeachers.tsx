import { motion } from 'motion/react'
import SectionBadge from '../ui/SectionBadge'

const teacherItems = [
  {
    name: 'Rohan Verma',
    role: 'Full Stack Mentor',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Priya Mehta',
    role: 'Data Science Trainer',
    image:
      'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Arjun Singh',
    role: 'UI/UX Faculty',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=80',
  },
]

const OurTeachers = () => {
  return (
    <section id='our-teachers' className='bg-[var(--surface-0)] py-16 sm:py-20'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6'>
        <div className='mx-auto max-w-3xl text-center'>
          <SectionBadge>Our teachers</SectionBadge>
          <h2 className='mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl'>Learn From Expert Mentors</h2>
          <p className='mt-4 text-slate-600'>Experienced trainers with practical industry background.</p>
        </div>

        <div className='mt-10 grid gap-6 md:grid-cols-3'>
          {teacherItems.map((teacher, index) => (
            <motion.article
              key={teacher.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 3.5, delay: index * 0.25, ease: [0.22, 1, 0.36, 1] }}
              className='ui-card overflow-hidden'
            >
              <img src={teacher.image} alt={teacher.name} className='h-56 w-full object-cover sm:h-64' loading='lazy' />
              <div className='p-5'>
                <h3 className='text-xl font-semibold text-slate-900'>{teacher.name}</h3>
                <p className='mt-1 text-slate-600'>{teacher.role}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurTeachers
