import {connect} from 'react-redux'
import Target from './Target'

import {logoDropped, logoMoved} from '../../redux/actions'

const mapStateToProps = ({present: {logo, background}}) => ({
  logos: logo,
  backgroundSrc: background,
})

const mapDispatchToProps = {
  onDrop: logoDropped,
  onMove: logoMoved,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Target)
