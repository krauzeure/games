import { render, screen } from '@testing-library/react'
import Card from './Card'
import Goretzka from '../../../../Data/Images/Memory/Goretzka.svg'

describe('should render correctly', () => {
  test('should get the alt text passed in props', () => {
    render(<Card image={Goretzka} alt={'Goretzka'} hidden={true} disabled={false} number={1} turnCard={jest.fn()}/>)
    const card = screen.getByAltText('Goretzka')
    expect(card).toBeInTheDocument()
  })

  test('should be hidden', () => {
    render(<Card image={Goretzka} alt={'Goretzka'} hidden={true} disabled={false} number={1} turnCard={jest.fn()}/>)
    const div = screen.getByTestId("card-cover")
    expect(div).toHaveClass('card-cover')
  })
})
