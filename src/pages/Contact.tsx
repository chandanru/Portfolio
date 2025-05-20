import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Linkedin, Github } from 'lucide-react';
import PageTransition from '../components/ui/PageTransition';
import SectionTitle from '../components/ui/SectionTitle';
import ContactForm from '../components/ui/ContactForm';

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin size={24} className="text-primary-500" />,
      title: 'Location',
      content: 'Bangalore, India',
    },
    {
      icon: <Mail size={24} className="text-primary-500" />,
      title: 'Email',
      content: 'chandanronuru@gmail.com',
      link: 'mailto:contact@example.com',
    },
    {
      icon: <Phone size={24} className="text-primary-500" />,
      title: 'Phone',
      content: '+91 9481329117',
      link: 'tel:+919481329117',
    },
    {
      icon: <Linkedin size={24} className="text-primary-500" />,
      title: 'LinkedIn',
      content: 'https://www.linkedin.com',
      link: 'https://linkedin.com/in/chandan-r-u-290512257/',
    },
    {
      icon: <Github size={24} className="text-primary-500" />,
      title: 'GitHub',
      content: 'https://github.com',
      link: 'https://github.com/chandanru',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <PageTransition>
      <section className="py-32">
        <div className="container-custom">
          <SectionTitle
            title="Get In Touch"
            subtitle="Have a project in mind or just want to chat? Feel free to reach out!"
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            <div>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-8"
              >
                <motion.p variants={itemVariants} className="text-gray-600">
                  I'm interested in freelance opportunities, consulting projects, and full-time positions in AI and machine learning. If you have any questions or want to discuss potential collaborations, don't hesitate to reach out!
                </motion.p>

                <motion.div
                  variants={containerVariants}
                  className="space-y-6 mt-8"
                >
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="flex items-start"
                    >
                      <div className="mt-1">{info.icon}</div>
                      <div className="ml-4">
                        <h3 className="font-semibold">{info.title}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-gray-600 hover:text-primary-600 transition-colors"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-gray-600">{info.content}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Let's Work Together</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Whether you need help with an AI project, data analysis, or just have questions about machine learning, I'm here to help. Looking forward to hearing from you!
            </p>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;