import React from 'react'

import {Background, Controls, Target, Logo, Text} from './components/organisms'
import {Button} from './components/atoms'
import {DndProvider} from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import {Provider} from 'react-redux'
import configureStore from './redux/configureStore'

function App() {
  return (
    <div>
      <Provider store={configureStore({})}>
        <DndProvider backend={HTML5Backend}>
          <Button buttonTxt={'Button'} type={'Target'} />
          <Background />
          <Target />
          <Controls />
          <Logo type={'LogoA'} />
          <Logo type={'LogoB'} />
          <Logo type={'LogoC'} />
          <Text />
        </DndProvider>
      </Provider>
    </div>
  )
}

export default App
