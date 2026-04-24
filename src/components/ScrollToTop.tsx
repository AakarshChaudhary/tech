import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowUp } from 'lucide-react'

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = document.getElementById('app-scroll-container')
    const target: EventTarget = el ?? window

    let rafId: number | null = null
    const onScroll = () => {
      if (rafId !== null) return
      rafId = requestAnimationFrame(() => {
        const top = el ? el.scrollTop : window.scrollY
        setVisible(top > 300)
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
    if (el) el.scrollTo({ top: 0, behavior: 'smooth' })
    else window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleClick}
          aria-label="Scroll to top"
          className="fixed bottom-4 right-4 z-50 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand-900)] text-white shadow-lg transition-colors hover:bg-[var(--brand-800)] sm:bottom-6 sm:right-6 sm:h-12 sm:w-12"
        >
          <ArrowUp className="h-5 w-5 sm:h-6 sm:w-6" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop
