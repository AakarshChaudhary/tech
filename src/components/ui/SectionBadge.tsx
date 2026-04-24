type SectionBadgeProps = {
  children: string
  className?: string
}

const SectionBadge = ({ children, className = '' }: SectionBadgeProps) => {
  return (
    <p
      className={`inline-block rounded-full bg-gradient-to-r from-[#3a2a68] to-[#5b4fb2] px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-xl shadow-indigo-200/50 ${className}`}
    >
      {children}
    </p>
  )
}

export default SectionBadge
