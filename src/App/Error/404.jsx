import { Link } from 'react-router-dom'

export default function Error404() {
  return (
    <div>
      <h1>Página no encontrada</h1>
      <p>
        <Link to="/">Volver a inicio</Link>
      </p>
    </div>
  )
}
