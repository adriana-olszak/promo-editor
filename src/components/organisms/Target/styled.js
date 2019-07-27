import styled, {css} from 'styled-components'

export const StyledTarget = styled.div`
  width: 400px;
  height: 400px;
  border: 1px solid grey;
  background: red;
  position: relative;

  ${props =>
    props.isOver
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0.7;
        `}
`
