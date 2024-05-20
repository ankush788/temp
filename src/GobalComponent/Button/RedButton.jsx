import React from 'react'

function RedButton(props) {
 var attribute = props.attribute + " bg-gradient-to-t from-red-400 to-red-600 rounded button-shadow"; ;
  return (
    <button className={attribute}>
      {props.text}
    </button>
  )
}

export default RedButton
