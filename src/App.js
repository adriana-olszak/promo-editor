import React from 'react'

import {Background, Controls, Editor, Logo, Text} from './components/organisms'
import {Button} from './components/atoms'

function App() {
  return (
    <div>
      <Button buttonTxt={'Button'} type={'default'} />
      <Background />
      <Editor />
      <Controls />
      <Logo />
      <Text />
    </div>
  )
}

export default App
