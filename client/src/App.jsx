import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Layout from './components/Layout'

function App() {
  return (
    <div className="">
      <Layout>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      </Layout>
    </div>
  )
}

export default App
