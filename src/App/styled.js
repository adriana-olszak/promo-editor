import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato|Open+Sans&display=swap');

  * {
    box-sizing: border-box;
    font-family: 'Lato';
  }
  
  body {
    color: #222;
    padding: 12px;
    display: flex;
    justify-content: center;
    font-family: 'Lato';
    background-image: radial-gradient(73% 147%, #EADFDF 59%, #ECE2DF 100%), radial-gradient(91% 146%, rgba(255,255,255,0.50) 47%, rgba(0,0,0,0.50) 100%);
    background-blend-mode: screen;
  }
`

export const AppWrapper = styled.div`
  display: grid;
  grid-template-areas:
    'background target logos'
    'background target text'
    'background target controls';
  grid-template-rows: auto;
  grid-template-columns: 300px minmax(auto, 448px) 370px;
  grid-gap: 24px;
`
