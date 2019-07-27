import React, {useState} from 'react'

import styled from 'styled-components'

const StyledSearchBar = styled.div`
  display: flex;
  input {
  }

  button {
  }
`

export default ({onClick}) => {
  const [inputValue, setInputValue] = useState('')
  const onSearchClick = () => onClick(inputValue.replace(' ', ','))

  return (
    <StyledSearchBar>
      <input onChange={e => setInputValue(e.target.value)} value={inputValue} />
      <button onClick={onSearchClick}>{'Search'}</button>
    </StyledSearchBar>
  )
}
