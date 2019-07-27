import React from 'react'

import {StyledTarget} from './styled'
import {useDrop} from 'react-dnd'
import Logo from '../Logo'
import {generateId} from '../../../helpers/dummyId'

const Target = ({
  onDrop,
  onMove = data => console.log(data, 'data'),
  logos,
}) => {
  const [{isOver}, drop] = useDrop({
    accept: ['LogoA', 'LogoB', 'LogoC'],
    drop(item, monitor) {
      console.log(item, 'item')
      const delta = monitor.getDifferenceFromInitialOffset()
      const left = Math.round(item.left + delta.x)
      const top = Math.round(item.top + delta.y)
      console.log(left, 'left')
      console.log(top, 'top')

      if (item.id === null) {
        console.count('onDrop')
        onDrop({...item, name: item.type, id: generateId(), left, top})
      } else {
        console.count('onMove')
        onMove({...item, top, left})
      }
      return undefined
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
    }),
  })
  console.log(Object.entries(logos), 'Object.entries(logos)')

  return (
    <StyledTarget isOver={isOver} ref={drop}>
      {Object.entries(logos).map(
        ([key, {top, left, id, name, width, height}]) => {
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
    </StyledTarget>
  )
}

export default Target
