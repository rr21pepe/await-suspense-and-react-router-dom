import { Suspense } from 'react'
import { useLoaderData, Await } from 'react-router-dom'

import AlbumsView from './View'
import LoadingView from './LoadingView'
import loader from './loader'
import Album, { loader as albumLoader } from './Album'
import NewAlbum, {
  create as createNewAlbum,
  NewAlbumError,
  NewAlbumNetworkError,
  ErrorView as NewAlbumErrorView,
  NetworkView as NewAlbumNetworkErrorView,
} from './NewAlbum'

export default function Albums() {
  const data = useLoaderData()

  return (
    <Suspense fallback={<LoadingView />}>
      <Await
        resolve={data.albums}
        errorElement={<p>Error cargando los álbumes</p>}
      >
        {albums => <AlbumsView albums={albums} />}
      </Await>
    </Suspense>
  )
}

export {
  loader,
  Album,
  NewAlbum,
  albumLoader,
  createNewAlbum,
  NewAlbumError,
  NewAlbumErrorView,
  NewAlbumNetworkError,
  NewAlbumNetworkErrorView,
}
