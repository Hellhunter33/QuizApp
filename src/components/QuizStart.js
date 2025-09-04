import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Clock, Trophy, Users, Globe, Gamepad2, Laptop, BookOpen, Film, ArrowLeft, ChevronRight } from 'lucide-react';
import './QuizStart.css';

const QuizStart = ({ categories, onStartQuiz }) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState('easy');
  const difficulties = [
    { value: 'easy', label: 'Easy', color: '#22c55e' },
    { value: 'medium', label: 'Medium', color: '#f59e0b' },
    { value: 'hard', label: 'Hard', color: '#ef4444' }
  ];
  const categoryIcons = {
    'World Geography': Globe,
    'Space & Astronomy': Brain,
    'World History': Brain,
    'Biology & Nature': Brain,
    'Sports & Games': Gamepad2,
    'Computer Science': Laptop,
    'Arts & Literature': BookOpen,
    'Entertainment & Media': Film
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <motion.div
      className="quiz-start"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header with back button */}

      <div className="main-content">
        {/* Left Panel - Content */}
        <motion.div className="left-panel" variants={itemVariants}>
          <h1 className="main-title">What is your goal?</h1>
          <p className="subtitle">Select one answer</p>
          
          <div className="goal-options">
            {difficulties.map((difficulty, index) => (
              <motion.label
                key={difficulty.value}
                className={`goal-option ${selectedDifficulty === difficulty.value ? 'selected' : ''}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <input
                  type="radio"
                  name="difficulty"
                  value={difficulty.value}
                  checked={selectedDifficulty === difficulty.value}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                />
                <span className="option-text">{difficulty.label}</span>
              </motion.label>
            ))}
          </div>

          <div className="brand-name">quizapp</div>
        </motion.div>

        {/* Right Panel - Illustration and Categories */}
        <motion.div className="right-panel" variants={itemVariants}>
          {/* Decorative Illustration */}
          <div className="illustration">
            <div className="illustration-container">
              <div className="blue-shape"></div>
              <div className="orange-shape"></div>
              <div className="pink-shape"></div>
              <div className="yellow-shapes">
                <div className="yellow-circle"></div>
                <div className="yellow-triangle"></div>
              </div>
            </div>
          </div>

          {/* Category Selection */}
          <div className="category-selection">
            <h3>Choose a Category</h3>
            <div className="categories-grid">
              {categories.map((category, index) => {
                const IconComponent = categoryIcons[category] || Brain;
                return (
                  <motion.button
                    key={category}
                    className="category-card"
                    onClick={() => onStartQuiz(category, selectedDifficulty)}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <IconComponent className="category-icon" />
                    <span className="category-name">{category}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="navigation-buttons">
            <button className="nav-button secondary">
              Previous
            </button>
            <button className="nav-button primary">
              Next
              <ChevronRight className="button-icon" />
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default QuizStart;
