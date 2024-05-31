import React from 'react'

function RedButton(props) {
 var attribute = props.attribute + " bg-gradient-to-t from-red-400 to-red-600 rounded button-shadow "; ;
  return (
    <a className={attribute} href={props.href}>
      {props.text}
    </a>
  )
}

export default RedButton
