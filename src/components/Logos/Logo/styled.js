import styled, {css} from 'styled-components'

export const StyledLogo = styled.img`
  position: absolute;
  cursor: move;
  top: ${props => props.top}px;
  left: ${props => props.left}px;

  ${props =>
    props.isDragging
      ? css`
          opacity: 0.4;
          cursor: default;
          border: 1px dashed gray;
          background: transparent;
          background-image: unset;
        `
      : css`
          cursor: move;
        `}
`
