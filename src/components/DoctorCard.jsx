import { Link } from 'react-router-dom';

export default function DoctorCard({ doctor, availabilityToday }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 text-center">
      <img src={doctor.image} alt={doctor.name} className="mx-auto rounded-full h-24 w-24 mb-2" />
      <h3 className="font-bold">{doctor.name}</h3>
      <p>{doctor.education} - {doctor.speciality}</p>
      <p className="text-green-600">{doctor.experience}</p>
      <p>Reg No: {doctor.regNo}</p>
      {availabilityToday ? (
        <span className="text-green-600">Available</span>
      ) : (
        <span className="text-red-600">Unavailable</span>
      )}
      <Link to={`/doctors/${doctor.id}`} className="bg-blue-600 text-white px-4 py-2 rounded-full mt-2 block">View Details</Link>
    </div>
  );
}