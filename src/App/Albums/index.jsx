import { useLoaderData } from 'react-router-dom'

import AlbumsView from './View'
import loader from './loader'

export default function Albums() {
  const { albums } = useLoaderData()

  return <AlbumsView albums={albums} />
}

export { loader }
