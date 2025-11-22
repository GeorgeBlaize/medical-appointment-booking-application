import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="bg-blue-600 text-white px-4 py-2 rounded-full mt-4 inline-block">Go to Homepage</Link>
    </div>
  );
}