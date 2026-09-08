import Navbar from './components/Navbar'
import FloatingBackground from './components/FloatingBackground'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <FloatingBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
