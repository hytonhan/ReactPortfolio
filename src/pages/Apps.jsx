import AppCard from '../components/AppCard';

const apps = [
  { title: 'Weather App', description: 'API-powered weather app', path: '/weather' },
  { title: 'Todo App', description: 'Task management tool', path: '/todo' },
  { title: 'Dashboard', description: 'Data visualization demo', path: '/dashboard' },
];

function Apps() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6 text-gray-900">Applications</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {apps.map(app => (
          <AppCard key={app.title} {...app} />
        ))}
      </div>
    </div>
  );
}

export default Apps;
