import { useNavigate } from 'react-router-dom';

function AppCard({ title, description, path }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(path)}
      className="cursor-pointer rounded-lg bg-white p-6 shadow hover:shadow-lg transition"
    >
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default AppCard;
