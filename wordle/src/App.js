import { useState } from 'react';
import './App.css';
import Attempts from './components/Attempts';
import Keyboard from './components/Keyboard';

function App() {

  const [currentAttempt, setCurrentAttempt] = useState('');

  // handle keyboard clicks
  const handleOnClick = (event) => {

    // if enter is clicked
    if (event.key === 'a') {
      console.log("a is clicked");
    }

  };

  return (
    <div className="App">
      <nav>
        <h1 className='title'>Wordle</h1>
      </nav>
      <Attempts />
      <Keyboard onKeyDown={handleOnClick} />
    </div>
  );
}

export default App;
