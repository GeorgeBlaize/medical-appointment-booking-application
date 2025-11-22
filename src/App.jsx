import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DoctorDetails from './pages/DoctorDetails';
import Bookings from './pages/Bookings';
import Blogs from './pages/Blogs';
import Error from './pages/Error';
import { Toaster } from 'react-hot-toast';
import './App.css';
function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Suspense fallback={<div className="flex justify-center items-center h-screen"><ClipLoader color="#36d7b7" /></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doctors/:id" element={<DoctorDetails />} />
            <Route path="/my-bookings" element={<Bookings />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
      <Toaster />
    </Router>
  );
}

export default App;