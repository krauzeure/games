import React from 'react'
import './Games.css'
import { gameList } from '../../Data/gameList'

export default function Games() {
  return (
    <main className='gamelist-main'>
      <h1>Liste des jeux</h1>
      <ul>
      {gameList.map(item => (
        <li key={item.name}>{item.name}</li>
      ))}
      </ul>
    </main>
  )
}
