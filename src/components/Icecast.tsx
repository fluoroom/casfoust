"use client";

import React, { useState, useEffect } from "react";
import AudioPlayer from "./AudioPlayer";
import RadioStatus from "./RadioStatus";

const Icecast = () => {
  const stream = {
    host: 'http://phillippplein.ddns.net',
    port: 8443,
};
  const source = `${stream.host}:${stream.port}/stream`;
  const datasource = `${stream.host}:${stream.port}/status-json.xsl`;
  const [radiostatus, setradiostatus] = useState(0);

  useEffect(() => {
    function getradiodata() {
      fetch(datasource)
        .then((result) => result.json())
        .then((result) => {
          if (result.icestats.source.server_url == "casfoust.cf") {
            if (result.icestats.source) {
              if (radiostatus !== 2) {
                setradiostatus(2);
              }
            } else if (radiostatus !== 1) {
              setradiostatus(1);
            }
          } else if (radiostatus !== 0) {
            setradiostatus(0);
          }
        })
        .catch(() => {
          if (radiostatus !== 0) {
            setradiostatus(0);
          }
        });
    }
    getradiodata();
    const interval = setInterval(() => getradiodata(), 5000);
    return () => {
      clearInterval(interval);
    };
  }, [radiostatus]);

  return (
    <>
      <style jsx>
        {`
          .icecast {
            margin-top: 1em;
            margin-bottom:2em;
          }
        `}
      </style>
      <div className="icecast">
        <RadioStatus status={radiostatus} />
        <AudioPlayer title="casfoust" status={radiostatus} src={source} />
      </div>
    </>
  );
};


export default Icecast;
