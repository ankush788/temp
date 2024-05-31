import React from "react";

function Button(props) {
  var attribute =
    props.attribute;
  return (
    <a className={attribute} href="https://wa.me/+916363409869">
      {props.text}
    </a>
  );
}

export default Button;
