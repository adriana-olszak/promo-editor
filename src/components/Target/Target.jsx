import React, {useRef} from 'react'
import {useDrop} from 'react-dnd'

import Logo, {LogoTypes} from '../Logos/Logo'
import {generateId} from '../../helpers/dummyId'
import {downloadImage} from '../../helpers/download'
import Button from '../Button'
import Card from '../Card'

import {Canvas} from './styled'

const Target = ({onDrop, onMove, logos, backgroundSrc}) => {
  const downloadRef = useRef(null)
  const [{isOver}, drop] = useDrop({
    accept: Object.keys(LogoTypes),
    drop(item, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset()
      const left = Math.round(item.left + delta.x)
      const top = Math.round(item.top + delta.y)

      if (item.id === null) {
        onDrop({...item, name: item.type, id: generateId(), left, top})
      } else {
        onMove({...item, top, left})
      }
      return undefined
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
    }),
  })

  return (
    <>
      <Card
        gridArea={'target'}
        headerText="Select Background"
        ref={downloadRef}
      >
        <Canvas isOver={isOver} ref={drop} backgroundSrc={backgroundSrc}>
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
        </Canvas>
        <Button
          onClick={() => downloadImage(downloadRef)}
          buttonText="Download"
        />
      </Card>
    </>
  )
}

export default Target
