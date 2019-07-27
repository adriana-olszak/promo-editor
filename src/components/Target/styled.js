import styled, {css} from 'styled-components'
import emptyBackground from '../../assets/empty_background.png'

export const Canvas = styled.div`
  width: 400px;
  height: 400px;
  border: 1px solid grey;
  position: relative;
  background-image: url(${props => props.backgroundSrc || emptyBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  ${props =>
    props.isOver
      ? css`
          opacity: 0.7;
        `
      : css`
          opacity: 1;
        `}
`
