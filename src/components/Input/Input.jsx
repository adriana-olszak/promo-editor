import React from 'react'
import PropTypes from 'prop-types'

import {StyledInput, StyledLabel} from './styled'

const Input = ({onChange, className, placeholder, value, label, type}) => (
  <StyledLabel className={className}>
    {label}
    <StyledInput
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  </StyledLabel>
)

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
}

Input.defaultProps = {
  type: 'text',
}

export default Input
