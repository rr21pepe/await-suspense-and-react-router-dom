import { useLoaderData } from 'react-router-dom'

import AlbumView from './View'
import loader from './loader'

export default function Album() {
  const album = useLoaderData()

  return <AlbumView album={album} />
}

export { loader }
