import { Route, Routes } from "react-router-dom"
import GuessTheNumber from "./GuessTheNumber"
import HolyGrailLayout from "./HolyGrailLayout"
import ProgressBar from "./ProgressBar"
import ContactForm from "./ContactForm"
import LikeButton from "./LikeButton"
import LoadingSkeleton from "./LoadingSkeleton"
import Toast from "./Toast"
import OTP from "./OTP"
import DataTable from "./DataTable"
import Tabs from "./Tabs"

function App() {

  return (
    <Routes>
      <Route path="/" element={<GuessTheNumber/>}/>
      <Route path="/holyGrail" element={<HolyGrailLayout/>}/>
      <Route path="/progressBar" element={<ProgressBar/>}/>
      <Route path="/contactForm" element={<ContactForm/>}/>
      <Route path="/likeButton" element={<LikeButton/>}/>
      <Route path="/loadingSkeleton" element={<LoadingSkeleton/>}/>
      <Route path="/toast" element={<Toast/>}/>
      <Route path="/OTP" element={<OTP/>}/>
      <Route path="/dataTable" element={<DataTable/>}/>
      <Route path="/tabs" element={<Tabs/>}/>
    </Routes>
  )
}

export default App
