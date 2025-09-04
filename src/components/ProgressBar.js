import React from 'react';
import { motion } from 'framer-motion';
import './ProgressBar.css';

const ProgressBar = ({ progress }) => {
  return (
    <div className="progress-container">
      <div className="progress-bar">
        <motion.div
          className="progress-fill"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>
      <span className="progress-text">{Math.round(progress)}%</span>
    </div>
  );
};

export default ProgressBar;
