import React from 'react'

import Logo, {LogoTypes, StyledLogo} from './Logo'
import styled from 'styled-components'
import Card, {CardBody} from '../Card'

const LogosCard = styled(Card)`
  ${CardBody} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  ${StyledLogo} {
    position: initial;
    top: unset;
    left: unset;
    width: 70px;
    height: 70px;
  }
`

const Logos = () => (
  <LogosCard gridArea={'logos'} headerText="Select Logo">
    {Object.keys(LogoTypes).map(key => (
      <Logo type={key} key={key} />
    ))}
  </LogosCard>
)

export default Logos
