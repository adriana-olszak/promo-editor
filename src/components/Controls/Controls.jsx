import React from 'react'

import Button from '../Button'
import Card from '../Card'

const Controls = ({undo, redo, resetStore, isUndoDisabled, isRedoDisabled}) => {
  return (
    <Card headerText="Control center">
      <Button disabled={isUndoDisabled} onClick={undo} buttonText="Undo" />
      <Button disabled={isRedoDisabled} onClick={redo} buttonText="Redo" />
      <Button onClick={resetStore} type="danger" buttonText="Clear" />
    </Card>
  )
}

Controls.propTypes = {}

Controls.defaultProps = {}

export default Controls
