import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import './Timer.css';

const Timer = ({ timeSpent, label = "Time", isQuestionTimer = false }) => {
  const formatTime = (seconds) => {
    if (isQuestionTimer) {
      // For question timer, just show seconds
      return `${seconds}s`;
    }
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getTimerClass = () => {
    let className = "timer";
    if (isQuestionTimer) {
      className += " question-timer";
      if (timeSpent <= 10) {
        className += " warning";
      }
      if (timeSpent <= 5) {
        className += " critical";
      }
    }
    return className;
  };

  return (
    <motion.div
      className={getTimerClass()}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Clock className="timer-icon" />
      <span className="timer-label">{label}:</span>
      <span className="timer-text">{formatTime(timeSpent)}</span>
    </motion.div>
  );
};

export default Timer;
