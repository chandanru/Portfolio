import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Github, Mail, ExternalLink, Brain } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-12 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Brain size={24} className="text-primary-600" />
              <span className="gradient-text text-xl font-poppins font-bold">
                Chandan R U
              </span>
            </Link>
            <p className="text-gray-600 mb-4">
              AI/ML Engineer specializing in machine learning solutions and intelligent systems.
              Let's turn data into insights and insights into innovation.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/chandan-r-u-290512257/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/chandanru"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:chandanronuru@gmail.com"
                className="text-gray-600 hover:text-primary-600 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary-600 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-600 mb-2">
              Bangalore, India
            </p>
            <p className="text-gray-600 mb-2">
              contact@example.com
            </p>
            <a
              href="links/resume.pdf"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="mr-2">Download Resume</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Chandan R U. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;