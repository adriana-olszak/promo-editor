import React from 'react'
import {PropTypes} from 'prop-types'
import {useDrag} from 'react-dnd'

import LogoA from '../../../assets/logo_one.png'
import LogoB from '../../../assets/logo_two.png'
import LogoC from '../../../assets/logo_three.png'

import {StyledLogo} from './styled'

export const LogoTypes = {
  LogoA: 'LogoA',
  LogoB: 'LogoB',
  LogoC: 'LogoC',
}

const getLogo = type => {
  switch (type) {
    case LogoTypes.LogoA:
      return LogoA
    case LogoTypes.LogoB:
      return LogoB
    case LogoTypes.LogoC:
      return LogoC
  }
}

const Logo = ({
  id = null,
  left = 450,
  top = 0,
  type,
  width = 100,
  height = 100,
  className,
  onContextMenu = () => ({}),
}) => {
  const [{isDragging}, drag] = useDrag({
    item: {id, left, top, type: `${type}`, width, height},
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })

  return (
    <StyledLogo
      alt={type}
      className={className}
      data-id={id}
      data-type="LOGO"
      height={height}
      isDragging={isDragging}
      left={left}
      onContextMenu={onContextMenu}
      ref={drag}
      src={getLogo(type)}
      top={top}
      width={width}
    />
  )
}

Logo.propTypes = {
  id: PropTypes.string.isRequired,
  left: PropTypes.number,
  top: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  type: PropTypes.string.isRequired,
  onContextMenu: PropTypes.func,
}

export default Logo
