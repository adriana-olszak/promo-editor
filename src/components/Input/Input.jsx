import React from 'react'

import {StyledInput, StyledLabel} from './styled'

const Input = ({
  onChange,
  classname,
  placeholder,
  value,
  label,
  type = 'text',
}) => {
  return (
    <StyledLabel>
      <StyledInput
        classname={classname}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        value={value}
      />
      {label}
    </StyledLabel>
  )
}

Input.propTypes = {}

Input.defaultProps = {}

export default Input
