// @vitest-environment jsdom

import { describe, it, expect } from 'vitest'

import React from 'react'
import { renderComponent } from '../test-utils'
import { BrowserRouter } from 'react-router-dom'
import Header from './Header'
import userEvent from '@testing-library/user-event'
import { getByRole } from '@testing-library/react'

describe('navbar', () => {
  it('links to profile page', async () => {
    const screen = renderComponent(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    )

    const profileImage = screen.getByRole('button')
    await userEvent.click(profileImage)

    const menu = screen.getByRole('link', { name: 'logo' })

    expect(menu).toBeTruthy()
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
