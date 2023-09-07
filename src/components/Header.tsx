
import React from "react"
import styled from "styled-components"
import RgbSplitter from "./RgbSplitter"
import Nav from "./Nav"

const Title = styled.h1`
  font-family: pervitinadex;
  font-size: 3.5em;
  opacity: 1;
  margin-left: -0.35em;
  text-transform: uppercase;
  transition: opacity 100ms ease;
  overflow: visible;
  margin-bottom:.25em;
  &:hover {
    opacity: 0.95;
  }
`
const Description = styled.p`
  margin-bottom: 2em;
`

const Header = () => {
  
  return (
    <header>
      <Title>
        <a href="/">
          <RgbSplitter>CASFOUST</RgbSplitter>
        </a>
      </Title>
      <Description>dj (& dev & ph)</Description>
      <Nav />
    </header>
  )
}
export default Header
