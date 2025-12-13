import Key from './Key';
import '../styles/Keyboard.css'

const Keyboard = () => {

  const keyboardRow1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const keyboardRow2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  const keyboardRow3 = ['↵', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Del'];

  return (
    <div className='keyboard'>
        <div className='keyboard-row'>
            {keyboardRow1.map((letter) => {return (
              <Key 
                key = {letter}
                value = {letter}>
              </Key>)})}
        </div>

        <div className='keyboard-row'>
            {keyboardRow2.map((letter) => {return (
              <Key 
                key = {letter}
                value = {letter}>
              </Key>)})}
        </div>

        <div className='keyboard-row'>
            {keyboardRow3.map((letter) => {return (
              <Key 
                key = {letter}
                value = {letter}>
              </Key>)})}
        </div>
       
    </div >
  )
}

export default Keyboard;