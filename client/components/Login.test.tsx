// @vitest-environment jsdom

import { describe, it, expect } from 'vitest'
import Login from './Login'

import { renderComponent } from '../test-utils'

describe('Login Button', () => {
  it('should render a log in button', async () => {
    const screen = renderComponent(<Login />)
    const login = screen.getByRole('button', { name: /log in/i })
    expect(login).toBeTruthy()
  })
})
