export default async function loader() {
  const notes = await fetchNotes()
  return {
    notes,
  }
}

async function fetchNotes() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { id: 'note-1', text: 'Nota número 1' },
        { id: 'note-2', text: 'Nota número 2' },
        { id: 'note-3', text: 'Nota número 3' },
        { id: 'note-4', text: 'Nota número 4' },
      ])
    }, 1200)
  })
}
