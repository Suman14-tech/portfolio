import React from "react";
import "./Button.css";

function Button({ text, href }) {
  return <a href={href} className="btn">{text}</a>;
}

export default Button;
