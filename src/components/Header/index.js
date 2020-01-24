import React from 'react'
import { Link } from 'react-router-dom'

import { GoRepoClone } from "react-icons/go"

import { Container, Logo } from './styles'

import logo from '../../assets/images/logo.svg'

export default function Header() {
  return (
    <Container>
      <Link to="/">
          <img src={logo} alt="TPina" />
      </Link>

      <Logo to="/">
        <GoRepoClone size={36} color="#FFF" />
      </Logo>
    </Container>
  );
}
