import Button from "./Button"
import EditProfile from "./EditProfile"
import RekomendasiTeman from "./RekomendasiTeman"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import Mood from "./Mood"

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
        </Routes>
      </Router>

    </>

  )
}

export default App