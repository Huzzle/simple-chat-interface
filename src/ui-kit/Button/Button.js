import React from 'react'

import './Button.css'

export const Button = ({ children, disabled, onClick }) => (
  <button className='Button' onClick={onClick} disabled={disabled}>{children}</button>
)
