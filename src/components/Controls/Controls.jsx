import React from 'react'

import Button from '../Button'
import Card from '../Card'

const Controls = ({undo, redo, resetStore}) => {
  return (
    <Card headerText="Control center">
      <Button onClick={undo} buttonText="Undo" />
      <Button onClick={redo} buttonText="Redo" />
      <Button onClick={resetStore} buttonText="Clear saves" />
    </Card>
  )
}

Controls.propTypes = {}

Controls.defaultProps = {}

export default Controls
