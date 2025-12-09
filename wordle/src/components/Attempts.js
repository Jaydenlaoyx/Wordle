import { useState } from 'react'
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


const Attempts = () => {

  const [attempts, setAttempts] = useState([[], [], [], [], [], []]);

  return (
    <>
        <div className='attempts'>
            <div className='keyboard-row'>
                <Grid position={0} value={''} gridState={'neutral'}></ Grid>
                <Grid position={1} value={''} gridState={'neutral'}></ Grid>
                <Grid position={2} value={''} gridState={'neutral'}></ Grid>
                <Grid position={3} value={''} gridState={'neutral'}></ Grid>
                <Grid position={4} value={''} gridState={'neutral'}></ Grid>
            </div>

            <div className='keyboard-row'>
                <Grid position={0} value={''} gridState={'neutral'}></ Grid>
                <Grid position={1} value={''} gridState={'neutral'}></ Grid>
                <Grid position={2} value={''} gridState={'neutral'}></ Grid>
                <Grid position={3} value={''} gridState={'neutral'}></ Grid>
                <Grid position={4} value={''} gridState={'neutral'}></ Grid>
            </div>

            <div className='keyboard-row'>
                <Grid position={0} value={''} gridState={'neutral'}></ Grid>
                <Grid position={1} value={''} gridState={'neutral'}></ Grid>
                <Grid position={2} value={''} gridState={'neutral'}></ Grid>
                <Grid position={3} value={''} gridState={'neutral'}></ Grid>
                <Grid position={4} value={''} gridState={'neutral'}></ Grid>
            </div>

            <div className='keyboard-row'>
                <Grid position={0} value={''} gridState={'neutral'}></ Grid>
                <Grid position={1} value={''} gridState={'neutral'}></ Grid>
                <Grid position={2} value={''} gridState={'neutral'}></ Grid>
                <Grid position={3} value={''} gridState={'neutral'}></ Grid>
                <Grid position={4} value={''} gridState={'neutral'}></ Grid>
            </div>

            <div className='keyboard-row'>
                <Grid position={0} value={''} gridState={'neutral'}></ Grid>
                <Grid position={1} value={''} gridState={'neutral'}></ Grid>
                <Grid position={2} value={''} gridState={'neutral'}></ Grid>
                <Grid position={3} value={''} gridState={'neutral'}></ Grid>
                <Grid position={4} value={''} gridState={'neutral'}></ Grid>
            </div>

            <div className='keyboard-row'>
                <Grid position={0} value={''} gridState={'neutral'}></ Grid>
                <Grid position={1} value={''} gridState={'neutral'}></ Grid>
                <Grid position={2} value={''} gridState={'neutral'}></ Grid>
                <Grid position={3} value={''} gridState={'neutral'}></ Grid>
                <Grid position={4} value={''} gridState={'neutral'}></ Grid>
            </div>
        </div>
    </ >
  )
}

export default Attempts;