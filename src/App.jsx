import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home' 
import Login from './components/Login'
import Kitoblar from './components/Kitoblar'
import Mualliflar from './components/Mualliflar'
import Chegirmalar from './components/Chegirmalar'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/kitoblar" element={<Kitoblar />} />
        <Route path="/mualliflar" element={<Mualliflar />} />
        <Route path="/chegirmalar" element={<Chegirmalar />} />
      </Routes>

      <Footer/>
    </>
  )
}

export default App

