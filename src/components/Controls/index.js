import {connect} from 'react-redux'
import Controls from './Controls'

import {undo, redo, resetStore} from '../../redux/actions'

const mapStateToProps = ({past, future, present: {logo, background}}) => ({
  logos: logo,
  backgroundSrc: background,
  isUndoDisabled: past.length === 0,
  isRedoDisabled: future.length === 0,
})

const mapDispatchToProps = {
  undo,
  redo,
  resetStore,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls)
