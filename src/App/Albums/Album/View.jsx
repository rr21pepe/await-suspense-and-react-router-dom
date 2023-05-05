import { Link } from 'react-router-dom'

export default function AlbumView({ album }) {
  return (
    <div>
      <h1>Detalle del albúm {album.id}</h1>
      <p>
        <Link to="/albums/new">Nuevo</Link>
      </p>
      <p>
        <b>Título:</b> {album.title}
      </p>
      <p>
        <Link to={'/albums'}>Volver</Link>
      </p>
    </div>
  )
}
