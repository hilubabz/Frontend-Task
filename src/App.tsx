import { Route, Routes } from "react-router-dom"
import GuessTheNumber from "./GuessTheNumber"
import HolyGrailLayout from "./HolyGrailLayout"
import ProgressBar from "./ProgressBar"
import ContactForm from "./ContactForm"

function App() {

  return (
    <Routes>
      <Route path="/" element={<GuessTheNumber/>}/>
      <Route path="/holyGrail" element={<HolyGrailLayout/>}/>
      <Route path="/progressBar" element={<ProgressBar/>}/>
      <Route path="/contactForm" element={<ContactForm/>}/>
      
    </Routes>
  )
}

export default App
