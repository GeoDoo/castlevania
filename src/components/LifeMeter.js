import React from 'react'

import './LifeMeter.pcss'

// eslint-disable-next-line react/prop-types
const LifeMeter = ({ name, reversed }) => (
  <div>
    <h4 className={reversed ? 'text-right' : ''}>{name}</h4>
    <div className={reversed ? 'reversed health-bar' : 'health-bar'}>
      <div className="bar"></div>
    </div>
  </div>
)

export default LifeMeter
