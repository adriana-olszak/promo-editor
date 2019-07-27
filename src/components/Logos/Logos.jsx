import React from 'react'

import Logo, {StyledLogo} from './Logo'
import styled from 'styled-components'
import {StyledCard} from '../Card'

export const LogoTypes = {
  LogoA: 'LogoA',
  LogoB: 'LogoB',
  LogoC: 'LogoC',
}

const LogosCard = styled(StyledCard)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  ${StyledLogo} {
    position: initial;
    top: unset;
    left: unset;
  }
`

const Logos = () => (
  <LogosCard gridArea={'logos'}>
    {Object.keys(LogoTypes).map(key => (
      <Logo type={key} key={key} />
    ))}
  </LogosCard>
)

export default Logos
