import React from 'react'
import PropTypes from 'prop-types'

import {StyledCheckbox, Input, Label} from './styled'

const Checkbox = ({selected, options, name, onChange}) => {
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
  options: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
}

export default Checkbox
