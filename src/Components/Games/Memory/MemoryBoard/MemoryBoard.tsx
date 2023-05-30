import { memoryCards } from '../../../../Data/memoryCards';
import Card from '../Card/Card';
import './MemoryBoard.css'
import { useContext } from 'react';
import gameBoardContext from '../../../../Context/Memory/gameBoardContext';

// Creating a function to shuffle our array
export const shuffleArray = (array:any) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

shuffleArray(memoryCards)

export default function MemoryBoard() {

  const gameBoard = useContext(gameBoardContext)
  const turnCard = (number: number) => {
    console.log(number)
  }
  // @ts-ignore
  console.log(gameBoard.gameBoard)

  return (
    <ul className='memory-board'>
      {memoryCards.map((item, index) => (
        <Card image={item.image} alt={item.name} key={`${index}-${item.name}`} hidden={item.isHidden} disabled={item.isDisabled} number={index} turnCard={turnCard}/>
      ))}
    </ul>
  )
}
