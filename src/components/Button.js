import React from 'react'

// eslint-disable-next-line react/prop-types
const Button = ({ text, onClick, disabled }) => (
  <button onClick={onClick} disabled={disabled}>
    {text}
  </button>
)

export default Button
