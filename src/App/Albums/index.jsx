import { useLoaderData } from 'react-router-dom'

import AlbumsView from './View'
import loader from './loader'
import Album, { loader as albumLoader } from './Album'
import NewAlbum, {
  create as createNewAlbum,
  NewAlbumError,
  ErrorView as NewAlbumErrorView,
} from './NewAlbum'

export default function Albums() {
  const { albums } = useLoaderData()

  return <AlbumsView albums={albums} />
}

export {
  loader,
  Album,
  NewAlbum,
  albumLoader,
  createNewAlbum,
  NewAlbumError,
  NewAlbumErrorView,
}
