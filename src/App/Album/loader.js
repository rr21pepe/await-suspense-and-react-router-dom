export default async function loader({ params }) {
  const album = await fetchAlbum(params.id)
  return album
}

async function fetchAlbum(id) {
  const url = `https://jsonplaceholder.typicode.com/albums/${id}`
  const response = await fetch(url)
  const album = await response.json()
  return album
}
