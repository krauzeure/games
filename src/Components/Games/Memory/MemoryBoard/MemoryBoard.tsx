import { memoryCards } from '../../../../Data/memoryCards';
import './MemoryBoard.css'

// Creating a function to shuffle our array
export const shuffleArray = (array:any) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

export default function MemoryBoard() {
  return (
    <ul className='memory-board'>
      {memoryCards.map((item, index) => (
        <li key={index}>
          <img src={item.image} alt='memory' />
        </li>
      ))}
    </ul>
  )
}
