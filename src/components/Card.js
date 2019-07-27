import React from 'react'
import styled, {css} from 'styled-components'

export const StyledCard = styled.div`
  grid-area: ${props => props.gridArea};
  border-radius: 20px;
  border: 1px solid lightgray;
  background-color: white;
`
export const CardBody = styled.div`
  margin-top: -20px;
  border-radius: 20px;
  background-color: white;
  padding: 12px;
`

export const Header = styled.header`
  background: dodgerblue;
  padding: 12px;
  padding-bottom: 30px;
  color: white;
  font-family: sans-serif;
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
  border-radius: 10px 10px 0 0;
`

export const Title = styled.header`
  font-family: sans-serif;
  margin: 0;
`

export default ({children, headerText, hNumber = 'h2', gridArea}) => (
  <StyledCard gridArea={gridArea}>
    <Header>
      <Title as={hNumber}>{headerText}</Title>
    </Header>
    <CardBody>{children}</CardBody>
  </StyledCard>
)
