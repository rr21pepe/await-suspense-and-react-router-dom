import { useRouteError } from 'react-router-dom'

import { NewAlbumError, NewAlbumErrorView } from '../Albums'

import Error404 from './404'

export default function Error() {
  const error = useRouteError()

  if (error.status === 404) return <Error404 />

  if (error instanceof NewAlbumError) return <NewAlbumErrorView error={error} />

  return (
    <div>
      <h1>¡Error!</h1>
      <p>Vaya, este error ha sido completamente inesperado.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}
