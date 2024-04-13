import { renderComponent } from '../test-utils'
import { describe, it, expect } from 'vitest'
import Login from './Login'

describe('Login Button', () => {
  it('should render a log in button', async () => {
    const { getByRole } = renderComponent(<Login />)
    const login = getByRole('button', { name: /log in/i })
    expect(login).toBeInTheDocument()
  })
})
