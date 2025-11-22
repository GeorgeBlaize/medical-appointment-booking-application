export default function AppointmentCard({ appointment, onCancel }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4">
      <h3 className="font-bold">{appointment.name}</h3>
      <p>{appointment.education} - {appointment.speciality}</p>
      <p>Appointment Fee: {appointment.fee}</p>
      <button onClick={() => onCancel(appointment.id)} className="bg-red-600 text-white px-4 py-2 rounded-full mt-2">Cancel Appointment</button>
    </div>
  );
}