import { render, screen } from '@testing-library/react';
import Memory from './Memory';

test('renders correctly', () => {
    render(<Memory />)
    const heading = screen.getByRole('heading', {name: "Memory", level: 1})
    const explanation = screen.getByText('Cliquez sur "Démarrer" et trouvez tous les duos de cartes pour gagner !')
    const button = screen.getByRole('button', {name: "Démarrer"})
    expect(heading).toBeInTheDocument()
    expect(explanation).toBeInTheDocument()
    expect(button).toBeInTheDocument()
})