import React, {useState} from 'react'

import {StyledText} from './styled'
import {generateId} from '../../helpers/dummyId'
import Card from '../Card'

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

const Text = ({onAdd}) => {
  const [inputValue, setInputValue] = useState('')
  const [fontFamilyValue, setFontFamilyValue] = useState(FontTypes.ARIAL)
  const [textDecorationValue, settextDecorationValue] = useState(
    textDecorationTypes.DEFAULT
  )
  const [colorValue, setColorValue] = useState('#222222')

  const onTextAdd = () => {
    onAdd({
      id: generateId(),
      text: inputValue,
      fontFamily: fontFamilyValue,
      textDecoration: textDecorationValue,
      color: colorValue,
    })
    // TODO: move to another function
    setInputValue('')
    setFontFamilyValue(FontTypes.ARIAL)
    settextDecorationValue(textDecorationTypes.DEFAULT)
    setColorValue('#222222')
  }
  return (
    <Card gridArea="text" headerText="Add texts">
      <label>
        <input
          onChange={e => setInputValue(e.target.value)}
          value={inputValue}
        />
      </label>
      {
        // TODO: move to component
      }
      {Object.values(FontTypes).map(fontFamily => (
        <label key={fontFamily}>
          <input
            checked={fontFamily === fontFamilyValue}
            name="fontFamily"
            onChange={e => setFontFamilyValue(e.target.value)}
            type="radio"
            value={fontFamily}
          />
          {fontFamily}
        </label>
      ))}
      {Object.values(textDecorationTypes).map(textDecoration => (
        <label key={textDecoration}>
          <input
            checked={textDecoration === textDecorationValue}
            name="textDecoration"
            onChange={e => settextDecorationValue(e.target.value)}
            type="radio"
            value={textDecoration}
          />
          {textDecoration}
        </label>
      ))}
      <label>
        {'Select font color'}
        <input
          onChange={e => setColorValue(e.target.value)}
          type="color"
          name="fontColor"
          value={colorValue}
        />
      </label>
      <button onClick={onTextAdd}>Add text</button>
    </Card>
  )
}

Text.propTypes = {}

Text.defaultProps = {}

export default Text
