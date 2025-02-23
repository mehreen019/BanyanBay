import React from 'react';
import { jobs } from '../types/Job';
import '../styles/JobList.css';

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
            <a href={`${job.link}`} className="job-title">{job.title}</a>
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