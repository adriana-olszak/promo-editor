import React, {useRef} from 'react'
import {useDrop} from 'react-dnd'

import Logo, {LogoTypes} from '../Logos/Logo'
import {generateId} from '../../helpers/dummyId'
import {downloadImage} from '../../helpers/download'
import Button from '../Button'
import Card from '../Card'

import {Canvas} from './styled'
import {Text} from '../TextControl'

const Target = ({
  onLogoDrop,
  onLogoMove,
  onTextDrop,
  onTextMove,
  logos,
  texts,
  backgroundSrc,
}) => {
  const downloadRef = useRef(null)
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
    <>
      <Card
        gridArea={'target'}
        headerText="Select Background"
        ref={downloadRef}
      >
        <Canvas isOver={isOver} ref={drop} backgroundSrc={backgroundSrc}>
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
            ([
              key,
              {id, left, top, fontFamily, textDecoration, text, color},
            ]) => {
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
        </Canvas>
        <Button
          buttonText="Download"
          onClick={() => downloadImage(downloadRef)}
        />
      </Card>
    </>
  )
}

export default Target
