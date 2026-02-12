import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { SEO } from '../utils/seo.tsx';

export default function Home() {
  const [text] = useTypewriter({
    words: ['Développement Fullstack', 'UX Design', 'React'],
    loop: true,
    deleteSpeed: 50,
    typeSpeed: 70,
    delaySpeed: 1500
  });

  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring' as const, stiffness: 100 }
    }
  };

  return (
    <>
      <SEO 
        title="Accueil" 
        description="Portfolio de Serena - Développeuse Fullstack et UX Designer" 
      />

      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4"
            variants={itemVariants}
          >
            Bonjour, je suis <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">Serena</span>
          </motion.h1>
          
          <motion.h2 
            className="text-xl md:text-3xl mb-8 text-gray-600 dark:text-gray-300"
            variants={itemVariants}
          >
            Spécialisée en <span className="font-semibold text-gray-800 dark:text-white">{text}</span>
            <Cursor cursorStyle="|" cursorColor="#ec4899" />
          </motion.h2>

          <motion.div variants={itemVariants}>
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Voir mes projets
            </motion.button>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}