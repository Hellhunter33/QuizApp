import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Clock, CheckCircle, XCircle } from 'lucide-react';
import Question from './Question';
import ProgressBar from './ProgressBar';
import Timer from './Timer';
import './Quiz.css';

const Quiz = ({ questions, category, difficulty, onFinishQuiz, onBackToStart }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [timeSpent, setTimeSpent] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [questionTimeLeft, setQuestionTimeLeft] = useState(30);
  const [isQuestionTimerActive, setIsQuestionTimerActive] = useState(true);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSpent(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Per-question timer effect
  useEffect(() => {
    if (!isQuestionTimerActive || isAnswered) return;

    const questionTimer = setInterval(() => {
      setQuestionTimeLeft(prev => {
        if (prev <= 1) {
          // Time's up - auto-submit the question
          handleTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(questionTimer);
  }, [isQuestionTimerActive, isAnswered, currentQuestionIndex]);

  // Reset question timer when moving to next question
  useEffect(() => {
    setQuestionTimeLeft(30);
    setIsQuestionTimerActive(true);
    setIsAnswered(false);
  }, [currentQuestionIndex]);

  const handleTimeUp = () => {
    if (isAnswered) return;
    
    setIsQuestionTimerActive(false);
    setIsAnswered(true);
    setShowFeedback(true);

    // Auto-submit with no answer (time's up)
    const newAnswer = {
      questionIndex: currentQuestionIndex,
      selectedAnswer: null,
      correctAnswer: currentQuestion.correctAnswer,
      isCorrect: false,
      timeSpent: timeSpent,
      timeUp: true
    };

    // Update userAnswers and handle the last question properly
    setUserAnswers(prev => {
      const updatedAnswers = [...prev, newAnswer];
      
      // If this is the last question, finish the quiz after state update
      if (currentQuestionIndex === questions.length - 1) {
        setTimeout(() => {
          finishQuizWithAnswers(updatedAnswers);
        }, 2000);
      }
      
      return updatedAnswers;
    });

    // Auto-advance after showing feedback (only for non-last questions)
    if (currentQuestionIndex < questions.length - 1) {
      setTimeout(() => {
        nextQuestion();
      }, 2000);
    }
  };

  const handleAnswerSelect = (answerIndex) => {
    if (isAnswered) return;
    
    setIsQuestionTimerActive(false);
    setSelectedAnswer(answerIndex);
    setIsAnswered(true);
    setShowFeedback(true);

    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    const newAnswer = {
      questionIndex: currentQuestionIndex,
      selectedAnswer: answerIndex,
      correctAnswer: currentQuestion.correctAnswer,
      isCorrect,
      timeSpent: timeSpent,
      timeUp: false
    };

    // Update userAnswers and handle the last question properly
    setUserAnswers(prev => {
      const updatedAnswers = [...prev, newAnswer];
      
      // If this is the last question, finish the quiz after state update
      if (currentQuestionIndex === questions.length - 1) {
        setTimeout(() => {
          finishQuizWithAnswers(updatedAnswers);
        }, 2000);
      }
      
      return updatedAnswers;
    });

    // Auto-advance after showing feedback (only for non-last questions)
    if (currentQuestionIndex < questions.length - 1) {
      setTimeout(() => {
        nextQuestion();
      }, 2000);
    }
  };

  const nextQuestion = () => {
    setShowFeedback(false);
    setSelectedAnswer(null);
    setIsAnswered(false);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Don't reset state before finishing quiz
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    // Ensure all questions have answers (fill in any missing ones)
    const completeAnswers = questions.map((question, index) => {
      const existingAnswer = userAnswers.find(answer => answer.questionIndex === index);
      if (existingAnswer) {
        return existingAnswer;
      } else {
        // Create a default answer for any missing questions
        return {
          questionIndex: index,
          selectedAnswer: null,
          correctAnswer: question.correctAnswer,
          isCorrect: false,
          timeSpent: timeSpent
        };
      }
    });
    
    const score = completeAnswers.filter(answer => answer.isCorrect).length;
    onFinishQuiz(completeAnswers, score, timeSpent);
  };

  const finishQuizWithAnswers = (answers) => {
    console.log('Finishing quiz with answers:', answers);
    
    // Ensure all questions have answers (fill in any missing ones)
    const completeAnswers = questions.map((question, index) => {
      const existingAnswer = answers.find(answer => answer.questionIndex === index);
      if (existingAnswer) {
        console.log(`Question ${index}: Found answer`, existingAnswer);
        return existingAnswer;
      } else {
        console.log(`Question ${index}: No answer found, creating default`);
        // Create a default answer for any missing questions
        return {
          questionIndex: index,
          selectedAnswer: null,
          correctAnswer: question.correctAnswer,
          isCorrect: false,
          timeSpent: timeSpent
        };
      }
    });
    
    console.log('Complete answers:', completeAnswers);
    const score = completeAnswers.filter(answer => answer.isCorrect).length;
    onFinishQuiz(completeAnswers, score, timeSpent);
  };

  const skipQuestion = () => {
    const newAnswer = {
      questionIndex: currentQuestionIndex,
      selectedAnswer: null,
      correctAnswer: currentQuestion.correctAnswer,
      isCorrect: false,
      timeSpent: timeSpent
    };

    setUserAnswers(prev => {
      const updatedAnswers = [...prev, newAnswer];
      
      // If this is the last question, finish the quiz after state update
      if (currentQuestionIndex === questions.length - 1) {
        setTimeout(() => {
          finishQuizWithAnswers(updatedAnswers);
        }, 100);
      }
      
      return updatedAnswers;
    });
    
    if (currentQuestionIndex < questions.length - 1) {
      nextQuestion();
    }
  };

  if (!currentQuestion) {
    return <div>Loading...</div>;
  }

  return (
    <motion.div
      className="quiz-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      role="main"
      aria-label="Quiz Interface"
    >
      <div className="quiz-header">
        <button 
          className="back-button" 
          onClick={onBackToStart}
          aria-label="Go back to category selection"
        >
          <ArrowLeft className="back-icon" aria-hidden="true" />
          Back to Categories
        </button>
        
        <div className="quiz-info">
          <h2 className="category-title">{category}</h2>
          <div className="quiz-stats">
            <span className="question-counter">
              Question {currentQuestionIndex + 1} of {questions.length}
            </span>
            <div className="timers">
              <Timer timeSpent={timeSpent} label="Total" />
              <Timer timeSpent={questionTimeLeft} label="Question" isQuestionTimer={true} />
            </div>
          </div>
        </div>
      </div>

      <ProgressBar progress={progress} />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestionIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="question-container"
        >
          <Question
            question={currentQuestion}
            onAnswerSelect={handleAnswerSelect}
            selectedAnswer={selectedAnswer}
            showFeedback={showFeedback}
            isAnswered={isAnswered}
          />
        </motion.div>
      </AnimatePresence>

      {showFeedback && (
        <motion.div
          className="feedback"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {selectedAnswer === currentQuestion.correctAnswer ? (
            <div className="feedback-correct">
              <CheckCircle className="feedback-icon" />
              <span>Correct! Well done!</span>
            </div>
          ) : (
            <div className="feedback-incorrect">
              <XCircle className="feedback-icon" />
              <span>
                Incorrect. The correct answer is: {currentQuestion.options[currentQuestion.correctAnswer]}
              </span>
            </div>
          )}
        </motion.div>
      )}

      <div className="quiz-controls">
        {!isAnswered && (
          <button 
            className="skip-button" 
            onClick={skipQuestion}
            aria-label="Skip this question"
          >
            Skip Question
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default Quiz;
