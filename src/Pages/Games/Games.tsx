import React from 'react'
import './Games.css'
import { gameList } from '../../Data/gameList'
import { Link } from 'react-router-dom'

export default function Games() {
  return (
    <main className='gamelist-main'>
      <h1>Liste des jeux</h1>
      <ul>
        {gameList.map((item, index) => (
          <li key={`${item.name}-${index}`}>
            <Link to={`./${item.name}`}>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
