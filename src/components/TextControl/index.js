import {connect} from 'react-redux'
import TextControl from './TextControl'
import {textAdded} from '../../redux/actions'

export {default as Text} from './Text'

const mapDispatchToProps = {
  onAdd: textAdded,
}

export default connect(
  null,
  mapDispatchToProps
)(TextControl)
