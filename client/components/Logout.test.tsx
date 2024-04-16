// @vitest-environment jsdom

import { describe, it, expect } from 'vitest'

import { renderComponent } from '../test-utils'
import LogoutButton from './Logout'

describe('Logout Button', () => {
  it('should render a log out button', async () => {
    const screen = renderComponent(<LogoutButton />)
    const logout = screen.getByRole('button', { name: /log out/i })
    expect(logout).toBeTruthy()
  })
})
