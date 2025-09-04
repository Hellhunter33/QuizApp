// High Scores Management
const HIGH_SCORES_KEY = 'quizAppHighScores';

export const getHighScores = () => {
  try {
    const scores = localStorage.getItem(HIGH_SCORES_KEY);
    return scores ? JSON.parse(scores) : [];
  } catch (error) {
    console.error('Error loading high scores:', error);
    return [];
  }
};

export const saveHighScore = (scoreData) => {
  try {
    const scores = getHighScores();
    const newScore = {
      id: Date.now(),
      date: new Date().toISOString(),
      ...scoreData
    };
    
    scores.push(newScore);
    
    // Sort by score (descending) and keep only top 10
    scores.sort((a, b) => b.score - a.score);
    const topScores = scores.slice(0, 10);
    
    localStorage.setItem(HIGH_SCORES_KEY, JSON.stringify(topScores));
    return topScores;
  } catch (error) {
    console.error('Error saving high score:', error);
    return [];
  }
};

export const isHighScore = (score, category, difficulty) => {
  const scores = getHighScores();
  const categoryScores = scores.filter(s => s.category === category && s.difficulty === difficulty);
  
  // If less than 10 scores for this category/difficulty, it's a high score
  if (categoryScores.length < 10) return true;
  
  // Check if score is higher than the lowest score
  const lowestScore = Math.min(...categoryScores.map(s => s.score));
  return score > lowestScore;
};

export const getCategoryHighScores = (category, difficulty) => {
  const scores = getHighScores();
  return scores
    .filter(s => s.category === category && s.difficulty === difficulty)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);
};

