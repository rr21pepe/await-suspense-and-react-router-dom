import { createBrowserRouter } from 'react-router-dom'

import Error from './Error'
import Note from './Note'
import Root from './Root'
import Home from './Home'
import Notes, { loader as notesLoader } from './Notes'
import Albums, {
  loader as albumsLoader,
  Album,
  albumLoader,
  NewAlbum,
  createNewAlbum,
} from './Albums'

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
        loader: notesLoader,
      },
      {
        path: 'notes/:id',
        element: <Note />,
      },
      {
        path: 'albums',
        element: <Albums />,
        loader: albumsLoader,
      },
      {
        path: 'albums/new',
        element: <NewAlbum />,
        action: createNewAlbum,
      },
      {
        path: 'albums/:id',
        element: <Album />,
        loader: albumLoader,
      },
    ],
  },
])
