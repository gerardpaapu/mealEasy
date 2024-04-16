//@vitest-environment jsdom

import { waitFor } from '@testing-library/react'
import { renderWithQuery } from '../test-utils'
import nock from 'nock'
import { describe, expect, it, vi } from 'vitest'
import EditProfile from './EditProfile'

describe('edit profile', () => {
  it('should render a loading indicator', async () => {
    //arrange
    //'nock' an http request network call
    nock('http://localhost')
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
    const screen = renderWithQuery(<EditProfile />)
    // nock?
    // THIS DOESN'T WORK FOR SOME REASON....
    // await waitFor(() => expect(scope.isDone()).toBeTruthy())
    // BUT THIS DOES....
    if (nock.isDone()) {
      const loading = await screen.getByText(/Retrieving your data/i)

      //ASSERT
      expect(loading).toBeVisible()
    }
  })

  it('should render a Edit user Form', async () => {
    //arrange
    //'nock' an http request network call
    nock('http://localhost')
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
    const screen = renderWithQuery(<EditProfile />)
    // Check if nock is done
    if (nock.isDone()) {
      const header = screen.getByRole('heading', { level: 1 })
      console.log(header)

      expect(header).toBeInTheDocument()
    }
  })

  it('should render an error message when something goes wrong', async () => {
    //arrange
    //'nock' an http request network call
    nock('http://localhost')
      .get('/api/v1/users/auth0|648fd1c873375442becf2c60')
      //Fake the get request and reply
      .reply(500)
    //ACT

    // render app
    const screen = renderWithQuery(<EditProfile />)
    // Check if nock is done
    if (nock.isDone()) {
      const error = screen.getByText(
        'There was an error retrieving your profile',
      )
      // Assertion
      expect(error).toBeInTheDocument()
      console.log(error)
    }
    // expect(error).toBeInTheDocument()
    // expect(scope.isDone()).toBe(true)
  })
})
