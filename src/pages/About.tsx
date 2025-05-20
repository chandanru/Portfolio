import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Download } from 'lucide-react';
import PageTransition from '../components/ui/PageTransition';
import SectionTitle from '../components/ui/SectionTitle';
import ProgressBar from '../components/ui/ProgressBar';
import TimelineItem from '../components/ui/TimelineItem';
import { skills } from '../data/skills';
import { experiences, education, certifications } from '../data/experience';

const About = () => {
  const technicalSkills = skills.filter(skill => skill.category === 'technical');
  const frameworkSkills = skills.filter(skill => skill.category === 'framework');
  const toolsSkills = skills.filter(skill => skill.category === 'tools');

  return (
    <PageTransition>
      {/* About Me Section */}
      <section className="py-32">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src=""
                  alt="Chandan R U"
                  className="w-full object-cover aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent"></div>
              </div>
              <div className="absolute -z-10 w-full h-full rounded-2xl gradient-bg blur-3xl opacity-20 -bottom-6 -right-6"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <SectionTitle title="About Me" />
              <div className="space-y-4 text-gray-600">
                <p>
                  I'm Chandan R U, an AI/ML Engineer with a passion for building intelligent systems that solve real-world problems. I've worked on a wide range of projects from computer vision to natural language processing.
                </p>
                <p>
                  My journey in AI began during my Master's at Stanford University, where I specialized in machine learning algorithms and neural networks. Since then, I've been fortunate to work with innovative companies where I've led teams in developing cutting-edge AI solutions.
                </p>
                <p>
                  I'm particularly passionate about leveraging AI for positive social impact, developing systems that are not only powerful but also ethical and transparent.
                </p>
                <p>
                  When I'm not coding or training models, you'll find me hiking, reading about the latest AI research, or mentoring aspiring data scientists.
                </p>
              </div>
              <div className="mt-8">
                <a
                  href="/resume.pdf"
                  className="btn btn-primary inline-flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download size={16} className="mr-2" />
                  Download Resume
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="My Skills"
            subtitle="Here's what I'm good at, refined through years of experience and continuous learning."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
            <div>
              <h3 className="text-xl font-bold mb-6 gradient-text">Technical Skills</h3>
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <ProgressBar
                    key={index}
                    label={skill.name}
                    percentage={skill.percentage}
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 gradient-text">Frameworks & Libraries</h3>
              <div className="space-y-6">
                {frameworkSkills.map((skill, index) => (
                  <ProgressBar
                    key={index}
                    label={skill.name}
                    percentage={skill.percentage}
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 gradient-text">Tools & Technologies</h3>
              <div className="space-y-6">
                {toolsSkills.map((skill, index) => (
                  <ProgressBar
                    key={index}
                    label={skill.name}
                    percentage={skill.percentage}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16">
        <div className="container-custom">
          <SectionTitle
            title="Experience"
            subtitle="My professional journey building AI systems and machine learning solutions."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-9 gap-4 mt-12">
            {experiences.map((exp, index) => (
              <TimelineItem
                key={exp.id}
                period={exp.period}
                title={exp.title}
                company={exp.company}
                description={exp.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Education"
            subtitle="My academic background in Artificial Intelligence and Computer Science."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-9 gap-4 mt-12">
            {education.map((edu, index) => (
              <TimelineItem
                key={edu.id}
                period={edu.period}
                title={edu.degree}
                company={edu.institution}
                description={edu.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16">
        <div className="container-custom">
          <SectionTitle
            title="Certifications"
            subtitle="Professional certifications in AI, machine learning, and data science."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <p className="text-sm text-primary-600 font-medium mb-2">
                  {cert.year}
                </p>
                <h3 className="text-lg font-bold mb-2">{cert.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{cert.issuer}</p>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 text-sm inline-flex items-center"
                  >
                    <span>View Certificate</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Something Amazing?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            I'm always open to discussing new projects, challenges, and opportunities in AI/ML.
            Let's connect and explore how we can work together.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Get In Touch
          </Link>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;