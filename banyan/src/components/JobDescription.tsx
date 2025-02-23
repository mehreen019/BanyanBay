
import { jobs } from '../types/Job';
import '../styles/JobList.css';
import { ChevronLeft } from 'lucide-react';

const JobDescription = ({ currentJob } : { currentJob: number }) => {

  return (
    <div className="app-container">

      {/* Right Section */}
      <div className="right-section">
            <div className='arrow-back'>
                <ChevronLeft size={30} color='#000000' onClick={() => window.history.back()} />
                <h3>Back</h3>
            </div>
            <h2 className="job-title-sub">
              {jobs[currentJob].title}
            </h2>
            <p className="job-description">
              {jobs[currentJob].description}
            </p>
            {jobs[currentJob].keyResponsibilities?.length && (
            <>
            <h3 className="subheading">Key Responsibilities</h3>
            <ul className="requirements-list">
              {jobs[currentJob]?.keyResponsibilities?.map((req, index) => (
                <li
                  key={index}
                  className="requirement-item"
                >
                  {req}
                </li>
              ))}
            </ul>
            </>
            )}
            {jobs[currentJob].eduQualifications?.length && (
            <>
            <h3 className="subheading">Educational Qualifications</h3>
            <ul className="requirements-list">
              {jobs[currentJob]?.eduQualifications?.map((req, index) => (
                <li
                  key={index}
                  className="requirement-item"
                >
                  {req}
                </li>
              ))}
            </ul>
            </>
            )}
            {jobs[currentJob].experience && (
              <>
                <h3 className="subheading">Experience</h3>
                <ul className="requirements-list">
                  {jobs[currentJob].experience.map((exp, index) => (
                    <li
                      key={index}
                      className="requirement-item"
                    >
                      {exp}
                    </li>
                  ))}
                </ul>
              </>
            )}
            {jobs[currentJob].qualifications?.length && (
              <>
                <h3 className="subheading">Qualifications</h3>
                <ul className="requirements-list">
                  {jobs[currentJob].qualifications.map((exp, index) => (
                    <li
                      key={index}
                      className="requirement-item"
                    >
                      {exp}
                    </li>
                  ))}
                </ul>
              </>
            )}
            { jobs[currentJob].skills?.length && (
              <>
            <h3 className="subheading">Skills And Attributes</h3>
            <ul className="requirements-list">
              {jobs[currentJob]?.skills?.map((skill, index) => (
                <li
                  key={index}
                  className="requirement-item"
                >
                  {skill}
                </li>
              ))}
            </ul>
              </>
            )}
            <h3 className="subheading">Benefits</h3>
            <ul className="requirements-list">
              {jobs[currentJob].benefits.map((benefit, index) => (
                <li
                key={index}
                  className="requirement-item"
                >
                  {benefit}
                </li>
              ))}
            </ul>
            <h3 className="subheading">Deadline: {jobs[currentJob].deadline}</h3>
            <p className="job-description">
              {jobs[currentJob].endDescription}
            </p>
            <button className="apply-button" onClick={() => window.open(jobs[currentJob].link, '_blank')}>Apply Now</button>

        </div>

    </div>
  );
}

export default JobDescription;