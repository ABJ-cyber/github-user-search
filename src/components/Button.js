import React from 'react'

const Button = ({title, _callback, _className}) => {
  return (
    <button className={_className} onClick={_callback}>{title}</button>
  )
}

export default Button