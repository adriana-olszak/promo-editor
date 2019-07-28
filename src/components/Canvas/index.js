import {connect} from 'react-redux'
import Canvas from './Canvas'

import {logoDropped, logoMoved, textMoved} from '../../redux/actions'

const mapStateToProps = ({present: {logo, text, background}}) => ({
  logos: logo,
  texts: text,
  backgroundSrc: background,
})

const mapDispatchToProps = {
  onLogoDrop: logoDropped,
  onLogoMove: logoMoved,
  onTextMove: textMoved,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Canvas)
