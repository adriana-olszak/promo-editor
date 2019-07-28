import styled, {css} from 'styled-components'

export const StyledButton = styled.button`
  box-sizing: border-box;
  text-decoration: none;
  border-radius: 20px;
  text-align: center;
  cursor: pointer;
  color: white;
  border: none;
  background-image: linear-gradient(
    -225deg,
    #ac32e4 0%,
    #7918f2 48%,
    #4801ff 100%
  );
  padding: 8px 12px;
  margin: 4px;
  font-size: 16px;
  ${props =>
    props.block &&
    css`
      width: 100%;
    `}

  ${props =>
    props.type === 'danger' &&
    css`
      background: #d50b0b;
    `}
  
   ${props =>
     props.disabled &&
     css`
       background: #eee;
       color: #222;
     `}

`
