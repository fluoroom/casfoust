"use client";
import React from "react";
import styled from "styled-components";

const LinkBlock = styled.div`
  display: block;
`;

const StyledLink = (props) => {
  return (
    <LinkBlock>
      <style jsx>{`a{color: rgba(255, 255, 255, 0.8);
    display: inline-block;
    padding: 0.5em 1em;
    margin-bottom: 1em;
    border: 1px dashed #ccc;
    background-color: rgba(0, 0, 0, 0.5);}
    a:hover {
      text-decoration: underline;
      color: rgba(255, 255, 255, 1);
    }`}</style>
      <a href={props.to}>
        {props.children}
      </a>
    </LinkBlock>
  );
};

export default StyledLink;
