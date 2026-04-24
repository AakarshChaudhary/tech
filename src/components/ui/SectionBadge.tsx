type SectionBadgeProps = {
  children: string
  className?: string
}

const SectionBadge = ({ children, className = '' }: SectionBadgeProps) => {
  return (
    <p
      className={`inline-block rounded-full bg-gradient-to-r from-violet-500 to-sky-500 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-xl shadow-violet-200/50 ${className}`}
    >
      {children}
    </p>
  )
}

export default SectionBadge
