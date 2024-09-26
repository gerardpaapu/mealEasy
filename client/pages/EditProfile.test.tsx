//@vitest-environment jsdom

import { renderWithQuery } from '../test-utils'
import nock from 'nock'
import { beforeAll, describe, expect, it, vi } from 'vitest'
import EditProfile from './EditProfile'
import { useAuth0 } from '@auth0/auth0-react'

beforeAll(() => {
  // NOTE: this is optional, but it makes debugging tests much easier
  nock.disableNetConnect()
})

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

describe('edit profile', () => {
  it('should render a loading indicator', async () => {
    // ARRANGE
    //'nock' an http request network call
    const scope = nock('http://localhost')
      // this url neeeds the vi.mocked user sub from above.
      .get('/api/v1/users/fake-userid')
      //Fake the get request and reply
      .reply(200, {
        auth0_id: 'auth0|648fd1c873375442becf2c60',
        email: 'katie@example.com',
        nickname: 'Katie',
        first_name: 'Katie',
        last_name: 'Davies',
      })

    //ACT
    //render app
    const screen = renderWithQuery(<EditProfile />)

    // For asynchronous queries use "findBy" rather than "GetBy"
    const loading = await screen.findByText(/Retrieving your data/i)

    //ASSERT
    expect(scope.isDone()).toBe(true)
    expect(loading).toBeVisible()
  })

  it('should render a Edit user Form', async () => {
    // ARRANGE
    //'nock' an http request network call
    const scope = nock('http://localhost')
      // this url neeeds the vi.mocked user sub from above.
      .get('/api/v1/users/fake-userid')
      //Fake the get request and reply
      .reply(200, {
        auth0_id: 'auth0|648fd1c873375442becf2c60',
        email: 'katie@example.com',
        nickname: 'Katie',
        first_name: 'Katie',
        last_name: 'Davies',
      })
    //render app
    const screen = renderWithQuery(<EditProfile />)

    //ACT
    const header = await screen.findByRole('heading', { level: 1 })
    // ASSERTION
    expect(header).toHaveTextContent('Edit Your Profile')
    // Check if nock is done
    expect(scope.isDone()).toBe(true)
  })

  it('should render an error message when something goes wrong', async () => {
    // ARRANGE
    //'nock' an http request network call
    const scope = nock('http://localhost')
      // this url neeeds the vi.mocked user sub from above.
      .get('/api/v1/users/fake-userid')
      //Fake the get request and reply
      .reply(500)
    // render app
    const screen = renderWithQuery(<EditProfile />)
    //ACT
    // async - use findBy queries:
    const error = await screen.findByText(
      'There was an error retrieving your profile',
    )
    // ASSERTION
    expect(error).toBeInTheDocument()
    expect(scope.isDone()).toBe(true)
  })
})
