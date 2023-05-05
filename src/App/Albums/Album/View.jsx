import { Link } from 'react-router-dom'

export default function AlbumView({ album }) {
  return (
    <div>
      <h1>Detalle del albúm {album.id}</h1>
      <p>
        <b>Título:</b> {album.title}
      </p>
      <p>
        <Link to={'/albums'}>Volver</Link>
      </p>
    </div>
  )
}
