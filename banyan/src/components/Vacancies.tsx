import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles.css';

interface Job {
  id: number;
  title: string;
  description: string | React.ReactNode;
  keyResponsibilities: string[] | React.ReactNode[];
  eduQualifications: string[] | React.ReactNode[];
  experience: string[] | React.ReactNode[];
  skills: string[] | React.ReactNode[];
  benefits: string[] | React.ReactNode[];
  endDescription: React.ReactNode;
}

const jobs: Job[] = [
  
  {
    id: 1,
    title: "Marketing And Sales Officer",
    description: "We are seeking a dynamic and tech-savvy individual to join our versatile team as a Marketing & Sales Officer. If you are enthusiastic about marketing, sales, and achieving targets, we want to hear from you.",
    keyResponsibilities: [
      "Develop and implement marketing strategies to boost sales and brand visibility.",
      "Build and maintain strong client relationships.",
      "Identify potential customers and generate leads.",
      "Collaborate with the team to achieve sales goals.",
      "Utilize technology and tools to streamline marketing and sales operations.",
    ],
    eduQualifications: [
      <>Undergraduate degree from a reputed university (<strong>Master's degree preferred</strong>).</>,
      <>Background in Business Studies or related fields is preferred but not mandatory.</>,
    ],
    experience: [
      "Freshers are encouraged to apply. Candidates with prior experience in marketing and sales will be given priority.",
    ],
    skills: [
      "Must be fluent in technology with a proactive approach to learning and innovation.",
      "Strong communication, negotiation, and interpersonal skills.",
      "High productivity, speed, and attention to quality.",      
    ],
    benefits: [
      "Competitive salary (negotiable based on experience and qualifications).",
      "Sales commission.",
      "Flexible working hours (8-hour workday, 6 days a week).",
    ],
    endDescription: 
    <>
      If you are passionate about making an impact and growing with a forward-thinking team, send your CV to <strong>banyanbaylimited@gmail.com</strong> with the subject line <strong>'Application for Marketing & Sales Officer'.</strong>
    </>
  }
];

function App() {
  const [currentJob, setCurrentJob] = useState(0);

  return (
    <div className="app-container">
      {/* Left Section */}
      <div className="left-section">
        <div className="vacancies">
          <h1 className="heading-primary">Career At</h1>
          <div className="subheading-container">
            <div className="divider"></div>
            <h2 className="heading-secondary">Banyan Bay</h2>
          </div>
          <p className="description">
            We are a cozy crew of 20 who strive to make people's lives a bit easier 
            and less boring by creating vibrant web and mobile experiences. We are 
            non-conformist, no-bullshit, and independent.
          </p>
          <div className="job-list">
            {jobs.map((job, index) => (
              <div
                key={job.id}
                onClick={() => setCurrentJob(index)}
                className={`job-list-item ${currentJob === index ? 'active' : ''}`}
              >
                {job.title} →
              </div>
            ))}
          </div>
        </div>
        <h3 className="careers-text">CAREERS</h3>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentJob}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="job-details"
          >
            <h2 className="job-title">
              {jobs[currentJob].title}
            </h2>
            <p className="job-description">
              {jobs[currentJob].description}
            </p>
            <h3 className="subheading">Key Responsibilities</h3>
            <ul className="requirements-list">
              {jobs[currentJob].keyResponsibilities.map((req, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="requirement-item"
                >
                  {req}
                </motion.li>
              ))}
            </ul>
            <h3 className="subheading">Educational Qualifications</h3>
            <ul className="requirements-list">
              {jobs[currentJob].eduQualifications.map((req, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="requirement-item"
                >
                  {req}
                </motion.li>
              ))}
            </ul>
            <h3 className="subheading">Experience</h3>
            <ul className="requirements-list">
              {jobs[currentJob].experience.map((exp, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="requirement-item"
                >
                  {exp}
                </motion.li>
              ))}
            </ul>
            <h3 className="subheading">Skills And Attributes</h3>
            <ul className="requirements-list">
              {jobs[currentJob].skills.map((skill, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="requirement-item"
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
            <h3 className="subheading">Benefits</h3>
            <ul className="requirements-list">
              {jobs[currentJob].benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="requirement-item"
                >
                  {benefit}
                </motion.li>
              ))}
            </ul>
            <p className="job-description">
              {jobs[currentJob].endDescription}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Dots */}
        <div className="navigation-dots">
          {jobs.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentJob(index)}
              className={`dot ${currentJob === index ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;