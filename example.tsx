import React from 'react'

type ButtonProps = {
  text: string
  onClick: () => void
}

export const Button = (props: ButtonProps) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)