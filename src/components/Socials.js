import React from "react";

const Socials = ({facebook, linkedin, whatsapp, github, galeria}) => {
  return (
    <div className="socials">
      <ul>
        <li>
          <a href={facebook} target="_blank" rel="noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href={linkedin} target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li>
          <a href={whatsapp} target="_blank" rel="noreferrer">
              <i className="fab fa-whatsapp"></i>
          </a>
        </li>
        <li>
          <a href={github} target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a href={galeria} target="_blank" rel="noreferrer">
            <i className="fas fa-images"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
