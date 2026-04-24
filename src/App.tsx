import Header from './components/home/Header'
import Hero from './components/home/Hero'
import Courses from './components/home/Courses'
import ScrollToTop from './components/ScrollToTop'
import ScrollToDown from './components/ScrollToDown'

const App = () => {
  return (
    <>
    <ScrollToTop />
    <ScrollToDown />
    <div className='h-screen overflow-y-auto scrollbar bg-white text-slate-900'>
      <Header />
      <Hero />
      <Courses />
    </div>
    </>
  )
}

export default App
