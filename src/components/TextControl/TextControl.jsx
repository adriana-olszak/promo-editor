import React, {useState} from 'react'

import {StyledText, Fieldset, Label} from './styled'
import {generateId} from '../../helpers/dummyId'
import Radio from '../Radio'
import Input from '../Input'
import Button from '../Button'

const FontTypes = {
  ARIAL: 'Arial',
  OPEN_SANS: 'OpenSans',
  TIMES_NEW_ROMAN: 'Times New Roman',
}

const textDecorationTypes = {
  BOLD: 'bold',
  UNDERLINE: 'underline',
  ITALIC: 'italic',
  DEFAULT: 'initial',
}

const TextControl = ({onAdd}) => {
  const [inputValue, setInputValue] = useState('')
  const [fontFamilyValue, setFontFamilyValue] = useState(FontTypes.ARIAL)
  const [textDecorationValue, setTextDecorationValue] = useState(
    textDecorationTypes.DEFAULT
  )
  const [colorValue, setColorValue] = useState('#222222')

  const setInitialState = () => {
    setInputValue('')
    setFontFamilyValue(FontTypes.ARIAL)
    setTextDecorationValue(textDecorationTypes.DEFAULT)
    setColorValue('#222222')
  }

  const onTextAdd = () => {
    onAdd({
      id: generateId(),
      text: inputValue,
      fontFamily: fontFamilyValue,
      textDecoration: textDecorationValue,
      color: colorValue,
    })
    setInitialState()
  }
  return (
    <StyledText gridArea="text" headerText="Add texts">
      <Input
        placeholder="Put you text in here"
        onChange={e => setInputValue(e.target.value)}
        value={inputValue}
      />
      <Fieldset>
        <Label>{'FontFamily'}</Label>
        {Object.values(FontTypes).map(fontFamily => (
          <Radio
            isChecked={fontFamily === fontFamilyValue}
            label={fontFamily}
            name="fontFamily"
            onChange={e => setFontFamilyValue(e.target.value)}
            value={fontFamily}
          />
        ))}
      </Fieldset>
      <Fieldset>
        <Label>{'Text Decoration'}</Label>
        {Object.values(textDecorationTypes).map(textDecoration => (
          <Radio
            isChecked={textDecoration === textDecorationValue}
            label={textDecoration}
            name="textDecoration"
            onChange={e => setTextDecorationValue(e.target.value)}
            value={textDecoration}
          />
        ))}
      </Fieldset>
      <Input
        label="Select font color"
        onChange={e => setColorValue(e.target.value)}
        type="color"
        name="fontColor"
        value={colorValue}
      />
      <Button onClick={onTextAdd} buttonText="Add text" />
    </StyledText>
  )
}

TextControl.propTypes = {}

TextControl.defaultProps = {}

export default TextControl
