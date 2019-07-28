import React from 'react'
import PropTypes from 'prop-types'

import Button from '../Button'
import Card from '../Card'

const Controls = ({undo, redo, resetStore, isUndoDisabled, isRedoDisabled}) => (
  <Card headerText="Control center">
    <Button buttonText="Undo" disabled={isUndoDisabled} onClick={undo} />
    <Button buttonText="Redo" disabled={isRedoDisabled} onClick={redo} />
    <Button buttonText="Clear" onClick={resetStore} type="danger" />
  </Card>
)

Controls.propTypes = {
  undo: PropTypes.func.isRequired,
  redo: PropTypes.func.isRequired,
  resetStore: PropTypes.func.isRequired,
  isUndoDisabled: PropTypes.bool.isRequired,
  isRedoDisabled: PropTypes.bool.isRequired,
}

export default Controls
