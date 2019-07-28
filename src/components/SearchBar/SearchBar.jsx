import React, {useState} from 'react'

import styled from 'styled-components'
import Button from '../Button'
import Input from '../Input'

const StyledSearchBar = styled.div`
  display: flex;
  margin-top: 12px;
`

export default ({onClick}) => {
  const [inputValue, setInputValue] = useState('')
  const onSearchClick = () => onClick(inputValue.replace(' ', ','))

  return (
    <StyledSearchBar>
      <Input
        onChange={e => setInputValue(e.target.value)}
        placeholder="Light, brigth etc."
        value={inputValue}
      />
      <Button onClick={onSearchClick} buttonText="Search" />
    </StyledSearchBar>
  )
}
