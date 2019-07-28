import React from 'react'

import {StyledRadio} from './styled'
const Radio = ({value, label, name, isChecked, onChange}) => {
  return (
    <label>
      <input
        checked={isChecked}
        id={value}
        name={name}
        onChange={onChange}
        type="radio"
        value={value}
      />
      {label}
    </label>
  )
}

Radio.propTypes = {}

Radio.defaultProps = {}

export default Radio
