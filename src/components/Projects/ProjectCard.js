import React from 'react';

const ProjectCard = ({ name, description, html_url, homepage }) => (
  <div className='ProjectCard'>
    <h2>
      <a href={html_url} target='_blank' rel="noopener noreferrer">
        {name}
      </a>
    </h2>
    <p>{description}</p>
    <a href={homepage} target='_blank' rel="noopener noreferrer">
      {homepage}
    </a>
  </div>
);

export default ProjectCard;
