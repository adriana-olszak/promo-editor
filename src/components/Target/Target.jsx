import React, {useRef} from 'react'
import {useDrop} from 'react-dnd'

import Logo, {LogoTypes} from '../Logos/Logo'
import {generateId} from '../../helpers/dummyId'
import {downloadImage} from '../../helpers/download'
import Button from '../Button'
import Card from '../Card'

import {StyledCanvas, OnboardingText} from './styled'
import {Text} from '../TextControl'
import {ContextMenu, ContextMenuContainer} from '../ContexMenu/ContextMenu'
import PropTypes from 'prop-types'

const Target = ({
  onLogoDrop,
  onLogoMove,
  onTextMove,
  onLogoRemove,
  onTextRemove,
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
      <Card gridArea={'target'} headerText="Select Background">
        <ContextMenuContainer
          onLogoRemove={onLogoRemove}
          onTextRemove={onTextRemove}
        >
          <div ref={downloadRef}>
            <StyledCanvas
              backgroundSrc={backgroundSrc}
              isOver={isOver}
              ref={drop}
            >
              {Object.values(logos).map(
                ({id, left, top, name, height, width}) => (
                  <Logo
                    height={height}
                    id={id}
                    key={id}
                    left={left}
                    top={top}
                    type={name}
                    width={width}
                  />
                )
              )}
              {Object.values(texts).map(
                ({id, left, top, fontFamily, textDecoration, text, color}) => (
                  <Text
                    color={color}
                    fontFamily={fontFamily}
                    id={id}
                    key={id}
                    left={left}
                    text={text}
                    textDecoration={textDecoration}
                    top={top}
                  />
                )
              )}
            </StyledCanvas>
          </div>
        </ContextMenuContainer>
        <Button
          block={true}
          buttonText="Download"
          onClick={() => downloadImage(downloadRef.current)}
          style={{marginTop: '22px'}}
        />
        <OnboardingText>
          Welcome to image editor. In the left panel you can search for best
          background and delete it. On the right you can find predefined
          logotypes, text configurator and control panel on which you can redo
          and undo up to 5 actions. We save your progress automatically.
        </OnboardingText>
      </Card>
    </>
  )
}

Target.propTypes = {
  onLogoDrop: PropTypes.func.isRequired,
  onLogoMove: PropTypes.func.isRequired,
  onTextMove: PropTypes.func.isRequired,
  logos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
      top: PropTypes.number.isRequired,
      left: PropTypes.number.isRequired,
    })
  ),
  texts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      fontFamily: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      textDecoration: PropTypes.string.isRequired,
      top: PropTypes.number.isRequired,
      left: PropTypes.number.isRequired,
    })
  ),
  backgroundSrc: PropTypes.string.isRequired,
}

export default Target
