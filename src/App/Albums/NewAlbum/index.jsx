import NewAlbumView from './View'
import create, { NewAlbumError } from './action'
import ErrorView from './ErrorView'

export default function NewAlbum() {
  return <NewAlbumView />
}

export { create, NewAlbumError, ErrorView }
