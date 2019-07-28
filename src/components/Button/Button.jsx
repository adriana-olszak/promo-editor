import React from 'react'
import PropTypes from 'prop-types'

import {StyledButton} from './styled'

const Button = ({
  buttonText,
  onClick,
  type,
  disabled,
  className,
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
  block: PropTypes.bool,
  children: PropTypes.element,
}

Button.defaultProps = {
  buttonText: 'Lorem Ipsum',
  disabled: false,
  block: false,
  onClick: () => ({}),
}

export default Button
