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
  block,
  children,
  ...rest
}) => (
  <StyledButton
    {...rest}
    block={block}
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
  className: PropTypes.string,
  type: PropTypes.oneOf(['danger']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.element,
}

Button.defaultProps = {
  buttonText: 'Lorem Ipsum',
  disabled: false,
  onClick: () => ({}),
}

export default Button
