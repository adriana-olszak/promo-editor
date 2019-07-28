import React, {useEffect, useState} from 'react'
import {StyledContexMenuContainer, ContextMenu} from './styled'
import Button from "../Button";

export const ContextMenuContainer = ({
  children,
  onTextRemove,
  onLogoRemove,
}) => {
  const containerRef = React.createRef()
  const contextMenu = React.createRef()

  const [isMenuVisible, setMenuVisibility] = useState(false)
  const [target, setTarget] = useState(null)
  const [menuPosition, setPosition] = useState({})

  const onOutsideClick = () => {
    setMenuVisibility(false)
  }

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
  }, [target])

  const onContextMenu = e => {
    e.persist()

    if (e.target.dataset.id) {
      console.log('onContextMenu')
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
        <ContextMenu ref={contextMenu} {...menuPosition}>
          <Button buttonText="X" type="danger" onClick={onRemoveClick} />
        </ContextMenu>
      )}
    </StyledContexMenuContainer>
  )
}
