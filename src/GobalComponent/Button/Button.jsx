import React from "react";

function Button(props) {
  var attribute =
    props.attribute;
  return <button className={attribute}>{props.text}</button>;
}

export default Button;
