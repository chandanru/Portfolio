import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Brain } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar = ({ scrolled }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <nav className="container-custom flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center space-x-2 text-xl font-poppins font-bold"
        >
          <Brain size={28} className="text-primary-600" />
          <span className="gradient-text">Chandan R U</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-link ${isActive ? 'nav-link-active' : ''}`
            }
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `nav-link ${isActive ? 'nav-link-active' : ''}`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `nav-link ${isActive ? 'nav-link-active' : ''}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `nav-link ${isActive ? 'nav-link-active' : ''}`
            }
          >
            Contact
          </NavLink>
          <Link to="/contact" className="btn btn-primary ml-4">
            Hire Me
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          onClick={toggleMenu}
          className="block md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white shadow-lg md:hidden overflow-hidden"
          >
            <div className="container-custom py-4 flex flex-col space-y-3">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link py-3 ${isActive ? 'nav-link-active' : ''}`
                }
                onClick={toggleMenu}
                end
              >
                Home
              </NavLink>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `nav-link py-3 ${isActive ? 'nav-link-active' : ''}`
                }
                onClick={toggleMenu}
              >
                Projects
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `nav-link py-3 ${isActive ? 'nav-link-active' : ''}`
                }
                onClick={toggleMenu}
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `nav-link py-3 ${isActive ? 'nav-link-active' : ''}`
                }
                onClick={toggleMenu}
              >
                Contact
              </NavLink>
              <Link to="/contact" className="btn btn-primary self-start" onClick={toggleMenu}>
                Hire Me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;