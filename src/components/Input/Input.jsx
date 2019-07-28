import React from 'react'

import {StyledInput} from './styled'

const Input = ({onChange, value, label, type = 'text'}) => {
  return (
    <label>
      <input type={type} onChange={onChange} value={value} />
      {label}
    </label>
  )
}

Input.propTypes = {}

Input.defaultProps = {}

export default Input
