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


const Attempts = (props) => {

  const [attempts, setAttempts] = useState([[], [], [], [], [], []]);

  useEffect(() => {
    setAttempts(props.attempts);
  });

  return (
    <>  
        <div className='attempts'>
            <div className='keyboard-row'>  
                <Grid position={0} value={attempts[0] === undefined ? '' : attempts[0].slice(0, 1)} gridState={'neutral'}></ Grid>
                <Grid position={1} value={attempts[0] === undefined ? '' : attempts[0].slice(1, 2)} gridState={'neutral'}></ Grid>
                <Grid position={2} value={attempts[0] === undefined ? '' : attempts[0].slice(2, 3)} gridState={'neutral'}></ Grid>
                <Grid position={3} value={attempts[0] === undefined ? '' : attempts[0].slice(3, 4)} gridState={'neutral'}></ Grid>
                <Grid position={4} value={attempts[0] === undefined ? '' : attempts[0].slice(4, 5)} gridState={'neutral'}></ Grid>
            </div>

            <div className='keyboard-row'>
                <Grid position={0} value={attempts[1] === undefined ? '' : attempts[1].slice(0, 1)} gridState={'neutral'}></ Grid>
                <Grid position={1} value={attempts[1] === undefined ? '' : attempts[1].slice(1, 2)} gridState={'neutral'}></ Grid>
                <Grid position={2} value={attempts[1] === undefined ? '' : attempts[1].slice(2, 3)} gridState={'neutral'}></ Grid>
                <Grid position={3} value={attempts[1] === undefined ? '' : attempts[1].slice(3, 4)} gridState={'neutral'}></ Grid>
                <Grid position={4} value={attempts[1] === undefined ? '' : attempts[1].slice(4, 5)} gridState={'neutral'}></ Grid>
            </div>

            <div className='keyboard-row'>
                <Grid position={0} value={attempts[2] === undefined ? '' : attempts[2].slice(0, 1)} gridState={'neutral'}></ Grid>
                <Grid position={1} value={attempts[2] === undefined ? '' : attempts[2].slice(1, 2)} gridState={'neutral'}></ Grid>
                <Grid position={2} value={attempts[2] === undefined ? '' : attempts[2].slice(2, 3)} gridState={'neutral'}></ Grid>
                <Grid position={3} value={attempts[2] === undefined ? '' : attempts[2].slice(3, 4)} gridState={'neutral'}></ Grid>
                <Grid position={4} value={attempts[2] === undefined ? '' : attempts[2].slice(4, 5)} gridState={'neutral'}></ Grid>
            </div>

            <div className='keyboard-row'>
                <Grid position={0} value={attempts[3] === undefined ? '' : attempts[3].slice(0, 1)} gridState={'neutral'}></ Grid>
                <Grid position={1} value={attempts[3] === undefined ? '' : attempts[3].slice(1, 2)} gridState={'neutral'}></ Grid>
                <Grid position={2} value={attempts[3] === undefined ? '' : attempts[3].slice(2, 3)} gridState={'neutral'}></ Grid>
                <Grid position={3} value={attempts[3] === undefined ? '' : attempts[3].slice(3, 4)} gridState={'neutral'}></ Grid>
                <Grid position={4} value={attempts[3] === undefined ? '' : attempts[3].slice(4, 5)} gridState={'neutral'}></ Grid>
            </div>

            <div className='keyboard-row'>
                <Grid position={0} value={attempts[4] === undefined ? '' : attempts[4].slice(0, 1)} gridState={'neutral'}></ Grid>
                <Grid position={1} value={attempts[4] === undefined ? '' : attempts[4].slice(1, 2)} gridState={'neutral'}></ Grid>
                <Grid position={2} value={attempts[4] === undefined ? '' : attempts[4].slice(2, 3)} gridState={'neutral'}></ Grid>
                <Grid position={3} value={attempts[4] === undefined ? '' : attempts[4].slice(3, 4)} gridState={'neutral'}></ Grid>
                <Grid position={4} value={attempts[4] === undefined ? '' : attempts[4].slice(4, 5)} gridState={'neutral'}></ Grid>
            </div>

            <div className='keyboard-row'>
                <Grid position={0} value={attempts[5] === undefined ? '' : attempts[5].slice(0, 1)} gridState={'neutral'}></ Grid>
                <Grid position={1} value={attempts[5] === undefined ? '' : attempts[5].slice(1, 2)} gridState={'neutral'}></ Grid>
                <Grid position={2} value={attempts[5] === undefined ? '' : attempts[5].slice(2, 3)} gridState={'neutral'}></ Grid>
                <Grid position={3} value={attempts[5] === undefined ? '' : attempts[5].slice(3, 4)} gridState={'neutral'}></ Grid>
                <Grid position={4} value={attempts[5] === undefined ? '' : attempts[5].slice(4, 5)} gridState={'neutral'}></ Grid>
            </div>
        </div>
    </ >
  )
}

export default Attempts;