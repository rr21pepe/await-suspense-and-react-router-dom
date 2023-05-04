import { createBrowserRouter } from 'react-router-dom'

import Error from './Error'

export default createBrowserRouter([
  {
    path: '/',
    element: <h1>Inicio</h1>,
    errorElement: <Error />,
  },
])
