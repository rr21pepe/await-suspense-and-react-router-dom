import { createBrowserRouter } from 'react-router-dom'

import Error from './Error'
import Note from './Note'

export default createBrowserRouter([
  {
    path: '/',
    element: <h1>Inicio</h1>,
    errorElement: <Error />,
  },
  {
    path: 'notes/:id',
    element: <Note />,
  },
])
