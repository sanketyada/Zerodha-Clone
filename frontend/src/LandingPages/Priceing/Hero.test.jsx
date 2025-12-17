import { render, screen } from '@testing-library/react'
import Hero from './Hero'

// Mock OpenAccout component
vi.mock('../OpenAccount', () => ({
  default: () => <div data-testid="open-account">Open Account</div>,
}))

describe('Hero Component', () => {
  test('renders main headings', () => {
    render(<Hero />)

    expect(screen.getByText('Charges')).toBeInTheDocument()
    expect(
      screen.getByText('List of all charges and taxes')
    ).toBeInTheDocument()
  })

  test('renders all charge sections', () => {
    render(<Hero />)

    expect(screen.getByText('Free equity delivery')).toBeInTheDocument()
    expect(screen.getByText('Intraday and F&O trades')).toBeInTheDocument()
    expect(screen.getByText('Free direct MF')).toBeInTheDocument()
  })

  test('renders descriptions correctly', () => {
    render(<Hero />)

    expect(
      screen.getByText(/equity delivery investments/i)
    ).toBeInTheDocument()

    expect(
      screen.getByText(/intraday trades across equity/i)
    ).toBeInTheDocument()

    expect(
      screen.getByText(/direct mutual fund investments/i)
    ).toBeInTheDocument()
  })

  test('renders OpenAccount component', () => {
    render(<Hero />)

    expect(screen.getByTestId('open-account')).toBeInTheDocument()
  })

//   test('renders three images', () => {
//     render(<Hero />)

//     const images = screen.getAllByRole('img')
//     expect(images).toHaveLength(3)
//   })
})
