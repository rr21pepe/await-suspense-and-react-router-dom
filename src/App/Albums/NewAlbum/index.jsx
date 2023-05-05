import NewAlbumView from './View'
import create, { NewAlbumError, NewAlbumNetworkError } from './action'
import ErrorView from './ErrorView'
import NetworkView from './NetworkErrorView'

export default function NewAlbum() {
  return <NewAlbumView />
}

export { create, NewAlbumError, ErrorView, NetworkView, NewAlbumNetworkError }
