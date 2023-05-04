import { useRouteError } from 'react-router-dom'

import NotFound from './404'

export default function Error() {
  const error = useRouteError()

  if (error.status === 404) return <NotFound />

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
