import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-bold gradient-text">404</h1>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl font-bold mt-4 mb-6"
        >
          Page Not Found
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-gray-600 mb-8 max-w-md mx-auto"
        >
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            to="/"
            className="btn btn-primary inline-flex items-center"
          >
            <Home size={16} className="mr-2" />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;