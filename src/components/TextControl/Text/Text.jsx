import React from 'react'
import {PropTypes} from 'prop-types'
import {useDrag} from 'react-dnd'

import {StyledText} from './styled'

const Text = ({
  id = null,
  left = 0,
  top = 0,
  color,
  fontFamily,
  textDecoration,
  text,
}) => {
  const [{isDragging}, drag] = useDrag({
    item: {id, left, top, type: 'TEXT'},
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })

  return (
    <StyledText
      color={color}
      fontFamily={fontFamily}
      isDragging={isDragging}
      left={left}
      ref={drag}
      textDecoration={textDecoration}
      top={top}
    >
      {text}
    </StyledText>
  )
}

Text.propTypes = {
  id: PropTypes.string.isRequired,
  left: PropTypes.number,
  top: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  type: PropTypes.string.isRequired,
}

export default Text
