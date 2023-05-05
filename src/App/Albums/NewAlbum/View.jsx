import { Form } from 'react-router-dom'

export default function NewAlbumView() {
  return (
    <div>
      <Form method="post" action="/albums/new">
        <input type="text" name="title" id="title" placeholder="Título" />
        <button type="submit">Crear</button>
      </Form>
    </div>
  )
}
