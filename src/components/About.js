import React from "react";
import Links from "./Links";

function About({ bio, About, linkedin, github }) {

  return (
    <div id="about">
      <h2>{About}</h2>
      {!bio || bio === "" ? null : <p>{bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links
        linkedin={linkedin}
        github={github}
      > </Links>
    </div >
  );
}

export default About;
