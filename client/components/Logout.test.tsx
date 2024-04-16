// @vitest-environment jsdom

import { describe, it, expect } from 'vitest'

import { renderComponent } from '../test-utils'
import LogoutButton from './Logout'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { Auth0Provider } from '@auth0/auth0-react'

describe('Logout Button', () => {
  it('should render a log out button', async () => {
    const screen = renderComponent(<LogoutButton />)
    const logout = screen.getByRole('button', { name: /log out/i })
    expect(logout).toBeTruthy()
  })
})
