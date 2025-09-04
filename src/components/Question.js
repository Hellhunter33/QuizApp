import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';
import './Question.css';

const Question = ({ 
  question, 
  onAnswerSelect, 
  selectedAnswer, 
  showFeedback, 
  isAnswered 
}) => {
  const answerRefs = useRef([]);

  useEffect(() => {
    // Focus first answer option when question loads
    if (answerRefs.current[0] && !isAnswered) {
      answerRefs.current[0].focus();
    }
  }, [question, isAnswered]);

  const handleKeyDown = (event, index) => {
    if (isAnswered) return;

    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        onAnswerSelect(index);
        break;
      case 'ArrowDown':
        event.preventDefault();
        const nextIndex = (index + 1) % question.options.length;
        answerRefs.current[nextIndex]?.focus();
        break;
      case 'ArrowUp':
        event.preventDefault();
        const prevIndex = index === 0 ? question.options.length - 1 : index - 1;
        answerRefs.current[prevIndex]?.focus();
        break;
      default:
        break;
    }
  };
  const getAnswerClass = (index) => {
    let baseClass = 'answer-option';
    
    if (isAnswered) {
      if (index === question.correctAnswer) {
        baseClass += ' correct';
      } else if (index === selectedAnswer && index !== question.correctAnswer) {
        baseClass += ' incorrect';
      } else {
        baseClass += ' disabled';
      }
    } else if (selectedAnswer === index) {
      baseClass += ' selected';
    }
    
    return baseClass;
  };

  const getAnswerIcon = (index) => {
    if (!isAnswered) return null;
    
    if (index === question.correctAnswer) {
      return <CheckCircle className="answer-icon correct-icon" />;
    } else if (index === selectedAnswer && index !== question.correctAnswer) {
      return <XCircle className="answer-icon incorrect-icon" />;
    }
    
    return null;
  };

  return (
    <motion.div
      className="question"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="question-header">
        <h3 className="question-text">{question.question}</h3>
      </div>

      <div className="answers-container">
        {question.options.map((option, index) => (
          <div key={index} className="answer-option-wrapper">
<motion.button
  ref={el => answerRefs.current[index] = el}
  className={getAnswerClass(index)}
  onClick={() => onAnswerSelect(index)}
  onKeyDown={(e) => handleKeyDown(e, index)}
  disabled={isAnswered}
  aria-label={`Option ${String.fromCharCode(65 + index)}: ${option}`}
  aria-describedby={`question-${index}`}
  role="radio"
  aria-checked={selectedAnswer === index}
  tabIndex={isAnswered ? -1 : 0}
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: index * 0.1 }}
>
  <div className="answer-content">
    <span className="answer-letter" aria-hidden="true">
      {String.fromCharCode(65 + index)}
    </span>
    <span className="answer-text" id={`question-${index}`}>{option}</span>
    {getAnswerIcon(index)}
  </div>
</motion.button>
          </div>
        ))}
      </div>

      {question.image && (
        <div className="question-image">
          <img src={question.image} alt="Question illustration" />
        </div>
      )}
    </motion.div>
  );
};

export default Question;
