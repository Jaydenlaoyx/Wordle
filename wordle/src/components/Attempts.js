import { useState } from 'react'
import Grid from './Grid';
import '../styles/Keyboard.css'

const Attempts = () => {

  const [attempts, setAttempts] = useState([[], [], [], [], [], []]);

  return (
    <>
        <div className='attempts'>
            <div className='keyboard-row'>
                {attempts[0].length === 5 ? 
                attempts[0].map((letter) => (<Grid value={letter} clickable={false}></ Grid>)) : 
                ['', '', '', '', ''].map((letter) => (<Grid value={letter} clickable={false}></ Grid>))}
            </div>

            <div className='keyboard-row'>
                {attempts[1].length === 5 ? 
                attempts[1].map((letter) => (<Grid value={letter} clickable={false}></ Grid>)) : 
                ['', '', '', '', ''].map((letter) => (<Grid value={letter} clickable={false}></ Grid>))}
            </div>

            <div className='keyboard-row'>
                {attempts[2].length === 5 ? 
                attempts[2].map((letter) => (<Grid value={letter} clickable={false}></ Grid>)) : 
                ['', '', '', '', ''].map((letter) => (<Grid value={letter} clickable={false}></ Grid>))}
            </div>

            <div className='keyboard-row'>
                {attempts[3].length === 5 ? 
                attempts[3].map((letter) => (<Grid value={letter} clickable={false}></ Grid>)) : 
                ['', '', '', '', ''].map((letter) => (<Grid value={letter} clickable={false}></ Grid>))}
            </div>

            <div className='keyboard-row'>
                {attempts[4].length === 5 ? 
                attempts[4].map((letter) => (<Grid value={letter} clickable={false}></ Grid>)) : 
                ['', '', '', '', ''].map((letter) => (<Grid value={letter} clickable={false}></ Grid>))}
            </div>

            <div className='keyboard-row'>
                {attempts[5].length === 5 ? 
                attempts[5].map((letter) => (<Grid value={letter} clickable={false}></ Grid>)) : 
                ['', '', '', '', ''].map((letter) => (<Grid value={letter} clickable={false}></ Grid>))}
            </div>
            
        </div>
    </ >
  )
}

export default Attempts;