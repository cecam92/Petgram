import { keyframes, css } from 'styled-components'

const fadeInKeyFrames = keyframes`
from{
  opacity:0;
  filter:blur(5px);
}
to{
opacity:1;
filter:blur(0);
}`
export const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${fadeInKeyFrames} ${type};
  `
