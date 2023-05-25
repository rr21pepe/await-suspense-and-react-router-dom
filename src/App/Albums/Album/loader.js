import { defer } from 'react-router-dom'

export default async function loader({ params }) {
  const albumPromise = fetchAlbum(params.id)

  return defer({
    album: albumPromise,
  })
}

async function fetchAlbum(id) {
  const url = `https://jsonplaceholder.typicode.com/albums/${id}`
  const response = await fetch(url)
  const album = await response.json()
  return album
}
