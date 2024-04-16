//@vitest-environment jsdom

import {
  screen,
  waitFor,
  waitForElementToBeRemoved,
  within,
} from '@testing-library/react'
import { renderWithQuery } from '../test-utils'
import nock from 'nock'
import { afterEach, describe, expect, it } from 'vitest'
import EditProfile from './EditProfile'

// afterEach(() => {
//   nock.cleanAll()
// })

describe('edit profile', () => {
  it('should render a loading indicator', async () => {
    //arrange
    //'nock' an http request network call
    const scope = nock('http://localhost')
      .get('/api/v1/users/auth0|648fd1c873375442becf2c60')
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
    renderWithQuery(<EditProfile />)

    console.log(screen)
    //async wait screen
    const loading = await waitFor(() =>
      screen.getByText('Retrieving your data'),
    )

    //ASSERT
    expect(loading).toBeVisible()
    // await waitFor(async () => {
    //   expect(scope.isDone()).toBeTruthy()
    // })
  })

  it('should render a Edit user Form', async () => {
    //arrange
    //'nock' an http request network call
    const scope = nock('http://localhost')
      .get('/api/v1/users/auth0|648fd1c873375442becf2c60')
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
    renderWithQuery(<EditProfile />)

    //Check user does exist
    if (nock.isDone()) {
      const header = screen.getByRole('heading', { name: 'Edit Your Profile' })
      console.log(header)

      expect(header).toBeInTheDocument()
    }
  })
})
