import styled from 'styled-components'
import Card, {CardBody} from '../Card'
import {StyledLabel} from '../Input/styled'

export const StyledText = styled(Card)`
  ${CardBody} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  ${StyledLabel} {
    width: 100%;
  }
`

export const Fieldset = styled.fieldset`
  width: auto;
  display: inline-flex;
  border: none;
`
export const Label = styled.label`
  width: 100%;
  font-weight: bold;
  margin-bottom: 8px;
`
