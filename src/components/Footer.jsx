import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white p-4 mt-auto">
      <div className="flex flex-col items-center">
        <Link to="/" className="flex items-center mb-4">
          <img src="/assets/logo.png" alt="Phudu Logo" className="h-8 mr-2" />
          <span className="text-xl font-bold text-blue-600">Phudu</span>
        </Link>
        <div className="space-x-4 mb-4">
          <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
          <Link to="/my-bookings" className="text-gray-600 hover:text-blue-600">My Bookings</Link>
          <Link to="/blogs" className="text-gray-600 hover:text-blue-600">Blogs</Link>
          <Link to="/contact-us" className="text-gray-600 hover:text-blue-600">Contact Us</Link>
        </div>
        <div className="flex space-x-4">
          <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer"><img src="/assets/facebook.png" alt="Facebook" className="h-6" /></a>
          <a href="https://x.com/yourprofile" target="_blank" rel="noopener noreferrer"><img src="/assets/x.png" alt="X" className="h-6" /></a>
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer"><img src="/assets/instagram.png" alt="Instagram" className="h-6" /></a>
          <a href="https://youtube.com/yourprofile" target="_blank" rel="noopener noreferrer"><img src="/assets/youtube.png" alt="YouTube" className="h-6" /></a>
        </div>
      </div>
    </footer>
  );
}