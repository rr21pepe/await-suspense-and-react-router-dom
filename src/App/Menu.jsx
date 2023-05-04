import { NavLink } from 'react-router-dom'

export default function Menu() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/notes/1">Detalle de nota</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}
