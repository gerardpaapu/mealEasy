//@vitest-environment jsdom

import { describe, it, expect, vi } from 'vitest'

import Profile from './Profile'
import { renderComponent, renderWithQuery } from '../test-utils'
import nock from 'nock'
import { useAuth0 } from '@auth0/auth0-react'

// Because your <EditProfile/> component is using auth0, you need to mock it out, and then use the mocked 'user: sub' in your nock url.
vi.mock('@auth0/auth0-react')
vi.mocked(useAuth0).mockImplementation(
  () =>
    ({
      user: { sub: 'fake-userid' },
      isAuthenticated: true,
      getAccessTokenSilently: async () => {
        return 'fake-token'
      },
      // I know this is ugly, but it's an
      // ugly world sometimes. We can look away
      // from the ugliness but that's never going
      // to change the world.
      //    -- Angela Lansbury
    }) as unknown as ReturnType<typeof useAuth0>,
)

describe('profile page', () => {
  it('shows edit button', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/users/fake-userid')
      .reply(200, {
        auth0_id: 'auth0|648fd1c873375442becf2c60',
        email: 'katie@example.com',
        nickname: 'Katie',
        first_name: 'Katie',
        last_name: 'Davies',
      })
    const screen = renderWithQuery(<Profile />)
    // if (nock.isDone()) {
    const button = await screen.findByRole('button', { name: 'Edit Profile' })
    expect(button).toBeTruthy()
  })
})
