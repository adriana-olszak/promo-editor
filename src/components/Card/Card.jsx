import React from 'react'
import PropTypes from 'prop-types'

import {CardBody, Header, StyledCard, Title} from './styled'

const Card = ({children, headerText, className, gridArea}) => (
  <StyledCard className={className} gridArea={gridArea}>
    <Header>
      <Title>{headerText}</Title>
    </Header>
    <CardBody>{children}</CardBody>
  </StyledCard>
)

Card.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  headerText: PropTypes.string,
  className: PropTypes.string,
  gridArea: PropTypes.string.isRequired,
}

export default Card
