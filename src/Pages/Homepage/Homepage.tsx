import './Homepage.css'
import Memory from './Memory.svg'

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
          <img src={Memory} alt='memory' />
          <img src={Memory} alt='memory' />
          <img src={Memory} alt='memory' />
        </div>
      </section>
      <div className='link'>Découvrir les jeux</div>
    </main>
  )
}
