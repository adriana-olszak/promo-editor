import React from 'react'
import {CardBody, Header, StyledCard, Title} from './styled'

const Card = ({children, headerText, className, hNumber = 'h2', gridArea}) => (
  <StyledCard className={className} gridArea={gridArea}>
    <Header>
      <Title as={hNumber}>{headerText}</Title>
    </Header>
    <CardBody>{children}</CardBody>
  </StyledCard>
)

export default Card
