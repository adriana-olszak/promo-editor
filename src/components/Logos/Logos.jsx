import React from 'react'

import Logo, {StyledLogo} from './Logo'
import styled from 'styled-components'
import Card, {CardBody} from '../Card'

export const LogoTypes = {
  LogoA: 'LogoA',
  LogoB: 'LogoB',
  LogoC: 'LogoC',
}

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
