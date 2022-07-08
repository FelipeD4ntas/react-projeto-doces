import React from "react";
import './style.css';

function Footer(props) {
  return(
    <footer className={props.classFooter}>
        {props.children}
    </footer>
  );
};

export default Footer;