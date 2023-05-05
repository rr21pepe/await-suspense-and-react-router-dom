import { Link } from 'react-router-dom'

export default function NetworkView() {
  return (
    <div>
      <h1>Error de conexión</h1>
      <p>No hemos podido crear el álbum.</p>
      <p>
        Una posible causa podría ser que no dispones de conexión a Internet en
        estos momentos.
      </p>
      <p>
        Por favor, <Link to="/albums/new">inténtalo de nuevo</Link> más tarde.
      </p>
      <p>
        <Link to="/">Volver a inicio</Link>
      </p>
    </div>
  )
}
