import HeroSection from "./components/HeroSection"
import StarBackground from "./components/ui/StarBackground"
import "./App.css"
import NavBar from "./components/NavBar"
import Projects from "./components/Projects"
import About from "./components/About"
import ContactMe from "./components/ContactMe"
import Footer from "./components/Footer"

function App() {
  return (
    <>
    <NavBar/>
    <StarBackground/>
    <HeroSection/>
    <About/>
    <Projects/>
    <ContactMe/>
    <Footer/>
    </>
  )
}



export default App
