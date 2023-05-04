import { Link } from 'react-router-dom'

export default function NotesView({ notes }) {
  return (
    <div>
      <h1>Notas</h1>
      <ul>
        {notes.map(note => (
          <li key={note.id}>
            <Link to={`/notes/${note.id}`}>{note.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
