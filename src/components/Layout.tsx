'use client'

import React from "react"
import styled from "styled-components"

import Header from "./Header"
import Footer from "./Footer"

import "./layout.css"

const Bg = styled.div`
z-index: -5;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-repeat: repeat;
    background-size: 500px;
    background-image: url('/images/bg.png');
    background-attachment: fixed;
`
const Layout = ({ children }) => (
  <>
    <Bg />
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)

export default Layout
