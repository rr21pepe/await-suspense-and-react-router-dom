import { createBrowserRouter } from 'react-router-dom'

import Error from './Error'
import Note from './Note'
import Root from './Root'
import Home from './Home'
import Notes from './Notes'

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
        path: 'notes',
        element: <Notes />,
      },
      {
        path: 'notes/:id',
        element: <Note />,
      },
    ],
  },
])
