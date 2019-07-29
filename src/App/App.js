import React from 'react'
import {Provider} from 'react-redux'
import {DndProvider} from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import Background from '../components/Background'
import Controls from '../components/Controls'
import Target from '../components/Target'
import Logos from '../components/Logos'
import Text from '../components/TextControl'
import configureStore from '../redux/configureStore'

import {GlobalStyle, AppWrapper} from './styled'

const App = () => (
  <Provider store={configureStore()}>
    <DndProvider backend={HTML5Backend}>
      <GlobalStyle />
      <AppWrapper>
        <Background />
        <Target />
        <Controls />
        <Logos />
        <Text />
      </AppWrapper>
    </DndProvider>
  </Provider>
)

export default App
