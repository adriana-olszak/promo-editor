import React from 'react'
import {PropTypes} from 'prop-types'
import {useDrag} from 'react-dnd'

import {StyledText} from './styled'

const Text = ({
  id = null,
  left,
  top,
  center,
  color,
  fontFamily,
  textDecoration,
  text,
  onContextMenu = () => ({}),
}) => {
  const [{isDragging}, drag] = useDrag({
    item: {id, left, top, type: 'TEXT'},
    begin: monitor => {
      const {x, y} = monitor.getInitialSourceClientOffset()
      return {
        left: x,
        top: y,
        type: 'TEXT',
        id,
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })

  return (
    <StyledText
      center={center}
      color={color}
      data-id={id}
      data-type="TEXT"
      fontFamily={fontFamily}
      isDragging={isDragging}
      left={left}
      onContextMenu={onContextMenu}
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
  center: PropTypes.bool,
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  textDecoration: PropTypes.arrayOf(PropTypes.string),
  text: PropTypes.string,
  onContextMenu: PropTypes.func,
}

export default Text
