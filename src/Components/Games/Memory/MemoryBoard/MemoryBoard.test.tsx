import { render, screen } from '@testing-library/react';
import MemoryBoard from './MemoryBoard';

describe('should render correctly', () => {
    test('should render 16 cards', () => {
        render(<MemoryBoard/>)
        const cards = screen.getAllByRole('img')
        expect(cards.length).toBe(16)
    })
})