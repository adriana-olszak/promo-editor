import styled, {css} from 'styled-components'
const getTextDecoration = textDecorations =>
  textDecorations.reduce((acc, curr) => {
    switch (curr) {
      case 'BOLD':
        return acc + 'font-weight: bold;'
      case 'ITALIC':
        return acc + 'font-style: italic;'
      case 'UNDERLINE':
        return acc + 'text-decoration: underline;'
      default:
        return acc
    }
  }, '')

export const StyledText = styled.div`
  position: absolute;
  font-size: 20px;
  border: 1px dashed gray;
  cursor: move;
  
  ${({top, left, center}) =>
    center
      ? css`
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        `
      : css`
          top: ${top}px;
          left: ${left}px;
          transform: translate(-100%, -200%);
        `}
  
  color: ${props => props.color || 'black'};
  font-family: ${props => props.fontFamily || 'inherit'};

  ${props =>
    props.textDecoration.length && getTextDecoration(props.textDecoration)};

  ${props =>
    props.isDragging
      ? css`
          opacity: 0.4;
          cursor: default;
        `
      : css`
          cursor: move;
          border: none;
        `}
`
