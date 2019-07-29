import React, {useState} from 'react'
import PropTypes from 'prop-types'

import Button from '../Button'
import Input from '../Input'
import {StyledSearchBar} from './styled'

const SearchBar = ({onClick}) => {
  const [inputValue, setInputValue] = useState('')
  const onSearchClick = () => onClick(inputValue.replace(' ', ','))

  return (
    <StyledSearchBar>
      <Input
        onChange={e => setInputValue(e.target.value)}
        placeholder="Light, bright etc."
        value={inputValue}
      />
      <Button buttonText="Search" onClick={onSearchClick} />
    </StyledSearchBar>
  )
}

SearchBar.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default SearchBar
