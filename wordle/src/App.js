import { useState, useEffect } from 'react';
import './App.css';
import Attempts from './components/Attempts';
import Keyboard from './components/Keyboard';

function App() {

  const [attempts, setAttempts] = useState(['', '', '', '', '', '']);
  const [currAttempt, setCurrAttempt] = useState(0);
  const [currGuess,  setCurrGuess] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [gamewon, setGameWon] = useState(false);

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
    let newAttempt = [];
    if (currAttempt === 5) {
      setGameOver(true);
    }
    else if (currAttempt === 0) {
      newAttempt.push(currGuess);
      for (let i = 0; i < 6 - currAttempt; i++) {
        newAttempt.push([]);
      }
    } 
    else {
      for (let i = 0; i < currAttempt; i++) {
        newAttempt.push(attempts[i]);
      }
      newAttempt.push(currGuess);
      for (let i = 0; i < 6 - currAttempt; i++) {
        newAttempt.push([]);
      }
    }
    setAttempts(newAttempt);
    setCurrGuess('');
    setCurrAttempt(currAttempt + 1);
    console.log("after enter: attempt = " + attempts);
  };

  // handles when 'backspace' is clicked
  const handleBackspaceClick = () => {
    if (currGuess.length > 0) {
      let newCurrGuess = currGuess.slice(0, currGuess.length - 1);
      setCurrGuess(newCurrGuess);
    }
    console.log('backspace is pressed');
  };

  // handles when any valid letter is clicked 
  const handleLetterClick = (key) => {
    //console.log(key + ' is pressed');
    if (currGuess.length < 5) {
      setCurrGuess(currGuess + key.toUpperCase());
    }
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

  // listens to keyboard enters
  useEffect(() => {
    document.addEventListener("keydown", handleOnClick)
    return () => {
      document.removeEventListener("keydown", handleOnClick)
    }
  });

  // update the attempt state
  useEffect(() => {
    
    if (currGuess !== '') {
      console.log('word is '+ currGuess + " and attempts is " + attempts);
      let newAttempt = [];
      if (currAttempt === 0) {
        newAttempt.push(currGuess);
        for (let i = 0; i < 6 - currAttempt; i++) {
          newAttempt.push([]);
        }
      } 
      else {
        for (let i = 0; i < currAttempt; i++) {
          newAttempt.push(attempts[i]);
        }
        newAttempt.push(currGuess);
        for (let i = 0; i < 6 - currAttempt; i++) {
          newAttempt.push([]);
        }
      }
      setAttempts(newAttempt);
    }
    else {
      console.log('--word is '+ currGuess + " and attempts is " + attempts);
    }
  }, [currGuess]);

  return (
    <div className="App">
      <nav>
        <h1 className='title'>Wordle</h1>
      </nav>
      {!gameOver && <Attempts attempts={attempts} currAttempt={currAttempt}/>}
      {!gameOver &&<Keyboard onKeyDown={handleOnClick}/>}
    </div>
  );
}

export default App;
