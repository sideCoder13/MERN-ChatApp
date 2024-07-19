
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import NotFound from "./Pages/NotFound"
import './App.css'
import {Routes, Route, Navigate} from "react-router-dom"
import { useAuthContext } from "./context/AuthContext"

function App() {
  const {userAuth} = useAuthContext();

  return (
    <div className=' p-4 h-screen flex justify-center items-center'>
      <Routes>
        <Route path="/" element={userAuth ? <Home/> : <Navigate to={"/login"}/>}/>
        <Route path="/login" element={userAuth ? <Navigate to={"/"}/> : <Login/>}/>
        <Route path="/signup" element={userAuth ? <Navigate to={"/"} />: <Signup/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      
    </div>
  )
}

export default App
