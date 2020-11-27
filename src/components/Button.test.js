import React from 'react'
import Button from './Button'
import { render, fireEvent } from '@testing-library/react'

describe('Button', () => {
  it('should render text', () => {
    const { getByText } = render(<Button text="Attack" />)

    expect(getByText(/Attack/)).toBeTruthy()
  })

  it('should fire click handler', () => {
    const onClick = jest.fn()

    const { getByText } = render(<Button text="Attack" onClick={onClick} />)

    fireEvent.click(getByText(/Attack/))

    expect(onClick).toHaveBeenCalled()
  })

  it('can be disabled', () => {
    const onClick = jest.fn()

    const { getByText } = render(
      <Button text="Attack" onClick={onClick} disabled />,
    )

    fireEvent.click(getByText(/Attack/))

    expect(onClick).toHaveBeenCalledTimes(0)
  })
})
