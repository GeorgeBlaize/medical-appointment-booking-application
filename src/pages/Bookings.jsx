import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import AppointmentCard from '../components/AppointmentCard';
import toast from 'react-hot-toast';

export default function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('bookings')) || [];
    setBookings(stored);
    document.title = 'Bookings';
  }, []);

  const handleCancel = (id) => {
    const newBookings = bookings.filter(b => b.id !== id);
    setBookings(newBookings);
    localStorage.setItem('bookings', JSON.stringify(newBookings));
    toast.success('Appointment canceled');
  };

  if (bookings.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 p-4 text-center">
        <h2 className="text-2xl font-bold mb-4">No Appointments Found</h2>
        <Link to="/" className="bg-blue-600 text-white px-4 py-2 rounded-full">Go to Homepage</Link>
      </div>
    );
  }

  const chartData = bookings.map(b => ({ name: b.name.split(' ')[1], fee: parseInt(b.fee.split(' ')[0]) }));

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="fee" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
      <h2 className="text-2xl font-bold text-center mb-4">My Today Appointments</h2>
      <p className="text-center mb-8">Our platform connects you with verified, experienced doctors.</p>
      <div className="space-y-4">
        {bookings.map(appointment => (
          <AppointmentCard key={appointment.id} appointment={appointment} onCancel={handleCancel} />
        ))}
      </div>
    </div>
  );
}