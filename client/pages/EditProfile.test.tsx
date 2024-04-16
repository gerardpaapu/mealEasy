//@vitest-environment jsdom

import { renderWithQuery } from '../test-utils'
import nock from 'nock'
import { beforeAll, describe, expect, it, vi } from 'vitest'
import EditProfile from './EditProfile'
import { useAuth0 } from '@auth0/auth0-react'

vi.mock('@auth0/auth0-react')

beforeAll(() => {
  // NOTE: this is optional, but it makes debugging tests much easier
  nock.disableNetConnect()
})

// NOTE: These components use auth so we're going to
// have to mock out the auth hooks
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
    //arrange

    // 'nock' an http request network call
    const scope = nock('http://localhost')
      // NOTE: this user id is set up in the
      // mocked out `useAuth0` result
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
    const loading = await screen.findByText(/Retrieving your data/i)
    expect(scope.isDone()).toBe(true)
    //ASSERT
    expect(loading).toBeVisible()
  })

  it('should render a Edit user Form', async () => {
    //arrange
    //'nock' an http request network call
    const scope = nock('http://localhost')
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
    // NOTE: use `await screen.find...` to wait for the elements
    // you expect to render
    const header = await screen.findByRole('heading', { level: 1 })
    // NOTE: ideally you would look for some of the values from
    // your nocked response to be rendered here, but the only ones I
    // could find were placeholder texts
    expect(header).toHaveTextContent('Edit Your Profile')

    expect(scope.isDone()).toBe(true)
    // NOTE: I had to fix your label to get this selector to work
    // you'll want to check the others
    expect(await screen.findByLabelText('Nickname:')).toBeVisible()
  })

  it('should render an error message when something goes wrong', async () => {
    //arrange
    //'nock' an http request network call
    const scope = nock('http://localhost')
      .get('/api/v1/users/fake-userid')
      //Fake the get request and reply
      .reply(500)
    //ACT

    // render app
    const screen = renderWithQuery(<EditProfile />)
    // NOTE: don't wait for the nock to be done, wait for something
    // the user can see and then _assert_ that the nock is done
    const error = await screen.findByText(
      'There was an error retrieving your profile',
    )

    // Assertion
    expect(error).toBeInTheDocument()
    expect(scope.isDone()).toBe(true)
  })
})
