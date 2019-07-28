import {connect} from 'react-redux'
import Target from './Target'

import {
  logoDropped,
  logoMoved,
  logoRemoved,
  textMoved,
  textRemoved,
} from '../../redux/actions'

const mapStateToProps = ({present: {logo, text, background}}) => ({
  logos: logo,
  texts: text,
  backgroundSrc: background,
})

const mapDispatchToProps = {
  onLogoDrop: logoDropped,
  onLogoMove: logoMoved,
  onTextMove: textMoved,
  onLogoRemove: logoRemoved,
  onTextRemove: textRemoved,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Target)
