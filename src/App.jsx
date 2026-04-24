import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Services from './components/services'
import Projects from './components/projects'
import Contact from './components/contact'
import Footer from './components/footer'   

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