
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import QuizStart from './components/QuizStart';
import Quiz from './components/Quiz';
import QuizResults from './components/QuizResults';
import { quizData, getRandomQuestions } from './data/quizData';
import './App.css';

function App() {
  const [currentScreen, setCurrentScreen] = useState('start'); // 'start', 'quiz', 'results'
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState('easy');
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [timeSpent, setTimeSpent] = useState(0);

  const startQuiz = (category, difficulty = 'easy') => {
    setSelectedCategory(category);
    setSelectedDifficulty(difficulty);
    const categoryData = quizData[category];
    const allQuestions = categoryData && categoryData[difficulty] ? categoryData[difficulty] : [];
    // Randomize questions and select 5 random ones
    const questions = getRandomQuestions(allQuestions, 5);
    setQuizQuestions(questions);
    setUserAnswers([]);
    setScore(0);
    setTimeSpent(0);
    setCurrentScreen('quiz');
  };

  const finishQuiz = (answers, finalScore, time) => {
    setUserAnswers(answers);
    setScore(finalScore);
    setTimeSpent(time);
    setCurrentScreen('results');
  };

  const resetQuiz = () => {
    setCurrentScreen('start');
    setSelectedCategory(null);
    setSelectedDifficulty('easy');
    setQuizQuestions([]);
    setUserAnswers([]);
    setScore(0);
    setTimeSpent(0);
  };

  const screenVariants = {
    initial: { opacity: 0, x: 50 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: -50 }
  };

  const screenTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5
  };

  return (
    <div className="app">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen}
          initial="initial"
          animate="in"
          exit="out"
          variants={screenVariants}
          transition={screenTransition}
          className="screen-container"
        >
          {currentScreen === 'start' && (
            <QuizStart 
              categories={Object.keys(quizData)} 
              onStartQuiz={startQuiz}
            />
          )}
          
          {currentScreen === 'quiz' && (
            <Quiz
              questions={quizQuestions}
              category={selectedCategory}
              difficulty={selectedDifficulty}
              onFinishQuiz={finishQuiz}
              onBackToStart={resetQuiz}
            />
          )}
          
          {currentScreen === 'results' && (
            <QuizResults
              questions={quizQuestions}
              userAnswers={userAnswers}
              score={score}
              timeSpent={timeSpent}
              category={selectedCategory}
              difficulty={selectedDifficulty}
              onRestart={resetQuiz}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
