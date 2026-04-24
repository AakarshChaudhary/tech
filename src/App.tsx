import Header from './components/home/Header'
import Hero from './components/home/Hero'
import Courses from './components/home/Courses'
import About from './components/home/About'
import WhyChooseUs from './components/home/WhyChooseUs'
import OurTeachers from './components/home/OurTeachers'
import Footer from './components/home/Footer'
import ScrollToTop from './components/ScrollToTop'
import ScrollToDown from './components/ScrollToDown'

const App = () => {
  return (
    <>
    <ScrollToTop />
    <ScrollToDown />
    <div id='app-scroll-container' className='h-[100dvh] overflow-y-auto scrollbar bg-white text-slate-900'>
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
