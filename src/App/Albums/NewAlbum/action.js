import { redirect } from 'react-router-dom'

const DEFAULT_USER_ID = 1

export class NewAlbumError extends Error {}

export default async function create({ request, _params }) {
  const data = await request.formData()

  const payload = {
    userId: DEFAULT_USER_ID,
    title: data.get('title'),
  }

  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/albums',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(payload),
      },
    )

    const newAlbum = await response.json()

    // Se debería redireccionar a `/albums/${newAlbum.id}`, pero la API de
    // jsonplaceholder (https://jsonplaceholder.typicode.com/guide/) indica en
    // su sección 'Creating a resource' que cuando se crea un recurso, no se
    // crea en el servidor en realidad, sino que se devuelve una respuesta como
    // si se hubiese creado. Por eso, se redirecciona a `/albums/1`, un recurso
    // que siempre existe.
    return redirect(`/albums/1`)
  } catch (error) {
    throw new NewAlbumError(
      'Hubo un problema creando el nuevo Album. Inténtalo de nuevo más tarde',
    )
  }
}
