import './Homepage.css'
import Memory from './Memory.svg'
import { Link } from 'react-router-dom'

export default function Homepage() {
  return (
    <main className='homepage-main'>
      <h1>Jeux en ligne</h1>
      <p>
        Venez découvrir nos mini-jeux en ligne. Les jeux sont gratuits et sont accessibles sans
        inscription !
      </p>
      <section className='popular-games'>
        <h2>Nos jeux les plus populaires</h2>
        <div className='popular-games-block'>
          <Link to="/games"><img src={Memory} alt='memory' /></Link>
          <Link to="/games"><img src={Memory} alt='memory' /></Link>
          <Link to="/games"><img src={Memory} alt='memory' /></Link>
        </div>
      </section>
      <Link to="/games" className='link'>Découvrir tous les jeux</Link>
    </main>
  )
}
