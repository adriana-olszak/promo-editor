import styled from 'styled-components'

export const StyledContexMenuContainer = styled.div`
  position: relative;
`
export const ContextMenu = styled.div`
  position: absolute;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  background: white;
  width: auto;
  height: auto;
  border: 1px solid #eee;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  
`
