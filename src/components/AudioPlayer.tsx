'use client'

import React from "react"

function IcecastPlayer({ title, status, src }) {
  const handleOnPlay = () => {
    if ("mediaSession" in navigator) {
      navigator.mediaSession.metadata = new window.MediaMetadata({
        title,
        artist: "casfoust",
      })
    }
  }

  return status !== 2 ? null : (
    <div className="player">
      <audio
        controls
        autoPlay
        content-type="audio/aac"
        x-webkit-airplay
        title={title}
        src={src}
        onPlay={handleOnPlay}
      ></audio>
    </div>
  )
}

export default IcecastPlayer
