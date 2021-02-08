import {render} from '@testing-library/react'
import React from 'react'

import Button from '../Button'

test('renders', () => {
  const {container} = render(<Button />)
  expect(container.firstChild).toMatchInlineSnapshot(`
    .emotion-0 {
      padding: 30px;
      background-color: hotpink;
      font-size: 24px;
      border-radius: 4px;
    }

    .emotion-0:hover {
      color: white;
    }

    <div
      class="emotion-0"
    >
      Hover to change color.
      4
    </div>
  `)
})
