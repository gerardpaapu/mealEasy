// @vitest-environment jsdom

import { describe, it, expect } from 'vitest'
import Landing from './Landing'
import { renderComponent } from '../test-utils'

describe('Landing Page', () => {
  it('should render recipe image', async () => {
    const screen = renderComponent(<Landing />)
    const image = screen.getByAltText('recipe book')
    expect(image).toBeTruthy()
  })

  it('should render log', async () => {
    const screen = renderComponent(<Landing />)
    const signup = screen.getByAltText('MealEasy Logo')
    expect(signup).toBeTruthy()
  })
})
