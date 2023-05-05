import { Link } from 'react-router-dom'

export default function AlbumsView({ albums }) {
  return (
    <div>
      <h1>Álbumes</h1>
      <p>
        <Link to="new">Nuevo</Link>
      </p>
      <ul>
        {albums.map(album => (
          <li key={album.id}>
            <Link to={`/albums/${album.id}`}>{album.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
