import { useState, useEffect } from 'react';
import './App.css';
import Attempts from './components/Attempts';
import Keyboard from './components/Keyboard';

function App() {

  const [attempts, setAttempts] = useState(['', '', '', '', '', '']);
  const [currAttempt, setCurrAttempt] = useState(0);
  const [currGuess,  setCurrGuess] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState('LEVEL');
  const [isGuessSubmission, setIsGuessSubmission] = useState(false);

  // handle keyboard clicks
  const handleOnClick = (event) => {

    switch (event.key) {
      case "Enter":
        return handleEnterClick();
      case "Backspace":
        return handleBackspaceClick();
      default:
        return checkKey(event.key) ? handleLetterClick(event.key) : false;
    }
  };

  // handles when 'Enter' is clicked 
  const handleEnterClick = () => {
    if (currGuess.length === 5) {
      let newAttempt = [];
      if (currAttempt === 5) {
        setGameOver(true);
      }
      else if (currAttempt === 0) {
        newAttempt.push(currGuess);
        for (let i = 0; i < 5; i++) {
          newAttempt.push('');
        }
      } 
      else {
        for (let i = 0; i < currAttempt; i++) {
          newAttempt.push(attempts[i]);
        }
        newAttempt.push(currGuess);
        for (let i = 0; i < 5 - currAttempt; i++) {
          newAttempt.push('');
        }
      }
      setIsGuessSubmission(true);
      setAttempts(newAttempt);
    }
  };

  // handles when 'backspace' is clicked
  const handleBackspaceClick = () => {
    if (currGuess.length > 0) {
      let newCurrGuess = currGuess.slice(0, currGuess.length - 1);
      setCurrGuess(newCurrGuess);
    }
    setIsGuessSubmission(false);
  };

  // handles when any valid letter is clicked 
  const handleLetterClick = (key) => {
    if (currGuess.length < 5) {
      setCurrGuess(currGuess + key.toUpperCase());
    }
    setIsGuessSubmission(false);
  };

  // function to check if a letter is valid letter (i.e. not tab, shift or other functional keys)
  const checkKey = (key) => {
    const acceptedLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 
      'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    if (acceptedLetters.includes(key.toUpperCase())) {
      return true;
    }
    return false
  }

  // function to handle when new game button is clicked (i.e. start new game)
  const handleOnClickNewGame = () => {
    setGameOver(false);
    setGameWon(false);
    setCurrAttempt(0);
    setCurrGuess('');
    setAttempts(['', '', '', '', '', '']);
    // generate new answer (update this when doing the answer genration part)
  }

  // listens to keyboard enters
  useEffect(() => {
    document.addEventListener("keydown", handleOnClick)
    return () => {
      document.removeEventListener("keydown", handleOnClick)
    }
  });

  useEffect(() => {
    if (isGuessSubmission) {
      setCurrAttempt(currAttempt + 1);
      setCurrGuess('');
    }
    setIsGuessSubmission(false);
  }, [isGuessSubmission])

  // update the attempt state
  useEffect(() => {
    
    let newAttempt = [];
    if (currAttempt === 0) {
      newAttempt.push(currGuess);
      for (let i = 0; i < 5 - currAttempt; i++) {
        newAttempt.push([]);
      }
    } 
    else {
      for (let i = 0; i < currAttempt; i++) {
        newAttempt.push(attempts[i]);
      }
      newAttempt.push(currGuess);
      for (let i = 0; i < 5 - currAttempt; i++) {
        newAttempt.push([]);
      }
    }
    setAttempts(newAttempt);
  }, [currGuess]);

  return (
    <div className="App">
      <nav>
        <h1 className='title'>Wordle</h1>
      </nav>
      {!gameOver && <Attempts attempts={attempts} currAttempt={currAttempt} answer={correctAnswer} isGuessSubmission={isGuessSubmission}/>}
      {!gameOver &&<Keyboard onKeyDown={handleOnClick}/>}
      {gameOver && 
        <div className='endGameContents'>
          <div className='endGameTitle'>{gameWon ? 'CONGRATULATIONS!' : 'GAME OVER!'}</div>
          <div className='answerReveal'>{correctAnswer}</div>
          <div className='endGameCaption'>{gameWon? 'You\'ve guessed the word!': 'You did not guess the word!'}</div>
          <button className='newGameButton' onClick={handleOnClickNewGame}>New Game</button>
      </div>}
    </div>
  );
}

export default App;
