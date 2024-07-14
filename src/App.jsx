import Button from "./Button"
import EditProfile from "./EditProfile"
import RekomendasiTeman from "./RekomendasiTeman"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import Home from "./Home"
import Postingan from "./Postingan"
import Popup from './TestingPopUp'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import TestingPopUp from "./TestingPopUp"
import ListRekomendasiTeman from './ListRekomendasiTeman'
import Post from './Post'
import StatusPopup from "./StatusPopup"
import Status from "./Status"
import CobaButton from "./CobaButton"
import ProfileSide from "./ProfileSide"


function App() {

  return (
    <>

      <Router>
        <Routes>
          <Route path='/' element={<SignIn />}></Route>
          <Route path='/SignIn' element={<SignIn />}></Route>
          <Route path='/SignUp' element={<SignUp />}></Route>
          <Route path='/EditProfile' element={<EditProfile />}></Route>
          <Route path='/RekomendasiTeman' element={<RekomendasiTeman />}></Route>
          <Route path='/Home' element={<Home />}></Route>
          <Route path='/Postingan' element={<Postingan />}></Route>
        </Routes>
      </Router>

        {/* <Home/> */}

    </>

  )
}

export default App