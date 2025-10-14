import { Route, Routes } from "react-router-dom"
import GuessTheNumber from "./GuessTheNumber"

function App() {

  return (
    <Routes>
      <Route path="/" element={<GuessTheNumber/>}/>
    </Routes>
  )
}

export default App
