import React from 'react'
import '../styles/Key.css'
import '../styles/Grid.css'

const Key = ({ value, state }) => {
  return (
    <div className={'key ' + state}>{value}</div>
  )
}

export default Key