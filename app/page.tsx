'use client'
import React, { useEffect } from "react"
import Layout from "../src/components/Layout"
import Icecast from "../src/components/Icecast"
import StyledLink from "../src/components/StyledLink"
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'CASFOUST',
}

const IndexPage = () => {
  useEffect(()=>{document.title="CASFOUST";},[])
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
