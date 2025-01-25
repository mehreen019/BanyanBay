import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles.css';

interface Job {
  id: number;
  title: string;
  requirements: string[];
}

const jobs: Job[] = [
  {
    id: 1,
    title: "Marketing Officer",
    requirements: [
      "5+ years of digital marketing experience",
      "Strong analytical and creative skills",
      "Experience with social media campaigns",
      "Excellent communication abilities"
    ]
  },
  {
    id: 2,
    title: "Senior Developer",
    requirements: [
      "7+ years of software development",
      "Proficiency in React and TypeScript",
      "Experience with cloud platforms",
      "Strong problem-solving skills"
    ]
  },
  {
    id: 3,
    title: "UX Designer",
    requirements: [
      "4+ years of UX/UI design experience",
      "Proficiency in Figma and Adobe Suite",
      "Portfolio of successful projects",
      "User research experience"
    ]
  }
];

function App() {
  const [currentJob, setCurrentJob] = useState(0);

  return (
    <div className="app-container">
      {/* Left Section */}
      <div className="left-section">
        <div className="vacancies">
          <h1 className="heading-primary">Hey there</h1>
          <div className="subheading-container">
            <div className="divider"></div>
            <h2 className="heading-secondary">Join our team</h2>
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
            <ul className="requirements-list">
              {jobs[currentJob].requirements.map((req, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="requirement-item"
                >
                  • {req}
                </motion.li>
              ))}
            </ul>
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