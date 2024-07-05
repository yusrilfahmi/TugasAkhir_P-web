import Button from "./Button"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import Mood from "./Mood"

function App() {

  return (
  <>
  {/* <Mood hari='Senin' mood='sad'/>
  <Mood hari='Jumat' mood='Happy'/> */}

  <Router>
    <Routes>
      <Route path='/' element={<SignIn/>}></Route>
      <Route path='/SignIn' element={<SignIn/>}></Route>
      <Route path='/SignUp' element={<SignUp/>}></Route>
    </Routes>
  </Router>
  </>

  )
}

export default App