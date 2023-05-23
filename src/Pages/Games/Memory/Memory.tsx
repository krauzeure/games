import './Memory.css'
import MemoryBoard from '../../../Components/Games/Memory/MemoryBoard/MemoryBoard'
import { memoryCards } from '../../../Data/memoryCards';
import { useState } from 'react';
import gameBoardContext from '../../../Context/Memory/gameBoardContext';

export default function Memory() {

  const [gameBoard, setGameBoard] = useState(memoryCards);

  return (
    // @ts-ignore
    <gameBoardContext.Provider value={{gameBoard, setGameBoard}}>
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
    </gameBoardContext.Provider>
  )
}
