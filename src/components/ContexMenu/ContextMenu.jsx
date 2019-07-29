import React, {useEffect, useState, createRef} from 'react'
import {StyledContexMenuContainer, ContextMenu} from './styled'
import Button from '../Button'
import PropTypes from 'prop-types'

const ContextMenuContainer = ({children, onTextRemove, onLogoRemove}) => {
  const containerRef = createRef()
  const [isMenuVisible, setMenuVisibility] = useState(false)
  const [menuPosition, setPosition] = useState({})
  const [target, setTarget] = useState(null)

  const onOutsideClick = () => {
    setMenuVisibility(false)
  }

  useEffect(() => {
    window.addEventListener('click', onOutsideClick)
    return () => window.removeEventListener('click', onOutsideClick)
  })

  useEffect(() => {
    if (target) {
      const {
        top: containerTop,
        left: containerLeft,
      } = containerRef.current.getBoundingClientRect()
      const {
        top: targetTop,
        left: targetLeft,
        height,
      } = target.getBoundingClientRect()

      setPosition({
        top: targetTop - containerTop + height,
        left: targetLeft - containerLeft,
      })
    }
  }, [target, containerRef])

  const onContextMenu = e => {
    e.persist()

    if (e.target.dataset.id) {
      e.preventDefault()
      setMenuVisibility(true)
      setTarget(e.target)
      return
    }
    setMenuVisibility(false)
  }

  const onRemoveClick = () => {
    const {id, type} = target.dataset
    type === 'TEXT' ? onTextRemove(id) : onLogoRemove(id)
  }

  return (
    <StyledContexMenuContainer
      onClick={onOutsideClick}
      onContextMenu={onContextMenu}
      ref={containerRef}
    >
      {children}
      {isMenuVisible && (
        <ContextMenu {...menuPosition}>
          <Button buttonText="X" onClick={onRemoveClick} type="danger" />
        </ContextMenu>
      )}
    </StyledContexMenuContainer>
  )
}

ContextMenuContainer.propTypes = {
  children: PropTypes.element,
  onLogoRemove: PropTypes.func.isRequired,
  onTextRemove: PropTypes.func.isRequired,
}

export default ContextMenuContainer
