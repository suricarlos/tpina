import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;
  border-bottom: 3px dotted #fff;

  img {
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;
  padding: 10px 0 0 0;

  &:hover {
    opacity: 0.7;
  }
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;
  padding: 0 0 5px 0;
  &:hover {
    opacity: 0.7;
  }
`;
