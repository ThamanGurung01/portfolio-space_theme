import Hero from "./components/Hero"
import StarBackground from "./components/ui/StarBackground"
import "./App.css"
import NavBar from "./components/NavBar"
import Projects from "./components/Projects"
import About from "./components/About"
import ContactMe from "./components/ContactMe"
import Footer from "./components/Footer"
import Experience from "./components/Experience"

function App() {
  return (
    <>
    <NavBar/>
    <StarBackground/>
    <Hero/>
    <About/>
    <Experience/>
    <Projects/>
    <ContactMe/>
    <Footer/>
    </>
  )
}



export default App
