import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <Link to="/" className="flex items-center">
        <img src="/src/assets/logo.png" alt="Phudu Logo" className="h-8 mr-2" />
        <span className="text-xl font-bold text-blue-600">Phudu</span>
      </Link>
      <div className="space-x-4">
        <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
        <Link to="/my-bookings" className="text-gray-600 hover:text-blue-600">My Bookings</Link>
        <Link to="/blogs" className="text-gray-600 hover:text-blue-600">Blogs</Link>
        <Link to="/contact-us" className="text-gray-600 hover:text-blue-600">Contact Us</Link>
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-full">Emergency</button>
    </nav>
  );
}