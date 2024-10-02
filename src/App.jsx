import { useState } from 'react'
import Home from './Pages/Home'
import Landing from './Pages/Landing'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Routes,Route } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <Header/>
 <Routes>
  <Route element={<Landing/>} path='/' />
  <Route element={<Home/>} path='/home'/>

 </Routes>
<Footer/>
    </>
  )
}

export default App



