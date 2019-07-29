import React from 'react'

import Logo, {LogoTypes} from './Logo'
import {LogosCard} from './styled'

const Logos = () => (
  <LogosCard gridArea={'logos'} headerText="Select Logo">
    {Object.keys(LogoTypes).map(key => (
      <Logo key={key} type={key} />
    ))}
  </LogosCard>
)

export default Logos
