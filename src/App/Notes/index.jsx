import NotesView from './View'

export default function Notes() {
  return (
    <NotesView
      notes={[
        {
          text: 'Nota 1',
          id: 'note-1',
        },
        {
          text: 'Nota 2',
          id: 'note-2',
        },
      ]}
    />
  )
}
