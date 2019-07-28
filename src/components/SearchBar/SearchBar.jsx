import React, {useState} from 'react'
import styled from 'styled-components'

import Button from '../Button'
import Input from '../Input'
import PropTypes from 'prop-types'

const StyledSearchBar = styled.div`
  display: flex;
  margin-top: 12px;
`

const SearchBar = ({onClick}) => {
  const [inputValue, setInputValue] = useState('')
  const onSearchClick = () => onClick(inputValue.replace(' ', ','))

  return (
    <StyledSearchBar>
      <Input
        onChange={e => setInputValue(e.target.value)}
        placeholder="Light, brigth etc."
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
