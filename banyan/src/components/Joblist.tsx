import React from 'react';
import { jobs } from '../types/Job';
import '../styles/JobList.css';
import { Link } from 'react-router-dom';

const JobList: React.FC = () => {
  return (
    <div className="job-list">
      <div className="job-list-header">
        <h1>Vacancies</h1>
      </div>
      
      <div className="job-list-body">
      {jobs.map((job, index) => (
        <div key={index} className="job-card">
          <h2>
            <Link to={`/Careers/${job.title.replace(/\s+/g, '-')}`} className="job-title">
              {job.title}
            </Link>
          </h2>
        </div>
      ))}
      </div>

      <div className="pagination">
        <button>1</button>
      </div>
    </div>
  );
};

export default JobList;