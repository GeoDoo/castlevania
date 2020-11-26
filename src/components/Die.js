import React from 'react'

import './Die.pcss'

// eslint-disable-next-line react/prop-types
const Die = ({ side }) => {
  const pips = Array(side)
    .fill(0)
    .map((_, i) => <span key={i} className="pip"></span>)

  return <div className="face">{pips}</div>
}

export default Die
