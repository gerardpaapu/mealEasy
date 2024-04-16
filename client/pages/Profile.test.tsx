//@vitest-environment jsdom

import { describe, it, expect } from 'vitest'

import Profile from './Profile'
import { renderComponent, renderWithQuery } from '../test-utils'
import nock from 'nock'

describe('profile page', () => {
  it('shows edit button', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/users/auth0|648fd1c873375442becf2c60')
      .reply(200, {
        auth0_id: 'auth0|648fd1c873375442becf2c60',
        email: 'katie@example.com',
        nickname: 'Katie',
        first_name: 'Katie',
        last_name: 'Davies',
      })
    const screen = renderWithQuery(<Profile />)
    if (nock.isDone()) {
      const button = screen.getByRole('button', { name: 'Edit Profile' })
      expect(button).toBeTruthy()
    }
  })
})
