import { Suspense } from 'react'
import { useLoaderData, Await } from 'react-router-dom'

import AlbumView from './View'
import LoadingView from './LoadingView'
import loader from './loader'

export default function Album() {
  const data = useLoaderData()

  return (
    <Suspense fallback={<LoadingView />}>
      <Await
        resolve={data.album}
        errorElement={<p>Error cargando la información del álbum</p>}
      >
        {album => <AlbumView album={album} />}
      </Await>
    </Suspense>
  )
}

export { loader }
