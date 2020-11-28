import React from 'react'
import { render } from '@testing-library/react'

import Die from './Die'

describe('Die', () => {
  it('should render the correct side based on the number it receives', () => {
    const { container: six } = render(<Die side={6} />)

    expect(six.firstChild).toMatchInlineSnapshot(`
      <div
        class="face"
      >
        <span
          class="pip"
        />
        <span
          class="pip"
        />
        <span
          class="pip"
        />
        <span
          class="pip"
        />
        <span
          class="pip"
        />
        <span
          class="pip"
        />
      </div>
    `)

    const { container: three } = render(<Die side={3} />)

    expect(three.firstChild).toMatchInlineSnapshot(`
      <div
        class="face"
      >
        <span
          class="pip"
        />
        <span
          class="pip"
        />
        <span
          class="pip"
        />
      </div>
    `)
  })
})
