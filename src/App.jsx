import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Apps from './pages/Apps';
import About from './pages/About';
import Contact from './pages/Contact';
import Weather from './pages/apps/weather/pages/Weather';
import AppsIndex from './pages/apps/AppsIndex';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 w-full">
      <Navbar />

      <main className="pt-16 px-6 mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apps" element={<Apps />}>
            <Route index element={<AppsIndex />} />
            <Route path="weather" element={<Weather />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
