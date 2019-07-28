import styled, {css} from 'styled-components'

export const StyledText = styled.div`
  position: absolute;
  border: 1px dashed gray;
  padding: 0.5rem 1rem;
  cursor: move;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  color: ${props => props.color || 'initial'};
  font-family: ${props => props.fontFamily || 'inherit'};
  
  ${props => {
    switch (props.textDecoration) {
      case 'bold':
        return css`
          font-weight: bold;
        `
      case 'italic':
        return css`
          font-style: italic;
        `
      case 'underline':
        return css`
          text-decoration: underline;
        `
    }
  }};

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
