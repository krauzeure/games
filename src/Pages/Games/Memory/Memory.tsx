import './Memory.css'
import MemoryBoard from '../../../Components/Games/Memory/MemoryBoard/MemoryBoard'

export default function Memory() {
  return (
    <main className='memory-main'>
      <section>
        <h1>Memory</h1>
        <div className='memory-explanation'>
          <p>Cliquez sur "Démarrer" et trouvez tous les duos de cartes pour gagner !</p>
          <button>Démarrer</button>
        </div>
      </section>
      <MemoryBoard />
    </main>
  )
}
