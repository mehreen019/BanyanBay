import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    <div className="flex h-screen">
      {/* Left Section - 40% */}
      <div className="w-[40%] bg-[#1a1a1a] text-white relative overflow-hidden">
        <div className="vacancies absolute left-12 top-12 z-10">
          <h1 className="text-[10vh] font-normal mb-2 font-['Bona_Nova_SC']">Hey there</h1>
          <div className="flex items-center justify-end gap-4 mb-2">
            <div className="h-[3px] bg-[#556b7d] opacity-50 flex-grow"></div>
            <h2 className="text-[8vh] text-[#556b7d] font-light font-['Bona_Nova_SC'] ml-25">Join our team</h2>
          </div>
          <p className="mt-8 text-[#556b7d] max-w-md leading-relaxed">
            We are a cozy crew of 20 who strive to make people's lives a bit easier 
            and less boring by creating vibrant web and mobile experiences. We are 
            non-conformist, no-bullshit, and independent.
          </p>
          <div className="mt-12 space-y-4">
            {jobs.map((job, index) => (
              <div
                key={job.id}
                onClick={() => setCurrentJob(index)}
                className={`cursor-pointer font-light text-[4vh] transition-all duration-300 ${
                  currentJob === index ? 'text-white font-bold' : 'text-[#556b7d]'
                }`}
              >
                {job.title} →
              </div>
            ))}
          </div>
        </div>
        <div 
          className="absolute left-0 top-1/2 -translate-y-1/2"
          style={{ 
            left: '0',
            transform: 'translateY(65%) translateX(5%) rotate(-90deg)',
            transformOrigin: 'left center'
          }}
        >
          <h3 className="text-[30vh] font-light text-[#ff6b6b] opacity-20 whitespace-nowrap font-['Londrina_Outline']">
            CAREERS
          </h3>
        </div>
      </div>

      {/* Right Section - 60% */}
      <div className="w-[60%] bg-white flex flex-col justify-center items-center px-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentJob}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full h-[60vh] flex flex-col justify-center"
          >
            <h2 className="text-[12vh] font-bold mb-8 text-gray-800 font-['Bona_Nova_SC']">
              {jobs[currentJob].title}
            </h2>
            <ul className="space-y-4">
              {jobs[currentJob].requirements.map((req, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-gray-600"
                >
                  • {req}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Dots */}
        <div className="flex space-x-4 mt-16">
          {jobs.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentJob(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentJob === index ? 'bg-[#ff6b6b] scale-125' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;