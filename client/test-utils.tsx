// // @vitest-environment jsdom

// import { afterEach, beforeEach, expect } from 'vitest'
// import { cleanup, render } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
// import {
//   Route,
//   RouterProvider,
//   createMemoryRouter,
//   createRoutesFromElements,
// } from 'react-router-dom'
// import '@testing-library/jest-dom/vitest'
// import * as matchers from '@testing-library/jest-dom/matchers'
// import routes from './routes'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// // afterEach(cleanup)
// beforeEach(cleanup)
// expect.extend(matchers)

// export function renderComponent(component: JSX.Element) {
//   const user = userEvent.setup()
//   return { user, ...render(component) }
// }

// export function renderWithRouter(location = '/') {
//   const router = createMemoryRouter(routes, {
//     initialEntries: [location],
//   })

//   userEvent.setup()
//   const user = userEvent.setup()
//   const queryClient = new QueryClient()
//   return {
//     user,
//     ...render(
//       <QueryClientProvider client={queryClient}>
//         <RouterProvider router={router} />
//       </QueryClientProvider>,
//     ),
//   }
// }

// export function renderWithQuery(component: JSX.Element) {
//   const router = createMemoryRouter(
//     createRoutesFromElements(<Route path="/" element={component} />),
//     {
//       initialEntries: ['/'],
//     },
//   )

//   const user = userEvent.setup()
//   const queryClient = new QueryClient()
//   return {
//     user,
//     ...render(
//       <QueryClientProvider client={queryClient}>
//         <RouterProvider router={router} />
//       </QueryClientProvider>,
//     ),
//   }
// }

import { afterEach } from 'vitest'
import { cleanup, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  Route,
  RouterProvider,
  createMemoryRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import '@testing-library/jest-dom/vitest'

import routes from './routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

afterEach(cleanup)

export function renderComponent(component: JSX.Element) {
  const user = userEvent.setup()
  return { user, ...render(component) }
}

export function renderWithRouter(location = '/') {
  const router = createMemoryRouter(routes, {
    initialEntries: [location],
  })

  userEvent.setup()
  return render(<RouterProvider router={router} />)
}
// FIRST RENDER WITH QUERY FUNCTION
// export function renderWithQuery(component: JSX.Element) {
//   userEvent.setup()
//   const queryClient = new QueryClient()

//   return {
//     user: userEvent,
//     ...render(
//       <QueryClientProvider client={queryClient}>
//         <RouterProvider
//           router={createMemoryRouter(
//             createRoutesFromElements(<Route path="/" element={component} />),
//           )}
//         />
//       </QueryClientProvider>,
//     ),
//   }
// }

export function renderWithQuery(component: JSX.Element) {
  const router = createMemoryRouter(
    createRoutesFromElements(<Route path="/" element={component} />),
    {
      initialEntries: ['/'],
    },
  )

  const user = userEvent.setup()
  const queryClient = new QueryClient({
    defaultOptions: {
      // NOTE: if we don't set this, then react-query will
      // retry requests during tests which may hide errors
      // when the test times out
      queries: { retry: false },
    },
  })

  return {
    user,
    ...render(
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>,
    ),
  }
}
