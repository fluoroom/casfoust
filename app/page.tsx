'use client'
import React from "react"
import Layout from "../src/components/Layout"
import Icecast from "../src/components/Icecast"
import StyledLink from "../src/components/StyledLink"

const IndexPage = () => {
  return (
    <Layout>
      <Icecast />
      <StyledLink to="/patches/">microKORG Patches!</StyledLink>
      <StyledLink to="https://fluoroom.github.io/playlist-2-text/">
        playlist to text converter!
      </StyledLink>
    </Layout>
  )
}

export default IndexPage