import React from 'react'

import './TextField.css'

export const TextField = ({ placeholder, value, onChange }) => (
  <input
    className='TextField'
    placeholder={placeholder}
    value={value}
    type='text'
    onChange={onChange}
  />
)
