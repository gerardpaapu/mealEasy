//@vitest-environment jsdom

import {
  screen,
  waitFor,
  waitForElementToBeRemoved,
  within,
} from '@testing-library/react'
import { renderComponent } from '../test-utils'
import nock from 'nock'
import { describe, it } from 'vitest'

describe('edit profile', () => {
  it.skip('should render a loading indicator', () => {})
  it.skip('should render a user', () => {})

  it.skip('should render an error message when something goes wrong', () => {})
})
