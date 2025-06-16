import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Layout from './components/Layout'

function App() {
  return (
    <div className="">
      <Layout>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      </Layout>
    </div>
  )
}

export default App
