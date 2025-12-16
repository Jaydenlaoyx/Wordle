import '../styles/Grid.css'

const Grid = ({value, gridState}) => {

  return (
    <>
        <div className={'grid ' + gridState}>{value}</div>
    </ >
  )
}

export default Grid;