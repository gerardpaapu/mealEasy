// @vitest-environment jsdom

import { describe, it, expect } from 'vitest'

import React from 'react'
import { renderComponent } from '../test-utils'
import { BrowserRouter } from 'react-router-dom'
import Header from './Header'
import userEvent from '@testing-library/user-event'

describe('navbar', () => {
  it('links to profile page', async () => {
    const { getByAltText } = renderComponent(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    )

    const profileImage = getByAltText('User')
    await userEvent.click(profileImage)

    expect(window.location.pathname).toBe('/profile')
  })

  it('links to home page', async () => {
    const { getByAltText } = renderComponent(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    )

    const logo = getByAltText('logo')
    await userEvent.click(logo)

    expect(window.location.pathname).toBe('/home')
  })
})
