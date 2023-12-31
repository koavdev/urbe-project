import React, { useState, useEffect } from 'react'
import ListItem from '../components/ListItem'
import AddButton from '../components/AddButton'

const NotesListPage = () => {

  let [notes, setNotes] = useState([])

  useEffect(() => {
    getNotes()
  }, []);

  // chamada de API com método HTTP = GET (getNotes)
  let getNotes = async () => {
    let response = await fetch('/api/notes/')
    let data = await response.json()
    console.log('Data:', data)
    setNotes(data)
  }

  // retorna uma lista com todas as notas criadas/existentes
  return (
    <div className='notes'>
      <div className='notes-header'>
        <h2 className='notes-title'>&#9782; Noteapp</h2>
        <p className='notes-count'>{notes.length}</p>
      </div>
      <div className='notes-list'>
        {notes.map((note, index) => (
          <ListItem key={index} note={note} />
        ))}
      </div>
      <AddButton />
    </div>
  )
}

export default NotesListPage;