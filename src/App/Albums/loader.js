import { defer } from 'react-router-dom'

export default async function loader() {
  const albumsPromise = fetchAlbums()

  return defer({
    albums: albumsPromise,
  })
}

async function fetchAlbums() {
  const response = await fetch('https://jsonplaceholder.typicode.com/albums')
  const albums = await response.json()
  return albums
}
