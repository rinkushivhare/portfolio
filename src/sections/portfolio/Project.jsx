import React from 'react';
import Card from '../../components/Card'

const Project = ({project}) => {
  return (
    <Card className="portfolio__project">
        <div className="portfolio__project-image">
            <img src={project.image} alt="Portfolio Project Image" />
        </div>
    </Card>
  );
}

export default Project;
