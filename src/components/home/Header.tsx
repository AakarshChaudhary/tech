import { LogIn } from "lucide-react"

const navItems = ['Home', 'Courses', 'About Us', 'Top Performers', 'Gallery', 'Our Services', 'Verification', 'Franchise Registration']

const Header = () => {
	return (
		<header className='border-b border-slate-200/70 bg-white/90 backdrop-blur backdrop-saturate-150'>
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
						<a key={item} href='#' className='transition hover:text-slate-900'>
							{item}
						</a>
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
		</header>
	)
}

export default Header
