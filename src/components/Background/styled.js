import styled from 'styled-components'

export const Img = styled.div`
  width: 270px;
  height: 150px;
  background-image: url(${props => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;

  & ~ & {
    margin-top: 12px;
  }
`
