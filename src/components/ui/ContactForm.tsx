import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setFormStatus('submitting');
    
    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }
  };

  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const inputVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  const isDisabled = formStatus === 'submitting';

  return (
    <motion.form
      variants={formVariants}
      initial="hidden"
      animate="visible"
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-lg p-6 md:p-8"
      noValidate
    >
      <motion.div variants={inputVariants} className="mb-6">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Name <span className="text-error-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.name ? 'border-error-500' : 'border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all`}
          placeholder="Your name"
          disabled={isDisabled}
        />
        {errors.name && <p className="mt-2 text-sm text-error-500">{errors.name}</p>}
      </motion.div>

      <motion.div variants={inputVariants} className="mb-6">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email <span className="text-error-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.email ? 'border-error-500' : 'border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all`}
          placeholder="Your email address"
          disabled={isDisabled}
        />
        {errors.email && <p className="mt-2 text-sm text-error-500">{errors.email}</p>}
      </motion.div>

      <motion.div variants={inputVariants} className="mb-6">
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          placeholder="What is this regarding?"
          disabled={isDisabled}
        />
      </motion.div>

      <motion.div variants={inputVariants} className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message <span className="text-error-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.message ? 'border-error-500' : 'border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none`}
          placeholder="Your message"
          disabled={isDisabled}
        ></textarea>
        {errors.message && <p className="mt-2 text-sm text-error-500">{errors.message}</p>}
      </motion.div>

      <motion.div variants={inputVariants}>
        <button
          type="submit"
          disabled={isDisabled}
          className={`btn gradient-bg text-white w-full flex items-center justify-center transition-all ${
            isDisabled ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {formStatus === 'submitting' ? (
            <>
              <span className="mr-2">Sending</span>
              <span className="animate-pulse">...</span>
            </>
          ) : formStatus === 'success' ? (
            <>
              <CheckCircle size={18} className="mr-2" />
              Message Sent!
            </>
          ) : formStatus === 'error' ? (
            <>
              <AlertCircle size={18} className="mr-2" />
              Failed to Send
            </>
          ) : (
            <>
              <Send size={18} className="mr-2" />
              Send Message
            </>
          )}
        </button>
      </motion.div>
    </motion.form>
  );
};

export default ContactForm;