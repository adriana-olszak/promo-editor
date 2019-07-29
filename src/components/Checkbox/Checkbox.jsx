import React from 'react'
import PropTypes from 'prop-types'

import {StyledCheckbox, Input, Label} from './styled'

const Checkbox = ({selected, options, name, onChange}) => {
  console.log(options, 'options')
  console.log(selected, 'selected')
  console.log(name, 'name')
  console.log(onChange, 'onChange')
  const toggleOption = option => {
    selected.includes(option)
      ? onChange(selected.filter(selectedOption => selectedOption !== option))
      : onChange([...selected, option])
  }

  return (
    <>
      {Object.entries(options).map(([key, value]) => {
        const isSelected = selected.includes(key)

        return (
          <StyledCheckbox key={key}>
            <Input
              checked={isSelected}
              id={key}
              name={name}
              onChange={() => toggleOption(key)}
              type="checkbox"
              value={key}
            />
            <Label htmlFor={key}>
              <span />
              {value}
            </Label>
          </StyledCheckbox>
        )
      })}
    </>
  )
}
Checkbox.propTypes = {
  selected: PropTypes.array.isRequired,
  options: PropTypes.array.isRequired,
  onAnswerUpdate: PropTypes.func.isRequired,
}

export default Checkbox
