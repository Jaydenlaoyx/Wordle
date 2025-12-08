import '../styles/Grid.css'

const Grid = ({value, clickable}) => {

  return (
    <>
        <div className={clickable ? 'clickable Grid' : 'Grid'}>{value}</div>
    </ >
  )
}

export default Grid;