import styled, {css, keyframes} from 'styled-components'

export const slide = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`
export const shine = css`
  position: relative;
  overflow: hidden;

  &:after {
    content: '';
    top: 0;
    transform: translateX(100%);
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    animation: ${slide} 1s infinite;

    background: -ms-linear-gradient(
      left,
      rgba(255, 255, 255, 0) 0%,
      rgba(247, 247, 247, 0.8) 50%,
      rgba(128, 186, 232, 0) 99%,
      rgba(125, 185, 232, 0) 100%
    ); /* IE10+ */
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(247, 247, 247, 0.8) 50%,
      rgba(128, 186, 232, 0) 99%,
      rgba(125, 185, 232, 0) 100%
    );
  }
`

export const BackgroundCard = styled.div`
  width: auto;
  height: 110px;
  background-image: url(${props => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;

  & ~ & {
    margin-top: 12px;
  }

  ${props =>
    props.isLoading &&
    css`
      ${shine}
      background-image: unset;
      background-color: #ebebf0;
    `}
`
