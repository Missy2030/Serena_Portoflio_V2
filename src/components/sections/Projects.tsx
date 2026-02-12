// components/sections/Projects.tsx
import React from 'react';
import { useState } from 'react';
import ProjectCard from '../ui/ProjectCard';

const projects = [
  { id: 1, title: 'Site E-commerce', tags: ['React', 'Node.js'] },
  // ...
];

export default function Projects() {
  const [filter, setFilter] = useState('Tous');

  return (
    <div>
      <div className="filter-buttons">
        {['Tous', 'React', 'Node.js'].map(tag => (
          <button 
            key={tag}
            onClick={() => setFilter(tag)}
            className={filter === tag ? 'active' : ''}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {projects
          .filter(p => filter === 'Tous' || p.tags.includes(filter))
          .map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
      </div>
    </div>
  );
}