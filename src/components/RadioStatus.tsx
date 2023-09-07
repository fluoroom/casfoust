'use client'

import React from "react"

const RadioStatus = props => {
  var message
  var statustyle
  switch (props.status) {
    default:
      message = "Loading..."
      break
    case 0:
      message = "streaming offline"
      statustyle = "bold p" + props.status
      break
    case 1:
      message = "streaming live in a few minutes!"
      statustyle = "bold p" + props.status
      break
    case 2:
      message = "streaming online"
      statustyle = "bold p" + props.status
      break
  }
  return (
    <>
      <style jsx>
        {`
          p {
            line-height: 2em;
            text-align: center;
          }
          span {
            border-radius: 3px;
            padding: 0.3em 0.8em;
          }
          .bold {
            font-weight: bold;
          }
          .p0 {
            background-color: #e00;
            color: white;
          }
          .p1 {
            background-color: #ee0;
            color: black;
          }
          .p2 {
            background-color: #00cc00;
            color: white;
          }
        `}
      </style>
      <p>
        <span className={statustyle} id="status">
          {message}
        </span>
      </p>
    </>
  )
}

export default RadioStatus
