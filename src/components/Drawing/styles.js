import styled from 'styled-components'

import { darken } from 'polished';


export const Intro = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #fff;

  button {
      background: #a02c2c;
      height: 20px;
      width: 326px;
      color: #fff;
      border: 0;
      overflow: hidden;
      /* margin-top: auto; */

      /* flex: 1; */
      align-items: center;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#a02c2c')};
      }
  }
  a {
  background: #fff;
  border: 1px solid #a02c2c;
  color: #000;
  width: 105px;
  padding: 2px;
  position: absolute;
  left: 400px;
  bottom: 500px;
  text-decoration: none;
  transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#fff')};
    }
}
`;

export const Botao = styled.div`

`
