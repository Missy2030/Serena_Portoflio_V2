// src/components/ui/Navbar.js
import React from 'react';
import './Navbar.css';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <a href="/" className="nav-link">Accueil</a>
      <a href="#projects" className="nav-link">Projets</a>
      <a href="#contact" className="nav-link">Contact</a>
    </motion.nav>
  );
}