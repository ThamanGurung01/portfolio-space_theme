import HeroSection from "./components/HeroSection"
import StarBackground from "./components/StarBackground"
import "./App.css"
import NavBar from "./components/NavBar"
import Projects from "./components/Projects"
import About from "./components/About"
import Skill from "./components/Skill"
import ContactMe from "./components/ContactMe"

function App() {
  return (
    <>
    <NavBar/>
    <StarBackground/>
    <HeroSection/>
    <About/>
    <Projects/>
    <Skill/>
    <ContactMe/>
    </>
  )
}



export default App
