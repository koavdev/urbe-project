import React from 'react'
import { Link } from 'react-router-dom';
import { ReactComponent as Add } from '../assets/add.svg'

const AddButton = () => {
  return (
    <Link to="/note/new" className="floating-button" onClick={() => { window.location.href = `/note/new` }}>
        <Add />
    </Link>
  )
}

export default AddButton