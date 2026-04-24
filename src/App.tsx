import { useEffect } from 'react'
import Header from './components/home/Header'
import Hero from './components/home/Hero'
import Courses from './components/home/Courses'
import About from './components/home/About'
import WhyChooseUs from './components/home/WhyChooseUs'
import OurTeachers from './components/home/OurTeachers'
import Footer from './components/home/Footer'
import ScrollToTop from './components/ScrollToTop'
import ScrollToDown from './components/ScrollToDown'
import WhatsappButton from './components/WhatsappButton'

const App = () => {
  useEffect(() => {
    const container = document.getElementById('app-scroll-container')
    if (!container) return

    let rafId: number | null = null

    const updateScrollVar = () => {
      container.style.setProperty('--scroll-y', `${container.scrollTop}px`)
      rafId = null
    }

    const onScroll = () => {
      if (rafId !== null) return
      rafId = requestAnimationFrame(updateScrollVar)
    }

    onScroll()
    container.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      container.removeEventListener('scroll', onScroll)
      if (rafId !== null) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
    <ScrollToTop />
    <ScrollToDown />
    <WhatsappButton />
    <div id='app-scroll-container' className='app-surface h-[100dvh] overflow-y-auto scrollbar text-slate-900'>
      <Header />
      <Hero />
      <Courses />
      <About />
      <WhyChooseUs />
      <OurTeachers />
      <Footer />
    </div>
    </>
  )
}

export default App
