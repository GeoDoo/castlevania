import React from 'react'

import './LifeMeter.pcss'

// eslint-disable-next-line react/prop-types
const LifeMeter = ({ name }) => (
  <div>
    <h4>{name}</h4>
    <div className="health-bar">
      <div className="bar"></div>
    </div>
  </div>
)

export default LifeMeter
