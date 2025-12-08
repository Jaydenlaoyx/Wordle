import Grid from './Grid';
import '../styles/Keyboard.css'

const Keyboard = () => {

  const keyboardRow1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
  const keyboardRow2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
  const keyboardRow3 = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];

  return (
    <div className='keyboard'>
        <div className='keyboard-row'>
            {keyboardRow1.map((letter) => (<Grid value={letter} clickable={true}></ Grid>))}
        </div>

        <div className='keyboard-row'>
            {keyboardRow2.map((letter) => (<Grid value={letter} clickable={true}></ Grid>))}
        </div>

        <div className='keyboard-row'>
            {keyboardRow3.map((letter) => (<Grid value={letter} clickable={true}></ Grid>))}
        </div>
       
    </div >
  )
}

export default Keyboard;