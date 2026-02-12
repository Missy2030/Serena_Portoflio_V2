// components/ui/ProjectCard.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  tags: string[];
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div 
      className="project-card"
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 400 }}
    >
      <h3>{project.title}</h3>
      <div className="tags">
        {project.tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </motion.div>
  );
}