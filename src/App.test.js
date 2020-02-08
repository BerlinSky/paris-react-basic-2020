import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/dom'

import App from './App'

describe('App', () => {
  it('Renders without error', () => {
    render(<App />)
  })
})
