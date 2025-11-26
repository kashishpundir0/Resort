import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Rooms from './pages/Rooms'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from './pages/NotFound'
import { Toaster } from "react-hot-toast";
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'


function App() {

  return (
    <>
      <Router>
        <ScrollToTop/>

        <Navbar />

        <div> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/*' element={<NotFound/>} />
          </Routes>
        </div>

        <Footer/>
      </Router>
      <Toaster position="top-center" reverseOrder={false}/>
    </>

  )
}

export default App
