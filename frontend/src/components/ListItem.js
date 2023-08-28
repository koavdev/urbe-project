import React from 'react'
import { Link } from 'react-router-dom'

const ListItem = ({ note }) => {

  // retorna a data da atualização da nota
  let getTime = () => {
    return new Date(note.updated).toLocaleDateString()
  }

  // retorna o título da nota (até 45 caracteres)
  let getTitle = (note) => {
    
    let title = note.body.split('\n')[0]
    if(title.length > 45) {
      return title.slice(0, 45)
    }
    return title
  }

  // retorna o conteúdo (body) da nota até 45 caracteres
  let getContent = (note) => {
    let title = getTitle(note)
    let content = note.body.replaceAll('\n', ' ')
    content = content.replaceAll(title, '')

    if (content.length> 45) {
      return content.slice(0, 45) + '...'
    } else {
      return content
    }
  }

  return (
    <Link to={`/note/${note.id}`}>
        <div className='notes-list-item'>
            <h3>{getTitle(note)} <span className='get-time'>• {getTime(note)}</span></h3>
            <p><span>{getContent(note)}</span></p>
        </div>
    </Link>
  )
}

export default ListItem