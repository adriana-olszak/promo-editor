import React from 'react'
import PropTypes from 'prop-types'

import {StyledButton} from './styled'

const Button = ({
  buttonText,
  onClick,
  type,
  disabled,
  className,
  size,
  children,
  ...rest
}) => (
  <StyledButton
    {...rest}
    className={className}
    disabled={disabled}
    onClick={onClick}
    size={size}
    type={type}
  >
    <span>{buttonText}</span>
    {children}
  </StyledButton>
)

Button.propTypes = {
  buttonText: PropTypes.string,
  size: PropTypes.oneOf(['s', 'm', 'l']),
  className: PropTypes.string,
  type: PropTypes.oneOf(['Input', 'primary', 'inverse', 'link']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.element,
}

Button.defaultProps = {
  buttonText: 'Lorem Ipsum',
  type: 'Input',
  size: 'm',
  disabled: false,
  onClick: () => ({}),
}

export default Button
