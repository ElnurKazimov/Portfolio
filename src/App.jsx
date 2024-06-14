
import './App.css'
import './Compenent/Project/project.css'
import Header from './Compenent/Header'
import Banner from './Compenent/Banner'
import Project from './Compenent/Project/project.jsx'
import Skills from './Compenent/Skills'
import Footer from './Compenent/Footer'
import { projects } from './data'
function App() {

  return (
    <>
      <Header />
      <Banner />
      <h1 className='heading'>MY WORKS</h1>
      <div id="projects">
        {
          projects?.map((project) => (
            <Project key={project.id} project={project} />))
        }
      </div>
      <Skills />
      <Footer />

    </>
  )
}

export default App
