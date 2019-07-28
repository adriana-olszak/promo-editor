import styled, {css} from 'styled-components'

export const StyledInput = styled.input`
  ${props =>
    props.type !== 'color' &&
    css`
      border-radius: 20px;
      border: none;
      border-bottom: 2px solid #8f24ec;
      border-top: 1px solid #fff3f3;
      background-color: #f0eaea;
      padding: 8px 12px;
      font-size: 16px;
      color: #222;
      width: 100%;
      box-sizing: border-box;
    `}
`

export const StyledLabel = styled.label``
