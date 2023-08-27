import React, { useState, useEffect } from 'react'
import { Add } from '../assets/add.svg'
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'

const NotePage = ({ match, history }) => {

  let noteId = match.params.id;
  let [note, setNote] = useState(null);

  useEffect(() => {
    getNote()
  }, [noteId]);


  // função para retornar a nota
  let getNote = async () => {
    let response = await fetch(`/api/notes/${noteId}`)
    let data = await response.json()
    setNote(data)
  }

  // função de atualizar a nota
  let updateNote = async () => {
    fetch(`/api/notes/${noteId}/update/`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(note)
    })
  }

  let deleteNote = async () => {
    fetch(`/api/notes/${noteId}/delete/`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
      },
    })
    history.push('/');
    window.location.href = '/'
  }

  // atualiza a nota e volta para a Home
  let handleSubmit = () => {
    updateNote();
    history.push('/');
    window.location.href = '/'

  }

  return (
    <div className='note'>
      <div className='note-header'>
        <h3>
          <ArrowLeft onClick={handleSubmit} />
        </h3>
        <button onClick={deleteNote}>Delete</button>
      </div>
      <textarea onChange={(e) => { setNote({ ...note, 'body': e.target.value }) }} defaultValue={note?.body}></textarea>
    </div>
  )
}

export default NotePage