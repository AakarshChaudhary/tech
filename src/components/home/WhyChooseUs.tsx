import { BadgeCheck, Laptop2, Users } from 'lucide-react'
import { motion } from 'motion/react'
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
    <section id='why-stech' className='bg-[var(--surface-1)] py-16 sm:py-20'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6'>
        <div className='mx-auto max-w-3xl text-center'>
          <SectionBadge>Why choose us</SectionBadge>
          <h2 className='mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl'>Built To Grow Your Career</h2>
          <p className='mt-4 text-slate-600'>
            We focus on hands-on learning, expert support, and outcomes that matter.
          </p>
        </div>

        <div className='mt-10 grid gap-5 md:grid-cols-3'>
          {items.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.42, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className='ui-card p-6'
              >
                <div className='inline-flex rounded-xl bg-indigo-100 p-2 text-indigo-700'>
                  <Icon className='h-5 w-5' />
                </div>
                <h3 className='mt-4 text-xl font-semibold text-slate-900'>{item.title}</h3>
                <p className='mt-2 text-slate-600'>{item.description}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
