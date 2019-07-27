import styled, {css} from 'styled-components'

export const StyledLogo = styled.img`
  position: absolute;
  border: 1px dashed gray;
  padding: 0.5rem 1rem;
  cursor: move;
  top: ${props => props.top}px;
  left: ${props => props.left}px;

  ${props =>
    props.isDragging
      ? css`
          opacity: 0.4;
          cursor: default;
        `
      : css`
          cursor: move;
        `}
`
