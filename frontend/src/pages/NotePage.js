import React, { useState, useEffect } from 'react'
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'

const NotePage = ({ match, history }) => {

  let noteId = match.params.id;
  let [note, setNote] = useState(null);

  useEffect(() => {
    getNote()
  }, [noteId]);


  // função para retornar a nota
  let getNote = async () => {
    if (noteId === 'new') return

    let response = await fetch(`/api/notes/${noteId}`)
    let data = await response.json()
    setNote(data)
  }

  // função de criar a nota
  let createNote = async () => {
    fetch(`/api/notes/`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(note)
    })
  }

  // função de atualizar a nota
  let updateNote = async () => {
    fetch(`/api/notes/${noteId}/`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(note)
    })
  }

  let deleteNote = async () => {
    fetch(`/api/notes/${noteId}/`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
      },
    })
    history.push('/');
  }

  // atualiza a nota e volta para a Home
  let handleSubmit = () => {
    if (noteId !== 'new' && !note.body) {
      deleteNote();
    } else if (noteId !== 'new') {
      updateNote();
      history.push('/');
    } else if (noteId === 'new' && note !== null){
      createNote();
      history.push('/');
    }

  }

  return (
    <div className='note'>
      <div className='note-header'>
        <h3>
          <ArrowLeft onClick={handleSubmit} />
        </h3>
        {noteId !== 'new' ? (
          <button onClick={deleteNote}>Delete</button>
        ) : (
          <button onClick={handleSubmit}>Done</button>
        )}

      </div>
      <textarea onChange={(e) => { setNote({ ...note, 'body': e.target.value }) }} defaultValue={note?.body}></textarea>
    </div>
  )
}

export default NotePage