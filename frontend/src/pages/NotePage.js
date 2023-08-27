import React, { useState, useEffect } from 'react'
import { Add } from '../assets/add.svg'
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'

const NotePage = ({ match, history }) => {

  let noteId = match.params.id;
  let [note, setNote] = useState(null);

  useEffect(() => {
    getNote()
  }, [noteId]);

  let getNote = async () => {
    let response = await fetch(`/api/notes/${noteId}`)
    let data = await response.json()
    setNote(data)
  }

  let handleSubmit = () => {
    //updateNote();
    history.push('/');
    window.location.href = '/'

  }

  return (
    <div className='note'>
      <div className='note-header'>
        <h3>
          <ArrowLeft onClick={handleSubmit}/>
        </h3>
      </div>
      <textarea defaultValue={note?.body}></textarea>
    </div>
  )
}

export default NotePage