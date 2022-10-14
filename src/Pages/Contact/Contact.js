import React from "react";
import "./Contact.css";
import { BsBriefcaseFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Img from "../../Images/Yo2.jpeg"

export const Contact = () => {
  return (
    <div className="container-contact">
      <h1 className="h1-contact">Joaquin Galdeano</h1>
      <div className="box-contact">
        <img src={Img} className="img-contact"/>
      <a href="https://www.linkedin.com/in/joaquin-galdeano-174281209/">
        <AiFillLinkedin className="ico-contact" />
      </a>
      <a href="https://github.com/JoaGal">
        <AiFillGithub className="ico-contact" />
      </a>
      <a href="https://briefcase-joagal.vercel.app/">
        <BsBriefcaseFill className="ico-contact" />
      </a>
      <p>React Front-end Developer</p>
      </div>
      
    </div>
  );
};
