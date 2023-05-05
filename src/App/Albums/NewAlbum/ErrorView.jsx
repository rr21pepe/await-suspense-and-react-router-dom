import { Link } from 'react-router-dom'

export default function ErrorView() {
  return (
    <div>
      <h1>No hemos podido crear el álbum</h1>
      <p>
        Por favor, <Link to="/albums/new">inténtalo de nuevo</Link> más tarde.
      </p>
      <p>
        <Link to="/">Volver a inicio</Link>
      </p>
    </div>
  )
}
