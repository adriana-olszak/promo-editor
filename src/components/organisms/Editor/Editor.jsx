import React from 'react'

import {StyledEditor} from './styled'

export default class Editor extends React.PureComponent {
  constructor(props) {
    super(props)
    this.canvas = React.createRef()
  }

  render() {
    return (
      <StyledEditor>
        <canvas ref={this.canvas} width={400} height={400}></canvas>
      </StyledEditor>
    )
  }
}

Editor.propTypes = {}

Editor.defaultProps = {}
