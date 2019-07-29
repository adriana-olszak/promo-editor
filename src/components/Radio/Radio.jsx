import React from 'react'
import PropTypes from 'prop-types'

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

Radio.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Radio
