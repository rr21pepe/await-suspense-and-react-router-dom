export default async function loader() {
  const albums = await fetchAlbums()
  return {
    albums,
  }
}

async function fetchAlbums() {
  const response = await fetch('https://jsonplaceholder.typicode.com/albums')
  const albums = await response.json()
  return albums
}
