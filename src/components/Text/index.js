import {connect} from 'react-redux'
import Text from './Text'

import {textAdded} from '../../redux/actions'

const mapDispatchToProps = {
  onAdd: textAdded,
}

export default connect(
  null,
  mapDispatchToProps
)(Text)
