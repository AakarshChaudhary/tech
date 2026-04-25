import type { MouseEvent } from 'react'
import { motion } from 'motion/react'
import { LogIn } from 'lucide-react'

const navItems = [
	{ label: 'Home', href: '#home' },
	{ label: 'Courses', href: '#courses' },
	{ label: 'About Us', href: '#about-us' },
	{ label: 'Why STECH?', href: '#why-stech' },
	{ label: 'Our Teachers', href: '#our-teachers' },
	// { label: 'Top Performers', href: '#top-performers' },
	// { label: 'Gallery', href: '#gallery' },
	// { label: 'Our Services', href: '#our-services' },
	// { label: 'Verification', href: '#verification' },
	// { label: 'Franchise Registration', href: '#franchise-registration' },
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
			<div className='mx-auto flex max-w-8xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4'>
				<div className='flex items-center gap-3'>
					<div className='flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-100 text-sm font-extrabold text-indigo-700 sm:h-10 sm:w-10'>
						S
					</div>

					<div>
						<p className='text-base font-bold tracking-tight text-slate-900 sm:text-lg'>STECH</p>
						<p className='-mt-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-500 sm:text-[10px] sm:tracking-[0.2em]'>
							Computer Education
						</p>
					</div>
				</div>

				<nav className='hidden items-center gap-6 text-sm font-semibold text-slate-700 lg:flex'>
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

				<div className='flex items-center gap-2 sm:gap-3'>
					<button
						aria-label='Login'
						className='flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:text-slate-900'
					>
						<LogIn aria-hidden='true' className='h-4 w-4' />
						<span className='hidden sm:inline'>Login</span>
					</button>
					<button className='ui-button-primary px-4 py-2 text-xs font-semibold sm:px-5 sm:text-sm'>
						Enroll Now
					</button>
				</div>
			</div>

			<nav className='flex gap-4 overflow-x-auto border-t border-slate-200/70 px-4 pb-3 pt-2 text-sm font-semibold text-slate-700 lg:hidden'>
				{navItems.map((item) => (
					<a
						key={item.href}
						href={item.href}
						onClick={(e) => handleNavClick(e, item.href)}
						className='whitespace-nowrap transition hover:text-slate-900'
					>
						{item.label}
					</a>
				))}
			</nav>
		</motion.header>
	)
}

export default Header
