import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'  

function App() {
  return (
    <div className="overflow-x-hidden">   
      
      <Header />

      <main>
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>

      <Footer />   

    </div>
  )
}

export default App