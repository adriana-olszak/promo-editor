import React, {useState} from 'react'

import {StyledText, Fieldset, Label, ColorInput} from './styled'
import {generateId} from '../../helpers/dummyId'
import Radio from '../Radio'
import Input from '../Input'
import Button from '../Button'
import PropTypes from 'prop-types'
import Checkbox from '../Checkbox'

const FontTypes = {
  ARIAL: 'Arial',
  OPEN_SANS: 'OpenSans',
  TIMES_NEW_ROMAN: 'Times New Roman',
}

const textDecorationTypes = {
  BOLD: 'bold',
  UNDERLINE: 'underline',
  ITALIC: 'italic',
}

const TextControl = ({onAdd}) => {
  const [inputValue, setInputValue] = useState('')
  const [fontFamilyValue, setFontFamilyValue] = useState(FontTypes.ARIAL)
  const [textDecorationValue, setTextDecorationValue] = useState([])
  const [colorValue, setColorValue] = useState('#222222')

  const setInitialState = () => {
    setInputValue('')
    setFontFamilyValue(FontTypes.ARIAL)
    setTextDecorationValue([])
    setColorValue('#222222')
  }

  const onTextAdd = () => {
    onAdd({
      id: generateId(),
      text: inputValue || 'black 20px',
      fontFamily: fontFamilyValue,
      textDecoration: textDecorationValue,
      color: colorValue,
    })
    setInitialState()
  }
  return (
    <StyledText gridArea="text" headerText="Add texts">
      <Input
        onChange={e => setInputValue(e.target.value)}
        placeholder="Text in here"
        style={{width: '100%'}}
        value={inputValue}
      />
      <Fieldset>
        <Label>{'Font family'}</Label>
        {Object.values(FontTypes).map(fontFamily => (
          <Radio
            isChecked={fontFamily === fontFamilyValue}
            key={fontFamily}
            label={fontFamily}
            name="fontFamily"
            onChange={e => setFontFamilyValue(e.target.value)}
            value={fontFamily}
          />
        ))}
      </Fieldset>
      <Fieldset>
        <Label>{'Text decoration'}</Label>
        <Checkbox
          label={'Text decoration'}
          name="textDecoration"
          onChange={setTextDecorationValue}
          options={textDecorationTypes}
          selected={textDecorationValue}
        />
      </Fieldset>
      <ColorInput
        label="Select font color"
        name="fontColor"
        onChange={e => setColorValue(e.target.value)}
        type="color"
        value={colorValue}
      />
      <Button buttonText="Add text" onClick={onTextAdd} />
    </StyledText>
  )
}

TextControl.propTypes = {
  onAdd: PropTypes.func.isRequired,
}

TextControl.defaultProps = {}

export default TextControl
