import styled from 'styled-components'
import Card, {CardBody} from '../Card'
import Input from '../Input'
import {StyledInput} from '../Input/styled'

export const StyledText = styled(Card)`
  ${CardBody} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`

export const Fieldset = styled.fieldset`
  width: auto;
  display: inline-flex;
  border: none;
  margin: 12px 0;
  padding: 0;

  label ~ label {
    margin-top: 6px;
  }
`
export const Label = styled.label`
  width: 100%;
  font-weight: bold;
  margin-bottom: 8px;
`
export const ColorInput = styled(Input)`
  width: 70%;
  font-weight: bold;
  margin-bottom: 8px;
  display: flex;
  align-items: center;

  ${StyledInput} {
    margin-left: 12px;
    border: none;
    height: 30px;
  }
`
