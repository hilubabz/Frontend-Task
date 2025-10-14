import { Route, Routes } from "react-router-dom"
import GuessTheNumber from "./GuessTheNumber"
import HolyGrailLayout from "./HolyGrailLayout"
import ProgressBar from "./ProgressBar"

function App() {

  return (
    <Routes>
      <Route path="/" element={<GuessTheNumber/>}/>
      <Route path="/holyGrail" element={<HolyGrailLayout/>}/>
      <Route path="/progressBar" element={<ProgressBar/>}/>
    </Routes>
  )
}

export default App
