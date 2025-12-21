import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [menuOpen, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `block px-4 py-2 ${
      isActive ? 'text-blue-400' : 'text-white'
    } hover:text-blue-300`;

  return (
    <header className="fixed top-0 w-full bg-gray-900 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between h-16 px-6">
        <span className="text-white font-semibold text-lg">
          My Portfolio
        </span>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-4">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/apps" className={linkClass}>Apps</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-gray-800">
          <NavLink to="/" className={linkClass} onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/apps" className={linkClass} onClick={() => setOpen(false)}>Apps</NavLink>
          <NavLink to="/about" className={linkClass} onClick={() => setOpen(false)}>About</NavLink>
          <NavLink to="/contact" className={linkClass} onClick={() => setOpen(false)}>Contact</NavLink>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
