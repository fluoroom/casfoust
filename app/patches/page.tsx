'use client'
import React from "react"
import Layout from "../../src/components/Layout"
import styled from "styled-components"
import Youtube from "../../src/components/YoutubeEmbed"

const Title = styled.h2`
  font-size: 2em;
  text-shadow: 0 0 7px black, 0 0 7px black, 0 0 7px black, 0 0 7px black;
  margin-top: -4.45em;
  margin-bottom: 3.7em;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 360px) {
    font-size: 1.8em;
    margin-top: -4.85em;
    margin-bottom: 2.7em;
    max-width: 90vw;
  }
  @media (min-width: 361px) and (max-width: 385px) {
    font-size: 1.9em;
    margin-top: -4.86em;
    margin-bottom: 2.7em;
    max-width: 90vw;
  }
  @media (min-width: 385px) and (max-width: 480px) {
    font-size: 2em;
    max-width: 85vw;
    margin-top: -5.05em;
    margin-bottom: 2.7em;
  }
`

const Patches = () => {
  const dt1 = new Date("February 1, 2017 03:24:00")
  const today = new Date()
  function diff_years(dt2, dt1) {
    var diff = (dt2.getTime() - dt1.getTime()) / 1000
    diff /= 60 * 60 * 24
    return Math.abs(Math.round(diff / 365.25))
  }
  const korgYears = diff_years(dt1, today)
  return (
    <Layout>
      <style jsx>{`
            .titleContainer{
                display:block;
                text-align:center;
            }
            .titleContainer img{
                max-width:400px;
            }
            .pay{
                opacity:0.85;
                border:1px dashed rgba(255,255,255,0);
                padding: 0.5em;
                max-width:250px;
            }
            .pay:hover{
                    opacity:1;
                    border:1px dashed rgba(255,255,255,0.5);
                }
            }
            a{
                text-decoration:underline;
            }
            a:hover{
                font-weight:bold;
            }
            .center-text{
                text-align:center;
            }
            #payBtns{
                display:flex;
                justify-content:space-around;
                align-items:center;
                flex-direction:columns;
                margin:2em 0 1em 0;
                width:100%;
            }
            @media(max-width:400px){
                .titleContainer img{
                    max-width:95vw;
                }
            }
            @media(max-width:450px){
                #payBtns{
                    display:block;
                    margin:0 0 0 0;
                }
            }
        `}</style>
      <section>
        <div className="titleContainer">
          <a
            href="https://www.korg.com/us/products/synthesizers/microkorg/"
            target="_blank"
          >
            <img src="/images/korg.png" />
          </a>
          <Title>Casfoust's microKORG patches!</Title>
        </div>
        <p>
          I've owned my microKORG for {korgYears} years now and produced a lot
          of all&#x2011;original patches, of which i've chosen the best ones and
          have put them in this awesome patch bank.
        </p>
        <Youtube videoId="HDdGfK8BiQ0" maxWidth="640" />
        <h3>Compatibility:</h3>
        <ul>
          <li>microKORG (classic)</li>
          <li>microKORG S</li>
          <li>microKORG Crystal</li>
          <li>KORG MS-2000 (and variants)</li>
        </ul>
        <p>
          <b>NOT COMPATIBLE WITH microKORG XL and XL+</b>
        </p>
        <h3>Available in:</h3>
        <ul>
          <li>
            <b>.PRG</b> files (microKORG Sound Editor for Windows)
          </li>
          <li>
            <b>.TXT</b> human-readable parameter recipes.
          </li>
        </ul>
        <p>
          <strong>Get all the 67 patches for only $10!</strong>
        </p>
        <p>PayPal not available for now.</p>
        <p>MercadoPago price is in ARS.<br></br>1USD = 730ARS.</p>
        <p>After payment you'll acces the ZIP file.</p>
        <div id="payBtns">
          <p className="center-text">
            <a href="https://mpago.la/23sL2Nx">
              <img src="/images/mp.png" className="pay" alt="MercadoPago" />
            </a>
          </p>
        </div>
        <p>
          In case of any problem with your purchase, please contact me{" "}
          <a href="mailto:nvialgiudici@gmail.com">here</a>.
        </p>
        <p>
          En caso de tener algún problema con tu compra, por favor contactame{" "}
          <a href="mailto:nvialgiudici@gmail.com">acá</a>.
        </p>
      </section>
    </Layout>
  )
}

export default Patches
