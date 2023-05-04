import { createBrowserRouter } from 'react-router-dom'

import Error from './Error'
import Note from './Note'
import Root from './Root'
import Home from './Home'

export default createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'notes/:id',
        element: <Note />,
      },
    ],
  },
])
