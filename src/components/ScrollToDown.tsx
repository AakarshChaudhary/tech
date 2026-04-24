"use client";

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
          className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center w-12 h-12 bg-slate-900 text-white rounded-full shadow-lg hover:bg-slate-800"
        >
          <ArrowDown size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToDown
