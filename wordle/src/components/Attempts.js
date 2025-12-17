import { useEffect, useState } from 'react'
import Grid from './Grid';
import '../styles/Keyboard.css'

// TO-DO

/*
1. make Key.js for each key in keyboard, and shift logic for keys from Grid.js to Key.js
    -- each Key should have keyVal
2. change Grid.js structure:
    -- each Grid should have is pos and value
3. change Attempts.js to have a predefined structure of Grids
4. Game logic runs on App.js

*/

const Attempts = ({attempts, currAttempt, answer, isGuessSubmission, updateStatesDict}) => {

  const [attemptsState, setAttemptsState] = useState([[], [], [], [], [], []]);

  const updateLettersStateDict = (key, newState) => {
    if (newState === 'correct') {
        updateStatesDict(oldDict => ({
        ...oldDict,
        [key]: newState
        }));
    }
    else if (newState === 'misplaced' ) {
         updateStatesDict( oldDict => ({
        ...oldDict,
        [key]: oldDict[key] !== 'correct' ? newState : oldDict[key]
        }));
    }
    else if (newState === 'absent' ) {
        console.log()
         updateStatesDict( oldDict => ({
        ...oldDict,
        [key]: oldDict[key] !== 'absent' ? newState : oldDict[key]
        }));
    }
  };

  // calculate the state of each guess
  const calculateGridState = (attempts, currAttempt, answer, isGuessSubmission) => {
    if (isGuessSubmission) { 
        for (let i = 0; i < currAttempt + 1; i++) {
            if (currAttempt === i) {
                //calculate state for the first attempt
                let guess = attempts[i];
                let attemptState = ['neutral', 'neutral', 'neutral', 'neutral', 'neutral'];
                let answerConsumptionState = [false, false, false, false, false];

                // iteration to find letter in guess that is at correct position
                // any correct letter will be consumed after this iteration
                for (let j = 0; j < 5; j++) {
                    if (guess[j] === answer[j]) {
                        attemptState[j] = 'correct';
                        updateLettersStateDict(guess[j], 'correct');
                        answerConsumptionState[j] = true;
                    }
                }
                // iteration to find misplaced letters
                for (let j = 0; j < 5; j++) {
                    if (!(attemptState[j] === 'correct')) {
                        if (answer.includes(guess[j])) {
                            let pos = answer.indexOf(guess[j]);

                            while (pos !== -1) {
                                if (!answerConsumptionState[pos]) {
                                    answerConsumptionState[pos] = true;
                                    attemptState[j] = 'misplaced';
                                    updateLettersStateDict(guess[j], 'misplaced');
                                    break;
                                }
                                else {
                                    pos = answer.indexOf(guess[j], pos+1);
                                }
                            }
                        }
                        else {
                            updateLettersStateDict(guess[j], 'absent');
                        }
                    }
                }
                let newAttemptsState = [];
                for (let j = 0; j < 6; j++) {
                    if (j === i) {
                        newAttemptsState.push(attemptState);
                    }
                    else {
                        newAttemptsState.push(attemptsState[j]);
                    }
                }
                setAttemptsState(newAttemptsState);
            }
        }
    }
  }

  useEffect(() => {
    calculateGridState(attempts, currAttempt, answer, isGuessSubmission);
  }, [attempts]);

  return (
    <>  
        <div className='attempts'>
            <div className='keyboard-row'>  
                <Grid position={0} value={attempts[0] === undefined ? '' : attempts[0].slice(0, 1)} gridState={attemptsState[0] === undefined ? 'neutral' : attemptsState[0][0]}></ Grid>
                <Grid position={1} value={attempts[0] === undefined ? '' : attempts[0].slice(1, 2)} gridState={attemptsState[0] === undefined ? 'neutral' : attemptsState[0][1]}></ Grid>
                <Grid position={2} value={attempts[0] === undefined ? '' : attempts[0].slice(2, 3)} gridState={attemptsState[0] === undefined ? 'neutral' : attemptsState[0][2]}></ Grid>
                <Grid position={3} value={attempts[0] === undefined ? '' : attempts[0].slice(3, 4)} gridState={attemptsState[0] === undefined ? 'neutral' : attemptsState[0][3]}></ Grid>
                <Grid position={4} value={attempts[0] === undefined ? '' : attempts[0].slice(4, 5)} gridState={attemptsState[0] === undefined ? 'neutral' : attemptsState[0][4]}></ Grid>
            </div>

            <div className='keyboard-row'>
                <Grid position={0} value={attempts[1] === undefined ? '' : attempts[1].slice(0, 1)} gridState={attemptsState[1] === undefined ? 'neutral' : attemptsState[1][0]}></ Grid>
                <Grid position={1} value={attempts[1] === undefined ? '' : attempts[1].slice(1, 2)} gridState={attemptsState[1] === undefined ? 'neutral' : attemptsState[1][1]}></ Grid>
                <Grid position={2} value={attempts[1] === undefined ? '' : attempts[1].slice(2, 3)} gridState={attemptsState[1] === undefined ? 'neutral' : attemptsState[1][2]}></ Grid>
                <Grid position={3} value={attempts[1] === undefined ? '' : attempts[1].slice(3, 4)} gridState={attemptsState[1] === undefined ? 'neutral' : attemptsState[1][3]}></ Grid>
                <Grid position={4} value={attempts[1] === undefined ? '' : attempts[1].slice(4, 5)} gridState={attemptsState[1] === undefined ? 'neutral' : attemptsState[1][4]}></ Grid>
            </div>

            <div className='keyboard-row'>
                <Grid position={0} value={attempts[2] === undefined ? '' : attempts[2].slice(0, 1)} gridState={attemptsState[2] === undefined ? 'neutral' : attemptsState[2][0]}></ Grid>
                <Grid position={1} value={attempts[2] === undefined ? '' : attempts[2].slice(1, 2)} gridState={attemptsState[2] === undefined ? 'neutral' : attemptsState[2][1]}></ Grid>
                <Grid position={2} value={attempts[2] === undefined ? '' : attempts[2].slice(2, 3)} gridState={attemptsState[2] === undefined ? 'neutral' : attemptsState[2][2]}></ Grid>
                <Grid position={3} value={attempts[2] === undefined ? '' : attempts[2].slice(3, 4)} gridState={attemptsState[2] === undefined ? 'neutral' : attemptsState[2][3]}></ Grid>
                <Grid position={4} value={attempts[2] === undefined ? '' : attempts[2].slice(4, 5)} gridState={attemptsState[2] === undefined ? 'neutral' : attemptsState[2][4]}></ Grid>
            </div>

            <div className='keyboard-row'>
                <Grid position={0} value={attempts[3] === undefined ? '' : attempts[3].slice(0, 1)} gridState={attemptsState[3] === undefined ? 'neutral' : attemptsState[3][0]}></ Grid>
                <Grid position={1} value={attempts[3] === undefined ? '' : attempts[3].slice(1, 2)} gridState={attemptsState[3] === undefined ? 'neutral' : attemptsState[3][1]}></ Grid>
                <Grid position={2} value={attempts[3] === undefined ? '' : attempts[3].slice(2, 3)} gridState={attemptsState[3] === undefined ? 'neutral' : attemptsState[3][2]}></ Grid>
                <Grid position={3} value={attempts[3] === undefined ? '' : attempts[3].slice(3, 4)} gridState={attemptsState[3] === undefined ? 'neutral' : attemptsState[3][3]}></ Grid>
                <Grid position={4} value={attempts[3] === undefined ? '' : attempts[3].slice(4, 5)} gridState={attemptsState[3] === undefined ? 'neutral' : attemptsState[3][4]}></ Grid>
            </div>

            <div className='keyboard-row'>
                <Grid position={0} value={attempts[4] === undefined ? '' : attempts[4].slice(0, 1)} gridState={attemptsState[4] === undefined ? 'neutral' : attemptsState[4][0]}></ Grid>
                <Grid position={1} value={attempts[4] === undefined ? '' : attempts[4].slice(1, 2)} gridState={attemptsState[4] === undefined ? 'neutral' : attemptsState[4][1]}></ Grid>
                <Grid position={2} value={attempts[4] === undefined ? '' : attempts[4].slice(2, 3)} gridState={attemptsState[4] === undefined ? 'neutral' : attemptsState[4][2]}></ Grid>
                <Grid position={3} value={attempts[4] === undefined ? '' : attempts[4].slice(3, 4)} gridState={attemptsState[4] === undefined ? 'neutral' : attemptsState[4][3]}></ Grid>
                <Grid position={4} value={attempts[4] === undefined ? '' : attempts[4].slice(4, 5)} gridState={attemptsState[4] === undefined ? 'neutral' : attemptsState[4][4]}></ Grid>
            </div>

            <div className='keyboard-row'>
                <Grid position={0} value={attempts[5] === undefined ? '' : attempts[5].slice(0, 1)} gridState={attemptsState[5] === undefined ? 'neutral' : attemptsState[5][0]}></ Grid>
                <Grid position={1} value={attempts[5] === undefined ? '' : attempts[5].slice(1, 2)} gridState={attemptsState[5] === undefined ? 'neutral' : attemptsState[5][1]}></ Grid>
                <Grid position={2} value={attempts[5] === undefined ? '' : attempts[5].slice(2, 3)} gridState={attemptsState[5] === undefined ? 'neutral' : attemptsState[5][2]}></ Grid>
                <Grid position={3} value={attempts[5] === undefined ? '' : attempts[5].slice(3, 4)} gridState={attemptsState[5] === undefined ? 'neutral' : attemptsState[5][3]}></ Grid>
                <Grid position={4} value={attempts[5] === undefined ? '' : attempts[5].slice(4, 5)} gridState={attemptsState[5] === undefined ? 'neutral' : attemptsState[5][4]}></ Grid>
            </div>
        </div>
    </ >
  )
}

export default Attempts;