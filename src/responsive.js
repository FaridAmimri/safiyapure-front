/** @format */

import { css } from 'styled-components'

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 426px) {
      ${props}
    }
  `
}

export const tablet = (props) => {
  return css`
    @media screen and (min-width: 426px) and (max-width: 1028px) {
      ${props}
    }
  `
}
