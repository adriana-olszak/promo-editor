import styled from 'styled-components'
import Card, {CardBody} from '../Card'
import {StyledLogo} from './Logo'

export const LogosCard = styled(Card)`
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
