import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Clock, 
  Target, 
  RotateCcw, 
  Home,
  CheckCircle,
  XCircle,
  Star,
  Crown
} from 'lucide-react';
import { saveHighScore, isHighScore, getCategoryHighScores } from '../utils/highScores';
import './QuizResults.css';

const QuizResults = ({ 
  questions, 
  userAnswers, 
  score, 
  timeSpent, 
  category, 
  difficulty,
  onRestart 
}) => {
  const totalQuestions = questions?.length || 0;
  const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;
  const averageTimePerQuestion = totalQuestions > 0 ? Math.round(timeSpent / totalQuestions) : 0;
  
  const [isNewHighScore, setIsNewHighScore] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [showNameInput, setShowNameInput] = useState(false);
  const [highScores, setHighScores] = useState([]);

  useEffect(() => {
    // Check if this is a high score
    const isHigh = isHighScore(score, category, difficulty);
    setIsNewHighScore(isHigh);
    setShowNameInput(isHigh);
    
    // Load category high scores
    const scores = getCategoryHighScores(category, difficulty);
    setHighScores(scores);
  }, [score, category, difficulty]);

  const getPerformanceMessage = () => {
    if (percentage >= 90) return "Outstanding! You're a quiz master!";
    if (percentage >= 80) return "Excellent work! Great job!";
    if (percentage >= 70) return "Good job! Well done!";
    if (percentage >= 60) return "Not bad! Keep practicing!";
    return "Keep studying! You'll get better!";
  };

  const getPerformanceColor = () => {
    if (percentage >= 80) return "#22c55e";
    if (percentage >= 60) return "#f59e0b";
    return "#ef4444";
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  const handleSaveHighScore = () => {
    if (!playerName.trim()) return;
    
    const scoreData = {
      playerName: playerName.trim(),
      score,
      totalQuestions,
      percentage,
      timeSpent,
      category,
      difficulty
    };
    
    saveHighScore(scoreData);
    setShowNameInput(false);
    
    // Refresh high scores
    const scores = getCategoryHighScores(category, difficulty);
    setHighScores(scores);
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
      className="quiz-results"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Final Score Card at Top */}
      <motion.div className="score-card main-score" variants={itemVariants}>
        <div className="score-value" style={{ color: getPerformanceColor() }}>
          {score}/{totalQuestions}
        </div>
        <div className="score-label">Correct Answers</div>
        <div className="score-percentage" style={{ color: getPerformanceColor() }}>
          {percentage}%
        </div>
        <div className="performance-message" style={{ color: getPerformanceColor(), marginTop: "10px" }}>
          {getPerformanceMessage()}
        </div>
      </motion.div>

      {/* Trophy and Title */}
      <motion.div className="results-header" variants={itemVariants}>
        <div className="trophy-container">
          {isNewHighScore ? (
            <Crown 
              className="trophy-icon" 
              style={{ color: '#f59e0b' }}
            />
          ) : (
            <Trophy 
              className="trophy-icon" 
              style={{ color: getPerformanceColor() }}
            />
          )}
        </div>
        <h1 className="results-title">
          {isNewHighScore ? "New High Score!" : "Quiz Complete!"}
        </h1>
      </motion.div>

      {/* Stats and Question Review Side by Side */}
      <motion.div className="results-main-row" variants={itemVariants}>
        <div className="score-stats-col">
          <div className="stats-grid">
            <div className="stat-card">
              <Clock className="stat-icon" />
              <div className="stat-value">{formatTime(timeSpent)}</div>
              <div className="stat-label">Total Time</div>
            </div>
            <div className="stat-card">
              <Target className="stat-icon" />
              <div className="stat-value">{formatTime(averageTimePerQuestion)}</div>
              <div className="stat-label">Avg per Question</div>
            </div>
            <div className="stat-card">
              <Star className="stat-icon" />
              <div className="stat-value">{category}</div>
              <div className="stat-label">Category</div>
            </div>
            <div className="stat-card">
              <Star className="stat-icon" />
              <div className="stat-value">{difficulty?.charAt(0).toUpperCase() + difficulty?.slice(1)}</div>
              <div className="stat-label">Difficulty</div>
            </div>
          </div>
        </div>
        <div className="review-col">
          <div className="detailed-results">
            <h3>Question Review</h3>
            <div className="questions-list">
              {questions && questions.length > 0 ? questions.map((question, index) => {
                const userAnswer = userAnswers?.find(answer => answer.questionIndex === index);
                const isCorrect = userAnswer?.isCorrect || false;
                const selectedAnswerIndex = userAnswer?.selectedAnswer;
                
                return (
                  <motion.div
                    key={index}
                    className={`question-result ${isCorrect ? 'correct' : 'incorrect'}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className="question-result-header">
                      <div className="question-number">Q{index + 1}</div>
                      <div className="question-result-icon">
                        {isCorrect ? (
                          <CheckCircle className="result-icon correct" />
                        ) : (
                          <XCircle className="result-icon incorrect" />
                        )}
                      </div>
                    </div>
                    
                    <div className="question-result-content">
                      <p className="question-result-text">{question.question}</p>
                      <div className="answer-comparison">
                        <div className="user-answer">
                          <strong>Your answer:</strong> {
                            selectedAnswerIndex !== null && selectedAnswerIndex !== undefined
                              ? question.options[selectedAnswerIndex]
                              : 'Skipped'
                          }
                        </div>
                        {!isCorrect && (
                          <div className="correct-answer">
                            <strong>Correct answer:</strong> {question.options[question.correctAnswer]}
                          </div>
                        )}
                        {question.explanation && (
                          <div className="answer-explanation">
                            <strong>Explanation:</strong> {question.explanation}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              }) : (
                <div className="no-questions">
                  <p>No questions to review.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {showNameInput && (
        <motion.div className="leaderboard-name-input-container" variants={itemVariants}>
          <div className="leaderboard-name-label">
            🎉 Congratulations! You made it to the leaderboard!
          </div>
          <input
            type="text"
            placeholder="Enter your name"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSaveHighScore()}
            className="leaderboard-name-input"
            autoFocus
          />
          <button 
            onClick={handleSaveHighScore}
            className="leaderboard-save-btn"
            disabled={!playerName.trim()}
          >
            Save Score
          </button>
          {!playerName.trim() && (
            <div className="leaderboard-error-message">
              Please enter your name.
            </div>
          )}
        </motion.div>
      )}

      <div className="leaderboard-container">
        <h2>Leaderboard</h2>
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>User</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {highScores.map((score, idx) => (
              <tr key={score.username} className={idx === 0 ? 'top-scorer' : ''}>
                <td>{idx + 1}</td>
                <td>
                  <div className="user-info">
                    <img
                      src={`https://api.dicebear.com/7.x/identicon/svg?seed=${score.username}`}
                      alt="avatar"
                      className="avatar"
                    />
                    <span>{score.username}</span>
                  </div>
                </td>
                <td>{score.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <motion.div className="results-actions" variants={itemVariants}>
        <button className="restart-button" onClick={onRestart}>
          <RotateCcw className="button-icon" />
          Try Again
        </button>
        <button className="home-button" onClick={onRestart}>
          <Home className="button-icon" />
          New Category
        </button>
      </motion.div>
    </motion.div>
  );
};

export default QuizResults;
