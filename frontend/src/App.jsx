
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import NotFound from "./Pages/NotFound"
import './App.css'
import {Routes, Route} from "react-router-dom"

function App() {

  return (
    <div className='h-screen p-4 h-screen flex justify-center items-center'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      
    </div>
  )
}

export default App
