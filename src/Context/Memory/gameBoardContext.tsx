import { createContext } from 'react';
import { memoryCards } from '../../Data/memoryCards';

const gameBoardContext = createContext(memoryCards);
export default gameBoardContext