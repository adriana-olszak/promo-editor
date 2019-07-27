import React from 'react'
import {useDrag} from 'react-dnd'

import LogoA from '../../../assets/logo_one.png'
import LogoB from '../../../assets/logo_two.png'
import LogoC from '../../../assets/logo_three.png'

import {StyledLogo} from './styled'
import PropTypes from 'prop-types'
import {logicalExpression} from '@babel/types'

const getLogo = type => {
  switch (type) {
    case 'LogoA':
      return LogoA
    case 'LogoB':
      return LogoB
    case 'LogoC':
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
      height={height}
      isDragging={isDragging}
      left={left}
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
}

export default Logo
