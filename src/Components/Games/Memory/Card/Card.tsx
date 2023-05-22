import React from 'react'

export default function Card(props: {image: string, alt: string, hidden: boolean, number: number, disabled: boolean}) {

  return (
    <li className={`card-container`}>
        <div className={props.hidden ? `card-cover ${props.alt}` : `card-cover-shown ${props.alt}`}></div>
        <img src={props.image} alt={props.alt} />
    </li>
  )
}
