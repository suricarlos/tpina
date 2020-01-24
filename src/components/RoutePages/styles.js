import styled from 'styled-components'

import { darken } from 'polished';

export const PageList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  /* margin-top: -48.9px; */
  margin: -46.9px 0 4px 0;

  button {
      background: #a02c2c;
      height: 30px;
      width: 340px;
      color: #fff;
      border: 0;
      overflow: hidden;
      margin-top: auto;
      flex: 1;
      align-items: center;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#a02c2c')};
      }

      span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
      flex: 1;
      text-align: center;
      }
  }
`;
