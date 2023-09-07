"uce client"
import React, { useEffect, useState } from "react";

const Player = ({ videoId, maxWidth }) => {
  const [dimensions, setDimensions] = useState({width:0,height:0});
  const src = `https://www.youtube.com/embed/${videoId}`;

  useEffect(() => {
    function calculateDimensions() {
      const innerWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      const width = Math.min(innerWidth, maxWidth);
      const height = width / 1.775;
      setDimensions({ width, height });
    }

    calculateDimensions(); // Initial calculation

    // Attach the event listener to handle window resizing
    window.addEventListener('resize', calculateDimensions);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('resize', calculateDimensions);
    };
  }, [maxWidth]);

  return (
    <>
      <style jsx>{`
        .iframe {
          margin-bottom: 1em;
        }
      `}</style>
      <iframe
        width={dimensions.width}
        height={dimensions.height}
        src={src}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="iframe"
        title="YouTube Video"
      ></iframe>
    </>
  );
};

export default Player;
