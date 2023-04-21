import { keysToCamel } from "./parsers"

async function addNote(params) {
  let note
  const { 
    content,
    notePlaceType,
    notePlaceId
  } = params

  try {
    note = await fetch(
      `/api/notes`,
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ 
          note_place_type: notePlaceType, 
          note_place_id: notePlaceId,
          content
        }),
      }
    )
    const newNote = await note.json()

    return keysToCamel(newNote)
  } catch (error) {
    return { error }
  }
}

async function deleteNote(noteId) {
  let note
  try {
    note = await fetch(
      `/api/notes/${noteId}`,
      {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ 
          note_id: noteId
        }),
      }
    )
    const noteData = await note.json()

    return keysToCamel(noteData)
  } catch (error) {
    return { error }
  }
}

async function updateNote(params) {
  let note
  const { content, id } = params
  
  try {
    note = await fetch(
      `/api/notes/${id}`,
      {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ id, content }),
      }
    )
    const noteData = await note.json()

    return keysToCamel(noteData)
  } catch (error) {
    return { error }
  }
};

export { addNote, deleteNote, updateNote }