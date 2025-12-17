import { useState, useEffect } from 'react';
import './App.css';
import Attempts from './components/Attempts';
import Keyboard from './components/Keyboard';
import Grid from './components/Grid';

function App() {

  const [attempts, setAttempts] = useState(['', '', '', '', '', '']);
  const [currAttempt, setCurrAttempt] = useState(0);
  const [currGuess,  setCurrGuess] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState('LEMON');
  const [isGuessSubmission, setIsGuessSubmission] = useState(false);
  const [allLettersStateDict, setAllLettersStateDict] = useState({
    "A": 'neutral', "B": 'neutral', "C": 'neutral', "D": 'neutral', "E": 'neutral', "F": 'neutral', "G": 'neutral',
    "H": 'neutral', "I": 'neutral', "J": 'neutral', "K": 'neutral', "L": 'neutral', "M": 'neutral', "N": 'neutral',
    "O": 'neutral', "P": 'neutral', "Q": 'neutral', "R": 'neutral', "S": 'neutral', "T": 'neutral', "U": 'neutral',
    "V": 'neutral', "W": 'neutral', "X": 'neutral', "Y": 'neutral', "Z": 'neutral', "Del": 'neutral', "↵": 'neutral'
  });


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
        setGameWon(false);
      }
      else if (currGuess === correctAnswer) {
        setGameOver(true);
        setGameWon(true);
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

  // function to update the letters state dict so that keyboard can reflect the correct state for every letter
  const updateStatesDict = (dict) => {
    setAllLettersStateDict(dict);
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
      {!gameOver && <Attempts 
        attempts={attempts} 
        currAttempt={currAttempt} 
        answer={correctAnswer} 
        isGuessSubmission={isGuessSubmission}
        updateStatesDict={updateStatesDict}/>}
      {!gameOver && <Keyboard onKeyDown={handleOnClick} allLettersStateDict={allLettersStateDict}/>}
      {gameOver && 
        <div className='endGameContents'>
          <div className='endGameTitle'>{gameWon ? 'CONGRATULATIONS!' : 'GAME OVER!'}</div>
          {/* <div className='answerReveal'>{correctAnswer}</div> */}
          <div className='answerReveal'>
            <Grid value={correctAnswer.slice(0,1)} gridState={'correct'}></Grid>
            <Grid value={correctAnswer.slice(1,2)} gridState={'correct'}></Grid>
            <Grid value={correctAnswer.slice(2,3)} gridState={'correct'}></Grid>
            <Grid value={correctAnswer.slice(3,4)} gridState={'correct'}></Grid>
            <Grid value={correctAnswer.slice(4,5)} gridState={'correct'}></Grid>
          </div>
          <div className='endGameCaption'>{gameWon? 'You\'ve guessed the word!': 'You did not guess the word!'}</div>
          <button className='newGameButton' onClick={handleOnClickNewGame}>New Game</button>
      </div>}
    </div>
  );
}

export default App;
