import React from "react";

const Nav = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="https://casfoust.bandcamp.com/">
              <img src="/images/bandcamp.svg" alt="bandcamp" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCE1JtEGA3TmXKcMDfJbLtvA">
              <img src="/images/youtube.svg" alt="youtube" />
            </a>
          </li>
          <li>
            <a href="https://soundcloud.com/casfoust">
              <img src="/images/sc.png" alt="soundcloud" />
            </a>
          </li>
          <li>
            <a href="https://instagram.com/casfoust">
              <img src="/images/instagram.svg" alt="instagram" />
            </a>
          </li>
          <li>
            <a href="https://github.com/fluoroom">
              <img src="/images/github.svg" alt="github" />
            </a>
          </li>
        </ul>
      </nav>
      <style jsx>
        {`
          a > img {
            width: 40px;
            transition: 75ms all;
            transform: scale(1);
          }
          a {
            margin: 0px 20px;
          }
          a:hover img {
            transform: scale(0.9);
          }
          ul {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          ul > li {
            display: inline-block;
          }
        `}
      </style>
    </>
  );
};
export default Nav;
