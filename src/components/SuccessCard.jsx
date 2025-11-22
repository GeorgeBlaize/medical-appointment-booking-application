import CountUp from 'react-countup';

export default function SuccessCard({ icon, number, title }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 text-center">
      <img src={icon} alt={title} className="mx-auto h-12 mb-2" />
      <h2 className="text-3xl font-bold">
        <CountUp end={number} duration={2} />+
      </h2>
      <p>{title}</p>
    </div>
  );
}