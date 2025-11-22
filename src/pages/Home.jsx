import { useState, useEffect } from 'react';
import DoctorCard from '../components/DoctorCard';
import SuccessCard from '../components/SuccessCard';

export default function Home() {
  const [doctors, setDoctors] = useState([]);
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  useEffect(() => {
    fetch('/data/doctors.json')
      .then(res => res.json())
      .then(data => setDoctors(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Banner */}
      <section className="bg-gradient-to-r from-blue-100 to-gray-100 p-8 text-center rounded-lg m-4">
        <h1 className="text-4xl font-bold mb-2">Dependable Care, Backed by Trusted Professionals.</h1>
        <p>Our platform connects you with verified, experienced doctors across various specialties – all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust. Search Now!</p>
        <div className="flex justify-center space-x-4 mt-4">
          <img src="/assets/banner1.jpg" alt="Doctors" className="h-40 rounded" />
          <img src="/assets/banner2.jpg" alt="Doctors" className="h-40 rounded" />
        </div>
      </section>

      {/* Doctors Section */}
      <section className="p-4">
        <h2 className="text-3xl font-bold text-center mb-4">Our Best Doctors</h2>
        <p className="text-center mb-8">Our platform connects you with verified, experienced doctors across various specialties – all at your convenience.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {doctors.slice(0, 6).map(doctor => (
            <DoctorCard key={doctor.id} doctor={doctor} availabilityToday={doctor.availability.includes(today)} />
          ))}
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-full mx-auto block mt-4">View All Doctors</button>
      </section>

      {/* Success Section */}
      <section className="p-4 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-4">We Provide Best Medical Service</h2>
        <p className="text-center mb-8">Our platform connects you with verified, experienced doctors across various specialties – all at your convenience.</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <SuccessCard icon="/assets/icon-doctors.png" number={199} title="Total Doctors" />
          <SuccessCard icon="/assets/icon-reviews.png" number={467} title="Total Reviews" />
          <SuccessCard icon="/assets/icon-patients.png" number={1900} title="Patients" />
          <SuccessCard icon="/assets/icon-staff.png" number={300} title="Total Staffs" />
        </div>
      </section>
    </div>
  );
}