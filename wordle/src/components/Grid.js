import '../styles/Grid.css'

const Grid = ({position, value, gridState}) => {

  return (
    <>
        <div className={'grid ' + gridState}>{value}</div>
    </ >
  )
}

export default Grid;