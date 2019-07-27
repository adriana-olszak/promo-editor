import {connect} from 'react-redux'
import Controls from './Controls'

import {undo, redo, resetStore} from '../../redux/actions'

const mapStateToProps = ({present: {logo, background}}) => ({
  logos: logo,
  backgroundSrc: background,
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
