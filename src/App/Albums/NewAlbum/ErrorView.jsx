import { Link } from 'react-router-dom'

import { NewAlbumNetworkError } from './action'
import NetworkErrorView from './NetworkErrorView'

export default function ErrorView({ error }) {
  if (error instanceof NewAlbumNetworkError) return <NetworkErrorView />

  return (
    <div>
      <h1>No hemos podido crear el álbum</h1>
      <p>
        Por favor, <Link to="/albums/new">inténtalo de nuevo</Link> más tarde.
      </p>
      <p>
        <Link to="/">Volver a inicio</Link>
      </p>
    </div>
  )
}
