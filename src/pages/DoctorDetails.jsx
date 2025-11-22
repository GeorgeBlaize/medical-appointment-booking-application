import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import doctorsData from '../data/doctors.json'; // Direct import
import toast from 'react-hot-toast';

export default function DoctorDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState(null);
  const [bookings, setBookings] = useState([]);
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  useEffect(() => {
    const found = doctorsData.find(d => d.id === parseInt(id));
    if (found) {
      setDoctor(found);
      document.title = found.name;
    } else {
      toast.error('Doctor not found');
      navigate('/error');
    }

    const stored = JSON.parse(localStorage.getItem('bookings')) || [];
    setBookings(stored);
  }, [id, navigate]);

  if (!doctor) return <div className="text-center p-4">Loading...</div>;

  const availableToday = doctor.availability.includes(today);

  const handleBook = () => {
    if (!availableToday) {
      toast.error('Doctor is unavailable today');
      return;
    }
    if (bookings.some(b => b.id === doctor.id)) {
      toast.error('Already booked');
      return;
    }
    const newBookings = [...bookings, doctor];
    setBookings(newBookings);
    localStorage.setItem('bookings', JSON.stringify(newBookings));
    toast.success(`Booked with ${doctor.name}`);
    navigate('/my-bookings');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg p-4 mb-4">
        <h2 className="text-2xl font-bold">Doctor’s Profile Details</h2>
        <p>Relevant slogan or description about trusted care.</p>
      </div>
      <div className="bg-white rounded-lg p-4 flex flex-col md:flex-row">
        <img src={doctor.image} alt={doctor.name} className="h-40 rounded mb-4 md:mr-4" />
        <div>
          <h3 className="text-xl font-bold">{doctor.name}</h3>
          <p>{doctor.education} - {doctor.speciality}</p>
          <p>Working at {doctor.workplace}</p>
          <p>Reg No: {doctor.regNo}</p>
          <p>Availability: {doctor.availability.join(', ')}</p>
          <p>Consultation Fee: {doctor.fee}</p>
        </div>
      </div>
      <div className="bg-white rounded-lg p-4 mt-4">
        <h3 className="text-xl font-bold">Book an Appointment</h3>
        <p className={availableToday ? 'text-green-600' : 'text-red-600'}>
          {availableToday ? 'Doctor Available Today' : 'Doctor Unavailable Today'}
        </p>
        <p>Due to high patient volume, we are currently accepting appointments for today only.</p>
        <button onClick={handleBook} className="bg-blue-600 text-white px-4 py-2 rounded-full mt-2" disabled={!availableToday}>
          Book Appointment Now
        </button>
      </div>
    </div>
  );
}