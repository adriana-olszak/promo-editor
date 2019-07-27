import React from 'react'
import {Provider} from 'react-redux'
import {DndProvider} from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import styled from 'styled-components'

import Background from './components/Background'
import Controls from './components/Controls'
import Target from './components/Target'
import Logos from './components/Logos'
import Text from './components/Text'

import configureStore from './redux/configureStore'
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato|Open+Sans&display=swap');

  body {
    color: #222;
    padding: 12px;
    display: flex;
    justify-content: center;
    font-family: 'Lato';
    //background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
    background-image: radial-gradient(73% 147%, #EADFDF 59%, #ECE2DF 100%), radial-gradient(91% 146%, rgba(255,255,255,0.50) 47%, rgba(0,0,0,0.50) 100%);
 background-blend-mode: screen;
  }
`
const AppWrapper = styled.div`
  display: grid;
  grid-template-areas:
    'background target logos'
    'background target text'
    'background target controls';
  grid-template-rows: auto;
  grid-template-columns: 300px 430px 450px;
  grid-gap: 24px;
`

function App() {
  return (
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
}

export default App