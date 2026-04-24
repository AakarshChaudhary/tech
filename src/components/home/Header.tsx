import type { MouseEvent } from 'react'
import { motion } from 'motion/react'
import { LogIn } from 'lucide-react'

const navItems = [
	{ label: 'Home', href: '#home' },
	{ label: 'Courses', href: '#courses' },
	{ label: 'About Us', href: '#about-us' },
	{ label: 'Top Performers', href: '#top-performers' },
	{ label: 'Gallery', href: '#gallery' },
	{ label: 'Our Services', href: '#our-services' },
	{ label: 'Verification', href: '#verification' },
	{ label: 'Franchise Registration', href: '#franchise-registration' },
]

const Header = () => {
	const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
		e.preventDefault()
		const target = document.querySelector(href)
		if (target) {
			target.scrollIntoView({ behavior: 'smooth', block: 'start' })
		}
	}

	return (
		<motion.header
			initial={{ y: -18, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
			className='sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur backdrop-saturate-150'
		>
			<div className='mx-auto flex max-w-8xl items-center justify-between px-6 py-4'>
				<div className='flex items-center gap-3'>
					<div className='flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-sm font-extrabold text-indigo-700'>
						S
					</div>

					<div>
						<p className='text-lg font-extrabold tracking-tight text-slate-900'>STECH</p>
						<p className='-mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500'>
							Computer Education
						</p>
					</div>
				</div>

				<nav className='hidden items-center gap-8 text-sm font-semibold text-slate-700 lg:flex'>
					{navItems.map((item) => (
						<motion.a
							key={item.href}
							href={item.href}
							onClick={(e) => handleNavClick(e, item.href)}
							whileHover={{ y: -2 }}
							className='transition hover:text-slate-900'
						>
							{item.label}
						</motion.a>
					))}
				</nav>

				<div className='flex items-center gap-3'>
					<button className='flex items-center justify-center gap-2 px-5 py-2 text-sm font-semibold text-slate-700 transition hover:text-slate-900'>
						<LogIn className='h-4 w-4' />
						Login
					</button>
					<button className='rounded-xl bg-[#22123d] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#140a29]'>
						Enroll Now
					</button>
				</div>
			</div>
		</motion.header>
	)
}

export default Header
