import './Card.css' 

export default function Card(props: {image: string, alt: string, hidden: boolean, disabled: boolean}) {

  return (
    <li className={`card-container`}>
        <div className={props.hidden ? `card-cover ${props.alt}` : `card-cover-shown ${props.alt}`} data-testid="card-cover"></div>
        <img src={props.image} alt={props.alt} />
    </li>
  )
}
