import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowDown } from 'lucide-react'

const ScrollToDown = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = document.getElementById('app-scroll-container')
    const target: EventTarget = el ?? window

    let rafId: number | null = null
    const onScroll = () => {
      if (rafId !== null) return
      rafId = requestAnimationFrame(() => {
        const scrollTop = el ? el.scrollTop : window.scrollY
        setVisible(scrollTop < 100)
        rafId = null
      })
    }

    target.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      target.removeEventListener('scroll', onScroll)
      if (rafId !== null) cancelAnimationFrame(rafId)
    }
  }, [])

  const handleClick = () => {
    const el = document.getElementById('app-scroll-container')
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' })
    else window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, y: [0, 6, 0] }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{
            scale: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
            opacity: { duration: 0.25 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleClick}
          aria-label="Scroll to bottom"
          className="fixed bottom-4 right-4 z-50 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand-900)] text-white shadow-lg transition-colors hover:bg-[var(--brand-800)] sm:bottom-6 sm:right-6 sm:h-12 sm:w-12"
        >
          <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToDown
