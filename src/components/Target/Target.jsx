import React, {useRef} from 'react'
import {useDrop} from 'react-dnd'

import Logo, {LogoTypes} from '../Logos/Logo'
import {generateId} from '../../helpers/dummyId'
import {downloadImage} from '../../helpers/download'
import Button from '../Button'
import Card from '../Card'

import {StyledCanvas, OnboardingText} from './styled'
import {Text} from '../TextControl'
import ContextMenuContainer from '../ContexMenu/ContextMenu'
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
  const targetWidth = 400
  const downloadRef = useRef(null)

  const handleText = ({item, x, y}) => {
    const left = Math.round(item.left + x - targetWidth)
    const top = Math.round(item.top + y)

    onTextMove({...item, top, left})
  }

  const handleLogo = ({item, x, y}) => {
    const left = Math.round(item.left + x - item.width - targetWidth)
    const top = Math.round(item.top + y - item.height)

    if (item.id === null) {
      onLogoDrop({...item, id: generateId(), left, top})
    } else {
      onLogoMove({...item, left, top})
    }
  }

  const [{isOver}, drop] = useDrop({
    accept: [...Object.keys(LogoTypes), 'TEXT'],
    drop(item, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset()

      if (item.type === 'TEXT') {
        handleText({item, ...delta})
      } else {
        handleLogo({item, ...delta})
      }

      return undefined
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
    }),
  })

  return (
    <Card gridArea={'target'} headerText="Select Background">
      <div ref={downloadRef}>
        <ContextMenuContainer
          onLogoRemove={onLogoRemove}
          onTextRemove={onTextRemove}
        >
          <StyledCanvas
            backgroundSrc={backgroundSrc}
            isOver={isOver}
            ref={drop}
          >
            {Object.values(logos).map(attrs => (
              <Logo {...attrs} key={attrs.id} />
            ))}
            {Object.values(texts).map(attrs => (
              <Text {...attrs} key={attrs.id} />
            ))}
          </StyledCanvas>
        </ContextMenuContainer>
      </div>
      <Button
        block={true}
        buttonText="Download"
        onClick={() => downloadImage(downloadRef.current)}
        style={{marginTop: '22px'}}
      />
      <OnboardingText>
        Welcome to image editor. In the left panel you can search for background
        and delete it via click on button. On the right you can find predefined
        logotypes, text configurator and control panel on which you can redo and
        undo up to 5 actions. We save your progress automatically.
      </OnboardingText>
    </Card>
  )
}

Target.propTypes = {
  onLogoDrop: PropTypes.func.isRequired,
  onLogoMove: PropTypes.func.isRequired,
  onTextMove: PropTypes.func.isRequired,
  onLogoRemove: PropTypes.func.isRequired,
  onTextRemove: PropTypes.func.isRequired,
  logos: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      // width: PropTypes.number.isRequired,
      // height: PropTypes.number.isRequired,
      top: PropTypes.number.isRequired,
      left: PropTypes.number.isRequired,
    })
  ),
  texts: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      fontFamily: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      textDecoration: PropTypes.arrayOf(PropTypes.string).isRequired,
      top: PropTypes.number.isRequired,
      left: PropTypes.number.isRequired,
    })
  ),
  backgroundSrc: PropTypes.string.isRequired,
}

export default Target
