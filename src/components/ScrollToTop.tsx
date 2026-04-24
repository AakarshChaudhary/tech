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
          className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center w-12 h-12 bg-[var(--brand-primary-bg)] text-[var(--brand-primary-text)] rounded-full shadow-lg hover:bg-[var(--brand-primary-bg-hover)]"
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop
