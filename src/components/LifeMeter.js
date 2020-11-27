import React from 'react'

import './LifeMeter.pcss'

// eslint-disable-next-line react/prop-types
const LifeMeter = ({ name, health, reversed }) => (
  <div className="life-meter">
    <h4 className={reversed ? 'text-right' : ''}>{name}</h4>
    <div
      style={{ width: health * 2 }}
      className={reversed ? 'reversed right health-bar' : 'left health-bar'}
    >
      <div className="bar"></div>
    </div>
  </div>
)

export default LifeMeter
