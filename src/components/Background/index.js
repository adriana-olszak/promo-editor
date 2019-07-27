import {connect} from 'react-redux'
import Background from './Background'

import {backgroundSelected, backgroundRemoved} from '../../redux/actions'

const mapDispatchToProps = {
  onSelection: backgroundSelected,
  onRemoveClick: backgroundRemoved,
}

export default connect(
  null,
  mapDispatchToProps
)(Background)
