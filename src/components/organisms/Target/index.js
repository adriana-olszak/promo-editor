import {connect} from 'react-redux'
import Target from './Target'

import {logoDropped, logoMoved} from '../../../redux/actions'

const mapStateToProps = ({logo}) => ({
  logos: logo,
})

const mapDispatchToProps = {
  onDrop: logoDropped,
  onMove: logoMoved,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Target)
