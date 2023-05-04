import { useLoaderData } from 'react-router-dom'

import NotesView from './View'
import loader from './loader'

export default function Notes() {
  const { notes } = useLoaderData()

  return <NotesView notes={notes} />
}

export { loader }
