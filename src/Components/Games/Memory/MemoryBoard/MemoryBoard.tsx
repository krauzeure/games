import { memoryImages } from '../../../../Data/memoryImages'
import './MemoryBoard.css'

export default function MemoryBoard() {
  return (
    <ul className='memory-board'>
      {memoryImages.map((item, index) => (
        <li key={index}>
          <img src={item} alt='memory' />
        </li>
      ))}
    </ul>
  )
}
