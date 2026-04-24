import { BadgeCheck, Laptop2, Users } from 'lucide-react'
import SectionBadge from '../ui/SectionBadge'

const items = [
  {
    title: 'Industry Ready Courses',
    description: 'Learn practical skills with current tools and real project workflows.',
    icon: BadgeCheck,
  },
  {
    title: 'Flexible Learning',
    description: 'Study online or offline with schedules that fit your routine.',
    icon: Laptop2,
  },
  {
    title: 'Career Guidance',
    description: 'Get mentor support for resume building, interviews, and placements.',
    icon: Users,
  },
]

const WhyChooseUs = () => {
  return (
    <section id='why-choose-us' className='py-16 sm:py-20'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6'>
        <div className='mx-auto max-w-3xl text-center'>
          <SectionBadge>Why choose us</SectionBadge>
          <h2 className='mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl'>Built To Grow Your Career</h2>
          <p className='mt-4 text-slate-600'>
            We focus on hands-on learning, expert support, and outcomes that matter.
          </p>
        </div>

        <div className='mt-10 grid gap-5 md:grid-cols-3'>
          {items.map((item) => {
            const Icon = item.icon
            return (
              <article key={item.title} className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'>
                <div className='inline-flex rounded-lg bg-violet-100 p-2 text-violet-700'>
                  <Icon className='h-5 w-5' />
                </div>
                <h3 className='mt-4 text-xl font-semibold text-slate-900'>{item.title}</h3>
                <p className='mt-2 text-slate-600'>{item.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
