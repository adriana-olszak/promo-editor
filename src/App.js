import React from 'react'

import {Background, Controls, Target, Logo, Text} from './components/organisms'
import {Button} from './components/atoms'
import {DndProvider} from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import {Provider} from 'react-redux'
import configureStore from './redux/configureStore'
import styled from 'styled-components'
import Logos from "./components/Logos";

const AppWrapper = styled.div`
  display: grid;
  grid-template-areas:
    'background target logos'
    'background target text'
    'background target controls';
  grid-template-rows: auto;
  grid-template-columns: 300px 430px 450px;
  grid-gap: 12px;
`

function App() {
  return (
    <Provider store={configureStore({})}>
      <DndProvider backend={HTML5Backend}>
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
}

export default App
