import React from 'react'
import {useDrop} from 'react-dnd'

import Logo, {LogoTypes} from '../Logos/Logo'
import {generateId} from '../../helpers/dummyId'

import {StyledCanvas} from './styled'
import {Text} from '../TextControl'

const Canvas = ({
  onLogoDrop,
  onLogoMove,
  onTextMove,
  logos,
  texts,
  backgroundSrc,
}) => {
  const [{isOver}, drop] = useDrop({
    accept: [...Object.keys(LogoTypes), 'TEXT'],
    drop(item, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset()
      const left = Math.round(item.left + delta.x)
      const top = Math.round(item.top + delta.y)

      if (item.type === 'TEXT') {
        onTextMove({...item, top, left})
      } else {
        if (item.id === null) {
          onLogoDrop({...item, name: item.type, id: generateId(), left, top})
        } else {
          onLogoMove({...item, top, left})
        }
      }

      return undefined
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
    }),
  })

  return (
    <StyledCanvas backgroundSrc={backgroundSrc} isOver={isOver} ref={drop}>
      {Object.entries(logos).map(
        ([key, {id, left, top, name, height, width}]) => {
          return (
            <Logo
              height={height}
              id={id}
              key={key}
              left={left}
              top={top}
              type={name}
              width={width}
            />
          )
        }
      )}
      {Object.entries(texts).map(
        ([key, {id, left, top, fontFamily, textDecoration, text, color}]) => {
          return (
            <Text
              fontFamily={fontFamily}
              id={id}
              key={key}
              left={left}
              top={top}
              textDecoration={textDecoration}
              text={text}
              color={color}
            />
          )
        }
      )}
    </StyledCanvas>
  )
}

export default Canvas
