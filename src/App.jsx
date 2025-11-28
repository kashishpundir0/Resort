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
import Setting from './pages/Setting'
import Login from './pages/Login'
import ProtectedRoute from './auth/ProtectedRoute'
import Unauthorized from './pages/Unauthorized '
import AdminDashboard from "./pages/AdminDashboard";

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

            {/* ADMIN DASHBOARD */}
            <Route 
              path="/admin-dashboard"
              element={
                <ProtectedRoute allowedRoles={["admin"]}>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />

            {/* SETTINGS (admin only) */}
            <Route 
              path="/setting"
              element={
                <ProtectedRoute allowedRoles={["admin"]}>
                  <Setting />
                </ProtectedRoute>
              }
            />

            <Route path="/login" element={<Login/>}/>
            <Route path="/unauthorized" element={<Unauthorized />} />
            <Route path="/*" element={<NotFound/>} />
          </Routes>
        </div>

        <Footer/>
      </Router>

      <Toaster position="top-center" reverseOrder={false}/>
    </>
  )
}

export default App
